'use client';

import Image from "next/image";
import { useState } from "react";

const aboutBlocks = [
    {
        id: 1,
        imgSrc: '/family.jpg',
        title: 'Jason\'s family',
        text: 'I am a family man. I have a beautiful wife, Kelly, and a wonderful son, Paxton. They both keep me on my toes!',
    },
    {
        id: 2,
        imgSrc: '/powder-springs.jpg',
        title: 'Powder Springs',
        text: 'I live in Powder Springs, a small town about 45 minutes west of Atlanta. In my little corner of Powder Springs there a lot of horse farms.',
    },
    {
        id: 3,
        imgSrc: '/kirby.jpg',
        title: 'Kirby',
        text: 'My wife rescued Kirby from a pet shelter she volunteers at. He has become part of the family and is very active, making sure we get to local parks almost every day.',
    },
    {
        id: 4,
        imgSrc: '/big-green-egg.jpg',
        title: 'Jason\'s Big Green Egg',
        text: 'I enjoy grilling on my Big Green Egg. The Egg gives food a little extra flavor, and it\'s very forgiving - it\'s hard to overcook something. My specialties include spatchcocked chicken and grilled romaine.',
    },
    {
        id: 5,
        imgSrc: '/books.jpg',
        title: 'Jason\'s books',
        text: 'I love to read, especially science fiction. Two of my favorite authors are William Gibson (who coined the word "cyberspace") and Robert Heinlein (one of the "Big Three" science fiction writers along with Isaac Asminov and Arthur C. Clarke).',
    },
    {
        id: 6,
        imgSrc: '/go-dawgs.jpg',
        title: 'GO DAWGS!',
        text: 'GO DAWGS! I was born in Athens, GA, home of the University of Georgia Bulldogs. I love watching the Dawgs play football and make it to a couple of games each year.',
    },
    {
        id: 7,
        imgSrc: '/jason-diving.jpg',
        title: 'Jason scuba-diving',
        text: 'I enjoy scuba-diving. I dive reefs and wrecks. It\'s always a thrill to see all the life under the water. The largest animals I\'ve seen are whale sharks, grouper, and sea turtles.',
    },
    {
        id: 8,
        imgSrc: '/battlecat.jpg',
        title: 'Jason racing',
        text: 'A friend has built a race car from a Jaguar XJ6R. I was lucky enough to be invited on the team. We race in the "24 Hours of Lemons" race at the Barber Motorsports track, known as the "Augusta National" of racetracks.',
    },
];

export default function AboutMePage() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const findAboutBlockById = (id: number) => {
        return aboutBlocks.find((block) => {
            return block.id === id;
        })
    }

    return (
        <div className="w-md md:w-xl mx-auto p-4 md:px-8 h-[100vw] sm:h-[600px] relative">
            <Image
                src="/jason-cooper.jpg"
                alt="Jason Cooper"
                width={800}
                height={790}
                className="absolute w-[33%] aspect-square rounded-full shadow-sm left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white opacity-0 animate-[fadeIn_0.5s_ease-in-out_0s_forwards]"
            />

            <Image
                src={findAboutBlockById(1)?.imgSrc ?? ''}
                alt={findAboutBlockById(1)?.title ?? ''}
                title={findAboutBlockById(1)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white left-1/2 top-[6%] transform -translate-x-1/2 hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.1s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(1)}
            />

            <Image
                src={findAboutBlockById(2)?.imgSrc ?? ''}
                alt={findAboutBlockById(2)?.title ?? ''}
                title={findAboutBlockById(2)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white top-[12%] right-[12%] hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.2s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(2)}
            />

            <Image
                src={findAboutBlockById(3)?.imgSrc ?? ''}
                alt={findAboutBlockById(3)?.title ?? ''}
                title={findAboutBlockById(3)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white top-1/2 transform -translate-y-1/2 right-[6%] hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.3s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(3)}
            />

            <Image
                src={findAboutBlockById(4)?.imgSrc ?? ''}
                alt={findAboutBlockById(4)?.title ?? ''}
                title={findAboutBlockById(4)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white bottom-[12%] right-[12%] hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.4s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(4)}
            />

            <Image
                src={findAboutBlockById(5)?.imgSrc ?? ''}
                alt={findAboutBlockById(5)?.title ?? ''}
                title={findAboutBlockById(5)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white left-1/2 bottom-[6%] transform -translate-x-1/2 hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.5s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(5)}
            />

            <Image
                src={findAboutBlockById(6)?.imgSrc ?? ''}
                alt={findAboutBlockById(6)?.title ?? ''}
                title={findAboutBlockById(6)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white bottom-[12%] left-[12%] hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.6s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(6)}
            />

            <Image
                src={findAboutBlockById(7)?.imgSrc ?? ''}
                alt={findAboutBlockById(7)?.title ?? ''}
                title={findAboutBlockById(7)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white top-1/2 transform -translate-y-1/2 left-[6%] hover:cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.7s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(7)}
            />
            
            <Image
                src={findAboutBlockById(8)?.imgSrc ?? ''}
                alt={findAboutBlockById(8)?.title ?? ''}
                title={findAboutBlockById(8)?.title ?? ''}
                width={737}
                height={818}
                className="absolute w-[23%] aspect-square rounded-xl shadow-sm border-4 border-white top-[12%] left-[12%] hover:cursor-pointer opacity-0 opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.8s_forwards] transition-transform duration-300 transform hover:scale-110 origin-center"
                onClick={() => setActiveId(8)}
            />

            {aboutBlocks.map(({ id, imgSrc, title, text }) => (
                activeId === id && (
                    <div key={id} className="w-[90%] md:w-2/3 p-4 aspect-square bg-gray-800 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button
                            className="absolute top-1 right-3 text-lg hover:text-white hover:cursor-pointer"
                            onClick={() => setActiveId(null)}
                        >
                            ×
                        </button>

                        <Image
                            src={imgSrc}
                            alt={title}
                            width={737}
                            height={818}
                            className="w-1/2 rounded-lg float-left mr-4"
                        />

                        <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>

                        <p>{text}</p>
                    </div>
                )
            ))}
        </div>
    );
}