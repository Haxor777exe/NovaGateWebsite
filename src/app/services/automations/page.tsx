"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {
    Workflow,  // Process Automation
    ListChecks,  // Task Automation
    BrainCircuit,  // Decision Automation
    Database,  // Data Integration
    Activity,  // Data Monitoring
    FileText  // Document Automation
} from "lucide-react"

export default function Automations() {

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            Automate processes. Focus on what matters.
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    '> Automations',
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
                        Scale effortlessly and convert to code when needed
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
                    Automations are systematic processes that execute repetitive tasks with precision and speed. Leveraging software and technology, they streamline workflows, reduce manual intervention, and ensure consistency.
                </p>
                <p className="mb-6">
                    By automating routine operations, businesses can enhance efficiency, minimize errors, and focus on strategic growth, all while maintaining high standards of productivity and quality.
                </p>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">
                        Use cases
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
                        <ServiceCard
                            icon={Workflow}
                            title="Process Automation"
                            description="Automate complex business processes to reduce manual intervention and improve operational efficiency."
                        />
                        <ServiceCard
                            icon={ListChecks}
                            title="Task Automation"
                            description="Automate routine tasks to save time, minimize errors, and allow your team to focus on strategic initiatives."
                        />
                        <ServiceCard
                            icon={BrainCircuit}
                            title="Decision Automation"
                            description="Implement automated decision-making systems to streamline workflows and enhance the consistency of business operations."
                        />
                        <ServiceCard
                            icon={Database}
                            title="Data Integration"
                            description="Automatically collect, synchronize, and integrate data across various platforms to ensure accurate and up-to-date information flow."
                        />
                        <ServiceCard
                            icon={Activity}
                            title="Data Monitoring"
                            description="Set up automated monitoring systems to track data changes and generate real-time alerts for quick, informed responses."
                        />
                        <ServiceCard
                            icon={FileText}
                            title="Document Automation"
                            description="Automate document generation, processing, and management to enhance compliance and reduce administrative workload."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}