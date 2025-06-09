'use client';

import Footer from "@/components/Footer";
import RoleMatcherModal from "@/components/RoleMatcherModal";
import Image from "next/image"
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const screens = [
  '/desk/screen-basement.png',
  '/desk/screen-graphic-design.png',
  '/desk/screen-jason-cooper-site.png',
  '/desk/screen-server-ops.png',
];

export default function HomePage() {
  const [isLampOn, setIsLampOn] = useState<boolean>(false);
  const [isRoleMatcherModalOpen, setIsRoleMatcherModalOpen] =useState<boolean>(false);

  const emptyScreen = '/desk/empty-screen.png';

  const [screen, setScreen] = useState<string>(emptyScreen);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * screens.length);
    setScreen(screens[randomIndex]);
  }, []);

  const playSound = useCallback((src: string) => {
    const audio = new Audio(src);
    audio.play().catch((e) => {
      console.warn('Audio play failed:', e);
    });
  }, []);

  const playErrorSound = () => playSound('/desk/error.flac');

  const handleLampClick = () => {
    playSound('/desk/lamp-switch.wav');

    setIsLampOn(!isLampOn);
  };

  const handleResumeMouseClick = () => {
    playSound('/desk/resume-paper-rustling.wav');
  };

  const handleKeyboardClick = () => {
    if (isRoleMatcherModalOpen) {
      return;
    }

    playSound('/desk/keyboard-typing.mp3');

    setIsRoleMatcherModalOpen(true);
  };

  const handlePensClick = () => {
    playErrorSound();
  };

  const handlePencilClick = () => {
    playErrorSound();
  };

  const handleMouseClick = () => {
    playErrorSound();
  };

  const handleBookClick = () => {
    playErrorSound();
  };

  const handlePhoneClick = () => {
    playErrorSound();
  };

  return (
    <>
      <div className="relative w-full max-h-[calc(100vh-100px)] scale-250 md:scale-100 md:overflow-hidden">
        <div className="relative w-full aspect-[16/9] top-[72px] md:top-auto">
          <div className="absolute inset-0 z-[-10]" />

          {/* <Image
            src="/desk.svg"
            alt=""
            width={1671}
            height={1277}
            className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[70%] opacity-50"
          /> */}

          <Image
            src="/desk/desk.svg"
            alt=""
            width={1855}
            height={981}
            className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[70%] opacity-100"
          />

          <Image
              src="/desk/pens.svg"
              alt=""
              width={115}
              height={204}
              className="absolute top-[18%] left-[40%] w-[4.5%]"
              onClick={handlePensClick}
            />

          <div className="group">
            <Image
              src="/desk/lamp.svg"
              alt=""
              width={113}
              height={402}
              className="absolute top-[3%] left-[31%] w-[4.25%] hover:cursor-pointer transition-transform duration-300 transform hover:scale-110 origin-center"
              onClick={handleLampClick}
            />

            <Image
              src="/desk/lamp-on.svg"
              alt=""
              width={325}
              height={427}
              className={`absolute top-[10.25%] left-[30.5%] w-[9%] pointer-events-none ${isLampOn ? 'opacity-100' : 'opacity-0'}  transition-transform duration-300 transform group-hover:scale-104`}
            />
          </div>

          <Image
            src="/desk/pencil.svg"
            alt=""
            width={180}
            height={60}
            className="absolute top-[41%] left-[48%] w-[7%]"
            onClick={handlePencilClick}
          />

          <div className="group">
            <Link href="/projects">
              <Image
                src="/desk/screen.svg"
                alt=""
                width={760}
                height={560}
                className="absolute top-[7%] left-[45%] w-[29%] hover:cursor-pointer transition-transform duration-300 transform group-hover:scale-110 origin-center"
              />

              <Image
                src={screen}
                alt=""
                width={760}
                height={560}
                className="absolute top-[7.375%] left-[45.1875%] w-[28.5625%] animate-[fadeIn_1s_ease-in_forwards] hover:cursor-pointer transition-transform duration-300 transform group-hover:scale-110 origin-center pointer-events-none"
              />
            </Link>

            <div className="absolute top-[6%] left-[57%] bg-white/80 text-pink-500 px-4 py-1 text-lg rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Browse Jason's projects
            </div>
          </div>

          <div className="group">
            <Image
              src="/desk/keyboard.svg"
              alt=""
              width={448}
              height={245}
              className="absolute top-[40%] left-[36.5%] w-[18%] hover:cursor-pointer transition-transform duration-300 transform hover:scale-110 origin-center"
              onClick={handleKeyboardClick}
            />

            <div className="absolute top-[38%] z-10 left-[42%] bg-white/80 text-pink-500 px-4 py-1 text-lg rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Try the Role Matcher
            </div>
          </div>

          <Image
            src="/desk/mouse.svg"
            alt=""
            width={118}
            height={87}
            className="absolute top-[54%] left-[54%] w-[4.75%]"
            onClick={handleMouseClick}
          />

          <div className="group">
            <Link href="/resume">
              <Image
                src="/desk/resume.svg"
                alt=""
                width={118}
                height={87}
                className="absolute top-[51%] left-[60.5%] w-[11.75%] hover:cursor-pointer transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={handleResumeMouseClick}
              />
            </Link>

            <div className="absolute top-[58%] mt-2 left-[70%] bg-white/80 text-pink-500 px-4 py-1 text-lg rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Read Jason's resume
            </div>
          </div>

          <div className="group">
            <Link href="/about-me">
              <Image
                src="/desk/photo.svg"
                alt=""
                width={125}
                height={263}
                className="absolute top-[40%] left-[73.25%] w-[4.75%] hover:cursor-pointer transition-transform duration-300 transform hover:scale-110 origin-center"
              />
            </Link>

            <div className="absolute top-[38%] mt-2 left-[75%] bg-white/80 text-pink-500 px-4 py-1 text-lg rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              About Jason
            </div>
          </div>

          <Image
            src="/desk/book.svg"
            alt=""
            width={314}
            height={133}
            className="absolute top-[31.5%] left-[26.25%] w-[12%]"
            onClick={handleBookClick}
          />

          <Image
            src="/desk/phone.svg"
            alt=""
            width={64}
            height={73}
            className="absolute top-[32%] left-[23%] w-[3%]"
            onClick={handlePhoneClick}
          />
        </div>
      </div>

      <div className="absolute z-[-20] bottom-0 left-1/2 transform -translate-x-1/2">
        <div>
          <Footer />
        </div>
      </div>

      <RoleMatcherModal isOpen={isRoleMatcherModalOpen} setIsOpen={setIsRoleMatcherModalOpen} />
    </>
  );
}
