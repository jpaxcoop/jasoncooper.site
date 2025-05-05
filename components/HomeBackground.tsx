import React from 'react';

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-tr bg-gradient-to-r from-blue-200 via-blue-200 to-pink-200" />

        <div className="absolute top-[-10vh] left-[70vw] z-0 animate-cloud-initial" style={{ animationDuration: '65s' }}>
            <img src="/cloud.png" alt="" className="h-[40vh]" />
        </div>

        <div className="absolute top-[-16vh] left-[10vw] z-0 animate-cloud-initial" style={{ animationDuration: '65s' }}>
            <img src="/cloud.png" alt="" className="h-[48vh]" />
        </div>

        <div className="absolute top-[-20vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '105s' }}>
            <img src="/cloud.png" alt="" className="h-[44vh]" />
        </div>

        <div className="absolute top-[-18vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '95s', animationDelay: '5s' }}>
            <img src="/cloud.png" alt="" className="h-[40vh]" />
        </div>

        <div className="absolute top-[-15vh] left-[-35vw] z-0 animate-cloud-loop" style={{ animationDuration: '90s', animationDelay: '15s' }}>
            <img src="/cloud.png" alt="" className="h-[36vh]" />
        </div>

        <div className="absolute top-[-12vh] left-[-45vw] z-0 animate-cloud-loop" style={{ animationDuration: '100s', animationDelay: '30s' }}>
            <img src="/cloud.png" alt="" className="h-[40vh]" />
        </div>

        <div className="absolute top-[-16vh] left-[-55vw] z-0 animate-cloud-loop" style={{ animationDuration: '80s', animationDelay: '40s' }}>
            <img src="/cloud.png" alt="" className="h-[48vh]" />
        </div>

        <div className="absolute top-[-12vh] left-[-55vw] z-0 animate-cloud-loop" style={{ animationDuration: '95s', animationDelay: '50s' }}>
            <img src="/cloud.png" alt="" className="h-[44vh]" />
        </div>

        <div
            id="homeOfficeSvg"
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 ease-in-out"
            style={{ backgroundImage: "url('/home-office.svg')" }}
        />
    </div>
  );
}
