'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function PeerlessPortalPage() {
    useEffect(() => {
        const original = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#111';

        return () => {
            document.body.style.backgroundColor = original;
        };
    }, []);

    return (
        <div className="max-w-full xl:max-w-6xl mx-auto p-4 md:px-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-8 mb-8">
                <div className="w-full lg:w-2/3">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/peerless-portal-home.png"
                            alt="Peerless Portal"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <h1 className="font-heading font-semibold text-2xl mb-2">Peerless Portal</h1>

                    <p className="mb-4">I led the design and development of the Peerless Portal, a customer-facing order automation platform. I started with a blank canvas and had the platform deployed in production with customers in 3 months.</p>

                    <p className="mb-4">Adoption increased from there. In the first year, Peerless Network required that all but the largest enterprise customers be serviced through the Peerless Portal. My team grew to 5 team members dedicated to the Portal project.</p>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-8 mb-4">
                <div className="w-full lg:w-1/2 flex flex-wrap md:flex-nowrap gap-4 mb-4">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/peerless-portal-flowchart.png"
                                alt="Peerless Portal"
                                width={800}
                                height={450}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="mb-4">I wore the hats of team lead, designer, and developer. I worked closely with the voice product team, the customer account management leadership, and technical support to add features to support business units across the company.</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-wrap md:flex-nowrap gap-4 mb-4">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/peerless-portal-chart.png"
                                alt="Peerless Portal"
                                width={800}
                                height={450}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p>Over the years, the Peerless Portal drastically increased its scope - upstream with quote-building and integration with Salesforce, and downstream with product usage reporting and support ticket management. Though Peerless Network was purchased by Infobip, a much larger, international company with its own platform, the Peerless Portal remains in use today.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}