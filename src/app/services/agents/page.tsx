"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {
    Brain, // AI Model Training & Fine-Tuning
    Workflow, // Workflow Automation
    BarChart3, // Predictive Analysis
    Database, // Data Processing
    Globe, // Data Scraping
    Sparkles // Generative AI
} from "lucide-react";


export default function Agents() {

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            Broaden possibilities. Relegate repetitive tasks.
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    '> AI Agents',
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
                        Automate complex tasks
                        Make smarter, data-driven decisions
                        Boost efficiency across all departments
                        Unlock powerful insights instantly
                    </p>

                    <a
                        href="https://cal.com/david.nabeiro/novagate.30min"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
                    </a>
                </div>
            </section>

            <section className="text-gray-300 p-8 max-w-4xl mx-auto pt-20">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">What is it?</h2>
                <p className="mb-6">
                    AI Agents are intelligent systems that perform advanced tasks autonomously, such as data analysis, content generation, and predictive modeling.
                </p>
                <p className="mb-6">
                    Using AI and machine learning, they analyze vast datasets, automate decision-making processes, and execute actions, helping businesses optimize operations, drive innovation, and gain valuable insights effortlessly.
                </p>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">
                        Use cases
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
                        <ServiceCard
                            icon={Brain}
                            title="AI Model Training & Fine-Tuning"
                            description="Develop custom AI models and optimize existing ones to achieve top performance tailored to your business needs."
                        />
                        <ServiceCard
                            icon={Workflow}
                            title="Workflow Automation"
                            description="Automate repetitive tasks and complex workflows to enhance efficiency and free up valuable time for strategic work."
                        />
                        <ServiceCard
                            icon={BarChart3}
                            title="Predictive Analysis"
                            description="Leverage data-driven insights to anticipate trends, forecast outcomes, and make proactive business decisions."
                        />
                        <ServiceCard
                            icon={Database}
                            title="Data Processing"
                            description="Transform raw data into structured, high-quality information, ready for analysis and decision-making."
                        />
                        <ServiceCard
                            icon={Globe}
                            title="Data Scraping"
                            description="Efficiently collect and organize data from various sources to support your business intelligence and research needs."
                        />
                        <ServiceCard
                            icon={Sparkles}
                            title="Generative AI"
                            description="Use AI to generate creative content, designs, and synthetic data, opening new possibilities for innovation and automation."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}