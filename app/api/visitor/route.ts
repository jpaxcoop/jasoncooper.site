import { NextRequest, NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'Unknown';
  const userAgent = req.headers.get('user-agent') ?? 'Unknown';

  const parser = new UAParser(userAgent);
  const ua = parser.getResult();

  let locationData = null;

  if (ip !== 'Unknown') {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: {
          'User-Agent': req.headers.get('user-agent') || 'Mozilla/5.0',
          'Accept': 'application/json',
        },
      });

      locationData = await res.json();
    } catch (error) {
      console.error('Geolocation API error:', error);
    }
  }

  return NextResponse.json({
    ip,
    city: locationData?.city ?? null,
    region: locationData?.region ?? null,
    country: locationData?.country_name ?? null,
    timezone: locationData?.timezone ?? null,
    browser: ua.browser.name ?? 'Unknown',
    os: ua.os.name ?? 'Unknown',
  });
}
