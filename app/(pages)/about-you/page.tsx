'use client';

import TimeDisplay from "@/components/TimeDisplay";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Stage from "@/components/Stage";
import SkyAndGround from "@/components/SkyAndGround";

const MapView = dynamic(() => import('@/components/MapView'), {
    ssr: false,
});

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

export default function AboutYouPage() {
    const [data, setData] = useState<VisitorData | null>(null);

    useEffect(() => {
        fetch('/api/visitor')
          .then((res) => res.json())
          .then(setData);
    }, []);

    if (!data) return (
        <div className="relative">
            <Stage className="absolute top-0 w-full h-[80vh]"></Stage>
        </div>
    );

    return (
        <>
            <div className="relative">
                <div className="max-w-full xl:max-w-6xl mx-auto p-4 md:px-8 opacity-0 animate-fadeIn">
                    <div className="flex flex-wrap md:flex-nowrap justify-between">
                        <div className="w-full md:w-sm text-white text-shadow-lg">
                            <div className="bg-black/25 rounded-lg p-4 mb-4">
                                <div className="flex justify-between gap-4 mb-1">
                                    <div className="font-bold tracking-wide">IP Address</div>
                                    <div>{data.ip}</div>
                                </div>

                                <div className="flex justify-between gap-4 mb-1">
                                    <div className="font-bold tracking-wide">Browser</div>
                                    <div>{data.browser}</div>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <div className="font-bold tracking-wide">OS</div>
                                    <div>{data.os}</div>
                                </div>
                            </div>

                            <div className="bg-black/25 rounded-lg p-4 mb-4">
                                <div className="flex justify-between gap-4">
                                    <div className="font-bold tracking-wide">Location</div>
                                    <div className="text-right">
                                        {data.city}, {data.region}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/25 rounded-lg overflow-hidden mb-4">
                                <MapView lat={data.latitude} lng={data.longitude} height={240} zoom={10} />
                            </div>
                        </div>

                        <div className="w-full text-center md:text-right text-white text-shadow-lg">
                            <div className="text-3xl">
                                {Math.round(data.weather?.temp ?? 0)}&deg; F / {data.weather?.main}
                            </div>

                            <div className="text-lg">
                                <TimeDisplay timezone={data.timezone ?? ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 w-full h-[80vh] z-[-10]">
                <SkyAndGround data={data}></SkyAndGround>
            </div>
        </>
    );
}