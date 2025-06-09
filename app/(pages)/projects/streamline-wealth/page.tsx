import Image from "next/image";

export default function StreamlineWealthPage() {
    return (
        <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
            <div className="flex flex-wrap md:flex-nowrap gap-x-8 gap-y-4 mb-8">
                <div className="w-full lg:w-1/2 overflow-hidden">
                    <div className="relative rounded-lg aspect-video overflow-hidden">
                        <Image
                            src="/streamline-wealth-4-cornerstones.png"
                            alt="Streamline Wealth"
                            width={2245}
                            height={1258}
                            priority
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="font-heading font-semibold text-2xl mb-4">Streamline Wealth</h1>

                    <p className="mb-4">I designed sales materials for a financial firm. My clean, attractive design communicated complex information clearly and made multi-page forms approachable.</p>

                    <p>Some may look at this project and think, "oh, so it's just graphic design." But graphic design <em>is</em> UI design&mdash;if it's done correctly. Each element's position, scale (not necessarily size - its size relative to other elements), and color guide the eye across the design so that information is processed in order of the desired priority.</p>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-10 mb-4">
                <div className="w-full md:w-1/3">
                    <div className="flex flex-wrap lg:flex-nowrap gap-6">
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-lg overflow-hidden">
                                <Image
                                    src="/streamline-wealth-form.png"
                                    alt="Streamline Wealth form"
                                    width={1281}
                                    height={1656}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mb-4">
                            <p className="mb-4">Streamline's collateral included multi-page forms with dozens of questions. A clear, intuitive layout can engage the customer instead of intimidating them.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <div className="flex flex-wrap lg:flex-nowrap gap-6">
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-lg overflow-hidden">
                                <Image
                                    src="/streamline-wealth-landscape.png"
                                    alt="Streamline landscape design"
                                    width={1316}
                                    height={1738}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mb-4">
                            <p className="mb-4">Traditionally, sales collateral is often in a portrait (vertical) layout because that is more comfortable to physically hold. I did my homework and learned that the collateral was rarely printed, and instead presented in a web conference on a desktop screen. This means a landscape (horizontal) layout would be more approriate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}