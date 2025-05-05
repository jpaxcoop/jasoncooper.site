'use client';

import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

type VisitorData = {
    ip: string;
    city: string | null;
    region: string | null;
    country: string | null;
    timezone: string | null;
    browser: string;
    os: string;
};

export default function AboutYouPage() {
    useEffect(() => {
        const original = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#deaa87';

        return () => {
            document.body.style.backgroundColor = original;
        };
    }, []);

    const [data, setData] = useState<VisitorData | null>(null);

    useEffect(() => {
        fetch('/api/visitor')
          .then((res) => res.json())
          .then(setData);
    }, []);

    if (!data) return (
        <>
        </>
    );

    return (
        <div className="relative bg-black shadow-[16px_8px_0px_rgba(160,90,44,1)] w-[35vw] ml-12 my-16 p-[1.5vw] rotate-[0.5deg] h-[60vw] rounded-[3vw]">
            <div className="bg-black w-[1.5vw] h-[5vw] rotate-[0.5deg] rounded-[.25vw] absolute left-[-0.5vw] top-[13vw]">
            </div>

            <div className="bg-black w-[1.5vw] h-[5vw] rotate-[0.5deg] rounded-[.25vw] absolute left-[-0.5vw] top-[18vw]">
            </div>

            <div className="bg-black shadow-[16px_8px_0px_rgba(160,90,44,1)] w-[1.5vw] h-[8vw] rotate-[0.5deg] rounded-[.25vw] absolute right-[-0.5vw] top-[15vw]">
            </div>

            <div className="bg-gray-700 rounded-t-[1.5vw] h-[18vw] text-center leading-none">
                <div className="text-gray-300 text-[12vw]">
                    <PersonIcon fontSize="inherit" />
                </div>

                <div className="text-white text-[2vw]">
                    New Visitor
                </div>
            </div>

            <div className="text-white text-[1.5vw] rounded-[0.5vw] bg-gray-900 py-[1vw] px-[2vw] m-[1vw] flex justify-between">
                <div>IP Address</div>
                <div>{data.ip}</div>
            </div>

            <div className="text-white text-[1.5vw] rounded-[0.5vw] bg-gray-900 py-[1vw] px-[2vw] m-[1vw] flex justify-between">
                <div>Location</div>
                <div>{data.city}, {data.region}, {data.country}</div>
            </div>

            <div className="text-white text-[1.5vw] rounded-[0.5vw] bg-gray-900 py-[1vw] px-[2vw] m-[1vw] flex justify-between">
                <div>Timezone</div>
                <div>{data.timezone}</div>
            </div>

            <div className="text-white text-[1.5vw] rounded-[0.5vw] bg-gray-900 py-[1vw] px-[2vw] m-[1vw] flex justify-between">
                <div>Browser</div>
                <div>{data.browser}</div>
            </div>

            <div className="text-white text-[1.5vw] rounded-[0.5vw] bg-gray-900 py-[1vw] px-[2vw] m-[1vw] flex justify-between">
                <div>OS</div>
                <div>{data.os}</div>
            </div>
        </div>
    );
}