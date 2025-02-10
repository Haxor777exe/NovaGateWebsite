"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Rocket, Settings2, ArrowDownUp, Link, Activity, UserCog } from "lucide-react";

export default function Software() {

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            Faster development. Better final product.
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    '> Smart Software Development',
                                ]}
                                speed={50}
                                cursor={false}
                                className="text-4xl md:text-6xl font-bold text-blue-400"
                                style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    textShadow: '0 0 10px rgba(96, 165, 250, 0.5)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Accelerate development with rapid, iterative cycles
                        Reduce costs and maximize ROI with efficient solutions
                        Empower non-developers to make quick updates easily
                        Scale effortlessly and convert to code when neededDon't have any idea of how we can help you? Get a Free custom plan for how AI and automations can improve your business
                    </p>

                    {/* Enhanced Matrix Button */}
                    <button className="relative px-8 py-4 rounded-lg border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
          shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group
          text-lg font-semibold overflow-hidden bg-black/80 backdrop-blur-sm">

                        {/* Grid overlay using CSS instead of SVG */}
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.1) 1px,transparent 1px)] bg-[size:20px_20px]" />

                        {/* Button content */}
                        <div className="relative flex items-center justify-center gap-2">
                            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent 
    font-mono tracking-widest text-sm md:text-base">
                                GET STARTED
                            </span>
                        </div>

                        {/* Scanning line effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent 
  opacity-0 group-hover:opacity-100 animate-scan" />
                    </button>
                </div>
            </section>

            <section className="text-gray-300 p-8 max-w-4xl mx-auto pt-20">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">What is it?</h2>
                <p className="mb-6">
                    Our software development approach enables rapid application creation with minimal manual coding.
                </p>
                <p className="mb-6">
                    By utilizing intuitive interfaces and reusable components, we simplify complex processes, significantly reduce development time, and empower teams to design and adapt applications efficiently.
                </p>
                <p className="mb-6">
                    This methodology fosters innovation, enhances collaboration, and ensures businesses can respond quickly to evolving needs while maintaining robust flexibility and scalability.
                </p>
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/50">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/0iRmHH0zxo4?si=1gztt9Kk7D6Q7cfM"
                        title="Software development showcase"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">Use cases‍‍</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={Rocket}
                            title="Rapid Application Development"
                            description="Quickly build and deploy applications, enabling faster time-to-market and iterative improvements."
                        />
                        <ServiceCard
                            icon={Settings2}
                            title="Custom Business Solutions"
                            description="Create tailored applications that meet unique business needs without extensive development resources.  "
                        />
                        <ServiceCard
                            icon={ArrowDownUp}
                            title="Workflow Optimization"
                            description="Design and automate complex workflows with visual tools, enhancing process efficiency and collaboration."
                        />
                        <ServiceCard
                            icon={Link}
                            title="Integration with Legacy Systems"
                            description="Easily integrate new applications with existing systems, ensuring seamless data flow and process continuity."
                        />
                        <ServiceCard
                            icon={Activity}
                            title="Real-time Data Applications"
                            description="Develop applications that provide real-time data insights and dashboards for better decision-making and visibility."
                        />
                        <ServiceCard
                            icon={UserCog}
                            title="User-driven Modifications"
                            description="Empower business users to make adjustments and updates to applications without technical expertise."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}