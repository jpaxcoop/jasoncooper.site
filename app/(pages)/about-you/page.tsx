'use client';

import HomeBackground from "@/components/HomeBackground";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
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
    const [data, setData] = useState<VisitorData | null>(null);

    useEffect(() => {
        fetch('/api/visitor')
          .then((res) => res.json())
          .then(setData);
    }, []);

    useEffect(() => {
        if (!data) return;

        const aboutYouContainer = document.getElementById('about-you-container');

        const updateHeight = () => {
            if (aboutYouContainer) {
              const viewportHeight = window.innerHeight;
              const docHeight = Math.max(
                document.body.scrollHeight,
              );
              const maxHeight = Math.max(viewportHeight, docHeight);
              console.log(maxHeight);
              aboutYouContainer.style.height = `${maxHeight}px`;
            }
          };
        
        updateHeight(); // set initially
        window.addEventListener('resize', updateHeight);
    
        return () => window.removeEventListener('resize', updateHeight);
    }, [data]);

    if (!data) return (
        <>
        </>
    );

    return (
        <>
            <div id="about-you-container" className="relative pl-[5vw] pt-16 pb-8">
                <div
                    className="absolute inset-0 w-full bottom-0 overflow-hidden"
                >
                    <Image
                        src="/hand-holding.svg"
                        alt=""
                        width={0}
                        height={0}
                        style={{position: 'absolute', width: '74vw', height: 'auto', top: '18vw', left: '.5vw'}}
                    />
                </div>

                <div className="bg-black w-[32vw] p-[1vw] rotate-[0.5deg] h-[60vw] rounded-[3vw]">
                    <div className="bg-black w-[1.5vw] h-[5vw] rotate-[0.5deg] rounded-[.25vw] absolute left-[-0.5vw] top-[13vw]">
                    </div>

                    <div className="bg-black w-[1.5vw] h-[5vw] rotate-[0.5deg] rounded-[.25vw] absolute left-[-0.5vw] top-[18vw]">
                    </div>

                    <div className="bg-black w-[1.5vw] h-[8vw] rotate-[0.5deg] rounded-[.25vw] absolute right-[-0.5vw] top-[15vw]">
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
                        <div className="text-right">{data.city}, {data.region}</div>
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
            </div>

            <div className="fixed top-0 z-[-1] w-full h-full bg-black/20"></div>

            <HomeBackground />
        </>
    );
}