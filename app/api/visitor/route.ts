import { NextRequest, NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

export async function GET(req: NextRequest) {
  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const IPDATA_API_KEY = process.env.NEXT_PUBLIC_IPDATA_API_KEY;

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? null;
  // const ip = '73.82.64.135';
  const userAgent = req.headers.get('user-agent') ?? null;

  const parser = userAgent ? new UAParser(userAgent) : null;
  const parsedAgent = parser ? parser.getResult() : null;

  let locationData = null;
  let weatherData = null;

  if (ip) {
    try {
      const res = await fetch(`https://api.ipdata.co/${ip}?api-key=${IPDATA_API_KEY}`);

      locationData = await res.json();
    } catch (error) {
      console.error('Geolocation API error:', error);
    }
  }

  const city = locationData?.city;

  if (city && WEATHER_API_KEY) {
    const cityEncoded = encodeURIComponent(city);
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityEncoded}&appid=${WEATHER_API_KEY}&units=imperial`;

    try {
      const weatherRes = await fetch(weatherUrl);
      weatherData = await weatherRes.json();
    } catch (error) {
      console.error('Weather fetch failed:', error);
    }
  }

  return NextResponse.json({
    ip,
    city: locationData?.city,
    region: locationData?.region,
    country: locationData?.country_name,
    latitude: locationData?.latitude,
    longitude: locationData?.longitude,
    timezone: locationData?.time_zone.name,
    browser: parsedAgent?.browser.name,
    os: parsedAgent?.os.name,
    weather: weatherData ? {
      main: weatherData.weather?.[0]?.main,
      temp: weatherData.main?.temp,
    } : null,
  });

  // return NextResponse.json({
  //   ip,
  //   city: 'Peachtree Corners',
  //   region: 'Georgia',
  //   country: 'US',
  //   latitude: 33.9733,
  //   longitude:  -84.2231,
  //   timezone: 'America/New_York',
  //   browser: 'Chrome',
  //   os: 'Windows',
  //   weather: {
  //     main: 'Clouds',
  //     temp: 66,
  //   },
  // });
}
