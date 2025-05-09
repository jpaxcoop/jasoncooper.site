'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProjectsPage() {
    useEffect(() => {
        const original = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#111';

        return () => {
            document.body.style.backgroundColor = original;
        };
    }, []);

    const router = useRouter();

    return (
        <div className="mx-12 my-16">
            <h1 className="font-heading font-semibold text-white text-xl my-4">
                Projects
            </h1>

            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-8">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src="/peerless-portal.png"
                            alt="Peerless Portal"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            onClick={() => router.push('/projects/peerless-portal')}
                        />
                    </div>
                    <div className="text-white">
                        <h2 className="font-heading font-semibold text-lg">Peerless Portal</h2>

                        <p className="mb-4">I designed and developed the Peerless Portal, an ordering automation and provisioning platform for a telecommunications company.</p>

                        <button
                            onClick={() => router.push('/projects/peerless-portal')}
                            className="border py-1 px-3 rounded-md text-base hover:text-pink-600"
                        >
                            View Project
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src="/paxton.png"
                            alt="Paxton"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            onClick={() => window.open('https://jasonpaxtoncooper.com/paxton')}
                        />
                    </div>
                    <div className="text-white">
                        <h2 className="font-heading font-semibold text-lg">paxton</h2>

                        <p className="mb-4">Paxton Cooper is my son. Most of the hard work of getting him here fell upon my wife. I contributed by building this website to keep me organized and informed.</p>

                        <button
                            onClick={() => window.open('https://jasonpaxtoncooper.com/paxton')}
                            className="border py-1 px-3 rounded-md text-base hover:text-pink-600"
                        >
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}