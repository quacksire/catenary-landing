import Image from 'next/image'

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-border">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Transit insight with Catenary</h1>
                        <p className="text-xl text-muted-foreground">
                            We're a fully student team focused on creating advanced routing,
                            estimated time of arrival (ETA), and data processing algorithms. Our
                            goal is to provide accurate real-time data in a user-friendly,
                            accessible format.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-[540px] max-h-[405px] object-contain"
                                    src="/images/feature-bigpicture.png"
                                    width={540}
                                    height={405}
                                    alt="Features 01"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Get the big picture</h3>
                                    <p className="text-xl text-muted-foreground mb-4">
                                        Catenary gives you a bird's eye view of your city's transit
                                        network. Track vehicles in real time, and plan trips on
                                        unfamiliar lines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-[540px] max-h-[405px] object-contain"
                                    src="/images/feature-customize.png"
                                    width={540}
                                    height={405}
                                    alt="Features 02"
                                    unoptimized
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                    <p className="text-xl text-muted-foreground mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <ul className="text-lg text-muted-foreground -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-[540px] max-h-[405px] object-contain"
                                    src="/images/feature-precision.png"
                                    width={540}
                                    height={405}
                                    alt="Features 03"
                                    unoptimized
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                    <p className="text-xl text-muted-foreground mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <ul className="text-lg text-muted-foreground -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
