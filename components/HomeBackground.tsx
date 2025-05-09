'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function HomeBackground() {
  const homeOfficeImages = [
    '/home-office-1.svg',
    '/home-office-2.svg',
    '/home-office-3.svg',
    '/home-office-4.svg',
  ];

  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * homeOfficeImages.length);
    setBgImage(homeOfficeImages[randomIndex]);
  }, []);

  return (
    <div className="fixed h-full w-full top-0 z-[-10] overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr bg-gradient-to-r from-blue-200 via-blue-200 to-pink-200" />

        <div className="absolute top-[-18vh] left-[50vw] z-0 animate-cloud-initial" style={{ animationDuration: '65s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "48vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-16vh] left-[10vw] z-0 animate-cloud-initial" style={{ animationDuration: '65s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "48vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-20vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '105s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "44vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-18vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '95s', animationDelay: '5s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "40vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-15vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '90s', animationDelay: '15s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "36vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-12vh] left-[-45vw] z-0 animate-cloud-loop" style={{ animationDuration: '100s', animationDelay: '30s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "40vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-16vh] left-[-55vw] z-0 animate-cloud-loop" style={{ animationDuration: '80s', animationDelay: '40s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "48vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-12vh] left-[-55vw] z-0 animate-cloud-loop" style={{ animationDuration: '95s', animationDelay: '50s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "44vh", width: "auto" }}
            />
        </div>

        <div className="absolute top-[-10vh] left-[-55vw] z-0 animate-cloud-loop" style={{ animationDuration: '90s', animationDelay: '60s' }}>
            <Image
                src="/cloud.png"
                alt=""
                height={0}
                width={100}
                style={{ height: "48vh", width: "auto" }}
            />
        </div>

        <div
            id="homeOfficeSvg"
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 ease-in-out"
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
        />
    </div>
  );
}
