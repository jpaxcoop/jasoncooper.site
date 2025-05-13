import Image from "next/image";

type SkyMap = {
  sunHeight: string;
  sunColor: string;
  skyGradient: string;
  groundGradient: string;
};

type WeatherData = {
  temp: number | undefined;
  main: string;
};

type VisitorData = {
  ip: string;
  city: string | null;
  region: string | null;
  country: string | null;
  latitude: number;
  longitude: number;
  timezone: string | undefined;
  browser: string | null;
  os: string | null;
  weather: WeatherData | null;
};

export default function SkyAndGround({
    data,
  }: Readonly<{
    data: VisitorData;
}>) {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: data.timezone,
    hour: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const hour = parts.find(p => p.type === 'hour')?.value;
  const parsedHour = Number(hour);

  const skyMap: { [key: number]: SkyMap } = {
    6: { sunHeight: 'bottom-[16%]', sunColor: 'bg-orange-200', skyGradient: 'from-fuchsia-100 via-fuchsia-200', groundGradient: 'to-green-100'},
    7: { sunHeight: 'bottom-[24%]', sunColor: 'bg-orange-200', skyGradient: 'from-fuchsia-200 via-violet-300', groundGradient: 'to-green-200'},
    8: { sunHeight: 'bottom-[32%]', sunColor: 'bg-amber-200', skyGradient: 'from-indigo-200 via-indigo-300', groundGradient: 'to-green-300'},
    9: { sunHeight: 'bottom-[40%]', sunColor: 'bg-amber-200', skyGradient: 'from-indigo-200 via-indigo-300', groundGradient: 'to-green-400'},
    10: { sunHeight: 'bottom-[48%]', sunColor: 'bg-yellow-200', skyGradient: 'from-sky-100 via-sky-200', groundGradient: 'to-green-400'},
    11: { sunHeight: 'bottom-[56%]', sunColor: 'bg-yellow-200', skyGradient: 'from-sky-100 via-sky-200', groundGradient: 'to-green-500'},
    12: { sunHeight: 'bottom-[64%]', sunColor: 'bg-yellow-300', skyGradient: 'from-sky-200 via-sky-300', groundGradient: 'to-green-500'},
    13: { sunHeight: 'bottom-[64%]', sunColor: 'bg-yellow-200', skyGradient: 'from-sky-200 via-sky-300', groundGradient: 'to-green-600'},
    14: { sunHeight: 'bottom-[56%]', sunColor: 'bg-yellow-200', skyGradient: 'from-sky-300 via-sky-400', groundGradient: 'to-green-600'},
    15: { sunHeight: 'bottom-[48%]', sunColor: 'bg-amber-200', skyGradient: 'from-sky-300 via-sky-400', groundGradient: 'to-green-700'},
    16: { sunHeight: 'bottom-[40%]', sunColor: 'bg-amber-200', skyGradient: 'from-sky-300 via-sky-400', groundGradient: 'to-green-700'},
    17: { sunHeight: 'bottom-[32%]', sunColor: 'bg-orange-200', skyGradient: 'from-pink-200 via-sky-400', groundGradient: 'to-green-800'},
    18: { sunHeight: 'bottom-[24%]', sunColor: 'bg-orange-200', skyGradient: 'from-pink-300 via-sky-600', groundGradient: 'to-green-800'},
    19: { sunHeight: 'bottom-[16%]', sunColor: 'bg-orange-300', skyGradient: 'from-pink-800 via-sky-800', groundGradient: 'to-green-900'},
  };

  const sunHeight = skyMap[parsedHour]?.sunHeight ?? 'hidden';
  const sunColor = skyMap[parsedHour]?.sunColor ?? '';
  const skyGradient = skyMap[parsedHour]?.skyGradient ?? 'from-gray-700';
  const groundGradient = skyMap[parsedHour]?.groundGradient ?? 'to-gray-800';

  const weatherMain = data.weather?.main.toLowerCase();
  const cloudsDisplay = 
    weatherMain === 'clouds'
    || weatherMain === 'rain'
    || weatherMain === 'snow'
      ? '' : 'hidden';

  return (
    <>
      <div className={`absolute z-[-10] top-0 left-0 w-full h-3/4 bg-linear-to-t ${skyGradient} to-transparent h-3/4`} />
      <div className={`absolute z-[-1] bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-transparent ${groundGradient}`} />
      <div className={`absolute z-[-5] ${sunHeight} left-1/2 transform -translate-x-1/2 w-[8vh] h-[8vh] rounded-full ${sunColor}`}></div>

      <div className={`absolute z-[-3] top-[15%] w-full h-3/4 ${cloudsDisplay}`}>
        <div className="absolute top-[35%] left-[30%] h-3/4">
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "40%", width: "auto", opacity: "0.67" }}
            />
        </div>
        <div className="absolute top-[20%] left-[15%] h-3/4">
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "45%", width: "auto", opacity: "0.67" }}
            />
        </div>
        <div className="absolute top-[25%] left-[65%] h-3/4">
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "45%", width: "auto", opacity: "0.67" }}
            />
        </div>
        <div className="absolute top-[30%] left-[40%] h-3/4">
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "65%", width: "auto", opacity: "0.67" }}
            />
        </div>
      </div>
    </>
  );
}
