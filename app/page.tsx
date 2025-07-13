'use client';

import Footer from "@/components/Footer";
import RoleMatcherModal from "@/components/RoleMatcherModal";
import { useContactModal } from "@/context/GlobalContext";
import Image from "next/image"
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const screens = [
  '/desk/screen-basement.png',
  '/desk/screen-graphic-design.png',
  '/desk/screen-jason-cooper-site.png',
  '/desk/screen-server-ops.png',
  '/desk/screen-aws-uploading.png',
];

export default function HomePage() {
  const [isLampOn, setIsLampOn] = useState<boolean>(false);
  const [isRoleMatcherModalOpen, setIsRoleMatcherModalOpen] =useState<boolean>(false);

  const emptyScreen = '/desk/empty-screen.png';

  const [screen, setScreen] = useState<string>(emptyScreen);

  const { showContactModal } = useContactModal();

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

  return (
    <main className="flex-grow flex flex-col overflow-x-hidden">
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
              className="absolute top-[3%] left-[31%] w-[4.25%] hover:cursor-pointer hover-easter-egg-shadow"
              onClick={handleLampClick}
            />

            <Image
              src="/desk/lamp-on.svg"
              alt=""
              width={325}
              height={427}
              className={`absolute top-[10.25%] left-[30.5%] w-[9%] pointer-events-none ${isLampOn ? 'opacity-100' : 'opacity-0'}  transition-transform duration-300`}
            />
          </div>

          <div className="group">
            <Link href="/projects">
              <Image
                priority={true}
                src="/desk/screen.svg"
                alt=""
                width={760}
                height={560}
                className="absolute top-[7%] left-[45%] w-[29%] hover:cursor-pointer"
              />

              <Image
                src={screen}
                alt=""
                width={760}
                height={560}
                className="absolute top-[7.375%] left-[45.1875%] w-[28.5625%] animate-[fadeIn_1s_ease-in_forwards] hover:cursor-pointer pointer-events-none"
              />

              <div className="hidden lg:block absolute top-[4%] left-[60%] border-pink-500/50 border-3 px-4 py-1 text-[1.25vw] rounded group-hover:bg-pink-500/50 bg-white/25 opacity-0 animate-fadeIn hover:cursor-pointer" style={{animationDelay: '1s'}}>
                <div className="absolute w-[25%] h-[200%] top-1/2 left-[-25%] border-pink-500/50 border-t-3 border-l-3"></div>
                <div className="absolute h-[25%] aspect-square rounded-full top-[250%] left-[-24.5%] transform -translate-x-1/2 -translate-y--1 bg-pink-500/50"></div>
                Jason's projects
              </div>
            </Link>
          </div>

          <div className="group">
            <Image
              src="/desk/keyboard.svg"
              alt=""
              width={448}
              height={245}
              className="absolute top-[40%] left-[36.5%] w-[18%] hover:cursor-pointer"
              onClick={handleKeyboardClick}
            />

            <div className="hidden lg:block absolute top-[56%] left-[22%] border-pink-500/50 border-3 px-4 py-1 text-[1.25vw] rounded bg-pink-600/80 group-hover:bg-pink-500 opacity-0 animate-fadeIn hover:cursor-pointer" style={{animationDelay: '1.75s'}} onClick={handleKeyboardClick}>
              <div className="absolute w-[15%] h-[240%] bottom-1/2 right-[-15%] border-pink-500/50 border-b-3 border-r-3"></div>
              <div className="absolute h-[25%] aspect-square rounded-full top-[-204.5%] right-[-18%] transform -translate-x-1/2 -translate-y-1 bg-pink-500/50"></div>
              Hiring? Try the Role Matcher
            </div>
          </div>

          <Image
            src="/desk/pencil.svg"
            alt=""
            width={180}
            height={60}
            className="absolute top-[41%] left-[48%] w-[7%]"
            onClick={handlePencilClick}
          />

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
                className="absolute top-[51%] left-[60.5%] w-[11.75%] hover:cursor-pointer"
                onClick={handleResumeMouseClick}
              />

              <div className="hidden lg:block absolute top-[72%] left-[50%] border-pink-500/50 border-3 px-4 py-1 text-[1.25vw] rounded group-hover:bg-pink-500/50 bg-white/25 opacity-0 animate-fadeIn hover:cursor-pointer" style={{animationDelay: '1.5s'}}>
                <div className="absolute w-[35%] h-[300%] bottom-1/2 right-[-37%] border-pink-500/50 border-b-3 border-r-3"></div>
                <div className="absolute h-[25%] aspect-square rounded-full top-[-265%] left-[136.5%] transform -translate-x-1/2 -translate-y-1 bg-pink-500/50"></div>
                Jason's resumé
              </div>
            </Link>
          </div>

          <div className="group">
            <Link href="/about-me">
              <Image
                src="/desk/photo.svg"
                alt=""
                width={125}
                height={263}
                className="absolute top-[40%] left-[73.25%] w-[4.75%] group-hover:cursor-pointer"
              />

              <div className="hidden lg:block absolute top-[34%] left-[76.5%] border-pink-500/50 border-3 px-4 py-1 text-[1.25vw] rounded group-hover:bg-pink-500/50 bg-white/25 opacity-0 animate-fadeIn hover:cursor-pointer" style={{animationDelay: '1.25s'}}>
                <div className="absolute w-[15.5%] h-[180%] top-1/2 left-[-15.5%] border-pink-500/50 border-t-3 border-l-3"></div>
                <div className="absolute h-[25%] aspect-square rounded-full top-[228%] left-[-14.5%] transform -translate-x-1/2 -translate-y--1 bg-pink-500/50"></div>
                About Jason
              </div>
            </Link>
          </div>

          <Image
            src="/desk/book.svg"
            alt=""
            width={314}
            height={133}
            className="absolute top-[31.5%] left-[26.25%] w-[12%]"
            onClick={handleBookClick}
          />

          <div className="group" onClick={showContactModal}>
            <Image
              src="/desk/phone.svg"
              alt=""
              width={64}
              height={73}
              className="absolute top-[32%] left-[23%] w-[3%] group-hover:cursor-pointer"
            />

            <Image
              src="/desk/iphone-locked-screen.png"
              alt=""
              width={64}
              height={73}
              className="absolute top-[32%] left-[23%] w-[3%] group-hover:cursor-pointer"
            />

            <div className="hidden lg:block absolute top-[21.5%] left-[13%] border-pink-500/50 border-3 px-4 py-1 text-[1.25vw] rounded group-hover:bg-pink-500/50 bg-white/25 opacity-0 animate-fadeIn hover:cursor-pointer" style={{animationDelay: '1.25s'}}>
              <div className="absolute w-[15%] h-[200%] top-1/2 left-[102%] border-pink-500/50 border-t-3 border-r-3"></div>
              <div className="absolute h-[25%] aspect-square rounded-full top-[250%] left-[116%] transform -translate-x-1/2 -translate-y--1 bg-pink-500/50"></div>
              Contact Jason
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-[-20] bottom-0 left-1/2 transform -translate-x-1/2">
        <div>
          <Footer />
        </div>
      </div>

      <RoleMatcherModal isOpen={isRoleMatcherModalOpen} setIsOpen={setIsRoleMatcherModalOpen} />
    </main>
  );
}
