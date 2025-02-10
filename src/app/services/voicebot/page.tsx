"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Vapi from "@vapi-ai/web";
import { TypeAnimation } from 'react-type-animation';
import {
    Headset,  // Customer Service and Technical Support
    CalendarCheck,  // Appointment Scheduling
    Package,  // Order Processing
    ClipboardList,  // Surveys and Feedback Collection
    Users,  // Lead Qualification
    PhoneCall  // Outbound Calls
} from "lucide-react";


export default function Voicebots() {
    const [vapi] = useState(
        new Vapi('d85769bc-9daa-4802-8326-6eb82a6b204d') // API Key
    );
    const [callStatus, setCallStatus] = useState('disconnected');
    const [isCallActive, setIsCallActive] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Setup event handlers
        vapi.on('call-start', () => {
            setCallStatus('connected');
            setIsCallActive(true);
        });

        vapi.on('call-end', () => {
            setCallStatus('disconnected');
            setIsCallActive(false);
        });

        return () => {
            vapi.off('call-start', () => {
                setCallStatus('connected');
                setIsCallActive(true);
            });
            vapi.off('call-end', () => {
                setCallStatus('disconnected');
                setIsCallActive(false);
            });
        };
    }, [vapi]);

    const startCall = async () => {
        try {
            await vapi.start('75f0cda7-9a54-4bcd-8584-7cd5e4dbde57'); // Assistant ID
        } catch (err) {
            setError('Failed to start call');
            console.error(err);
        }
    };

    const stopCall = async () => {
        try {
            await vapi.stop();
        } catch (err) {
            setError('Failed to end call');
            console.error(err);
        }
    };

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            Relegate picking up the phone. Never miss a call.
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    '> AI Voicebots',
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
                        Save time
                        Save money on expensive customer support teams
                        Never lose a lead again
                        Increase customer satisfation
                        ‍
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

            <section className="pt-20">
                <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/30">
                    {/* Explanation Section */}
                    <div className="mb-12 space-y-6">
                        <h2 className="text-3xl font-bold text-blue-400 mb-6 relative">
                            AI Voice Interaction System
                            <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500/50"></span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="text-blue-400 font-semibold">What is it?</span><br />
                                Our AI Voicebots are neural networks that engage in natural, human-like dialogue.
                                Using advanced speech recognition and deep learning, they comprehend context,
                                manage complex queries, and integrate with enterprise systems - revolutionizing
                                customer interactions through voice-first AI solutions.
                            </p>

                            <div className="border-l-4 border-blue-500/30 pl-4 ml-2 mt-6">
                                <h3 className="text-blue-400 text-xl font-semibold mb-3">Core Capabilities:</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        Real-time speech synthesis & analysis
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        Contextual conversation memory
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        Multi-platform API integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo Section */}
                    <div className="bg-black/40 p-6 rounded-xl border border-blue-500/20">
                        <h3 className="text-blue-400 text-xl font-bold mb-6">
                            <span className="border-b-2 border-blue-500/40 pb-1">Experience Next-Gen Voice AI</span>
                        </h3>

                        {/* Original VoiceBot component UI */}
                        <div className="space-y-4">
                            {error && <div className="text-red-400 mb-4 text-sm">{error}</div>}

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={isCallActive ? stopCall : startCall}
                                    className={`px-8 py-3 rounded-xl border transition-all
                ${isCallActive
                                            ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30'
                                            : 'bg-black/40 hover:bg-blue-500/10 text-gray-300 border-blue-500/20'}
                hover:shadow-lg hover:shadow-blue-500/20`}
                                >
                                    {callStatus === 'connecting' ? 'Initializing Neural Link...' :
                                        isCallActive ? 'Terminate Connection' : 'Initiate Voice Protocol'}
                                </button>

                                <div className="flex items-center gap-2">
                                    <div className={`h-3 w-3 rounded-full ${isCallActive ? 'animate-pulse bg-green-500' : 'bg-red-500'}`} />
                                    <span className="text-gray-400 text-sm font-mono">
                                        SYSTEM STATUS: {callStatus.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm italic mt-4">
                                {isCallActive
                                    ? ">> Voice channel active - Engage in natural conversation..."
                                    : "Ready for voice interface activation"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">Use cases‍‍</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={Headset}
                            title="Customer Service and Technical Support"
                            description="Handling inbound customer inquiries, providing instant responses, and resolving common technical issues without human intervention"
                        />
                        <ServiceCard
                            icon={CalendarCheck}
                            title="Appointment Scheduling"
                            description="Automating appointment bookings and reminders for healthcare, beauty salons, and other service-based industries"
                        />
                        <ServiceCard
                            icon={Package}
                            title="Order Processing"
                            description="Assisting customers in placing orders, tracking deliveries, and handling returns and exchanges"
                        />
                        <ServiceCard
                            icon={ClipboardList}
                            title="Surveys and Feedback Collection"
                            description="Conducting automated surveys to gather customer feedback and insights on products and services"
                        />
                        <ServiceCard
                            icon={Users}
                            title="Lead Qualification"
                            description="Engaging potential customers, collecting information, and qualifying leads for the sales team to follow up"
                        />
                        <ServiceCard
                            icon={PhoneCall}
                            title="Outbound Calls"
                            description="Conducting outreach to new leads, generating leads, and following up on contact information provided by potential customers"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}