'use client';

import { useEffect, useState } from "react";
import Stage from "@/components/Stage";
import AboutYouWelcome from "@/components/AboutYouWelcome";
import AboutYouData from "@/components/AboutYou";

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
    const [showWelcome, setShowWelcome] = useState(true);
    const [data, setData] = useState<VisitorData | null>(null);

    useEffect(() => {
        fetch('/api/visitor')
          .then((res) => res.json())
          .then(setData);
    }, []);

    return (
        <>
            {showWelcome ? (
                <AboutYouWelcome onDismiss={() => setShowWelcome(false)} />
            ) : (
                !data ? (
                    <div className="relative">
                        <Stage className="absolute top-0 w-full h-[80vh]">
                            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <div className="text-xl animate-pulse">Loading...</div>
                            </div>
                        </Stage>
                    </div>
                ) : (
                    <AboutYouData data={data} />
                )
            )}

            
        </>
    );
}