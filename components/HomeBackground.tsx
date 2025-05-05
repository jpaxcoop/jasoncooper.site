import Image from 'next/image';
import React from 'react';

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 z-[-1]">
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

        <div
            id="homeOfficeSvg"
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 ease-in-out"
            style={{ backgroundImage: "url('/home-office.svg')" }}
        />
    </div>
  );
}
