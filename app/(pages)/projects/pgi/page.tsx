import Image from "next/image";

export default function PgiPage() {
    return (
        <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-8">
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-lg h-[40vh] overflow-hidden">
                        <Image
                            src="/pgi-landing-page.jpg"
                            alt="PGi"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="font-heading font-semibold text-2xl mb-4">PGi</h1>

                    <p className="mb-4">I built hundreds of landing pages and emails, and orchestrated dozens of campaigns for PGi. I was so efficient that I replaced two team members, and my more effective designs increased engagement measurably.</p>

                    <p>Extended capabilities include integration between platforms (marketing automation, CRM, online chat, email, reporting, WordPress, webcasting, video), realtime asset deployment through API calls, web and email personalization, interactive web content, custom reporting dashboards, and custom partner data sharing portals with OAuth-managed access.</p>
                </div>
            </div>

             <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-4">
                <div className="w-full lg:w-1/3 mb-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/pgi-martech-stack.png"
                            alt="PGi martech stack"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="mb-4">I managed PGi's marketing technology, including marketing automation platforms (primarily Eloqua, but also Hubspot and Marketo) and content management systems (primarily WordPress). I also extend our marketing technology capabilities through heavy JavaScript and PHP development, and leveraging APIs.</p>
                </div>

                <div className="w-full lg:w-1/3 mb-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/dg-it-campaign.jpg"
                            alt="PGi"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="mb-4">Extended capabilities include integration between platforms (marketing automation, CRM, online chat, email, reporting, WordPress, webcasting, video), realtime asset deployment through API calls, web and email personalization, interactive web content, custom reporting dashboards, and custom partner data sharing portals with OAuth-managed access.</p>
                </div>

                <div className="w-full lg:w-1/3 mb-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/agenday.jpg"
                            alt="PGi"
                            width={800}
                            height={450}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="mb-4">I rely on front-end frameworks like Bootstrap, Foundation, and WPBakery Page Builder to rapidly develop branded, responsive, interactive, usable, and aesthetically pleasing front ends to these capabilities. Finally, I make sure the capabilities are available to other team members by developing easy-to-use interfaces and providing clear, illustrated, web-based documentation.</p>
                </div>
            </div>
        </div>
    );
}