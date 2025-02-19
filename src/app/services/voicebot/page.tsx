"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Vapi from "@vapi-ai/web";
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

import {
    Headset, // Customer Service and Technical Support
    CalendarCheck, // Appointment Scheduling
    Package, // Order Processing
    ClipboardList, // Surveys and Feedback Collection
    Users, // Lead Qualification
    PhoneCall // Outbound Calls
} from "lucide-react";

export default function Voicebots() {
    const t = useTranslations('common');

    const [vapi] = useState(
        new Vapi('d85769bc-9daa-4802-8326-6eb82a6b204d') // API Key
    );
    const [callStatus, setCallStatus] = useState('disconnected');
    const [isCallActive, setIsCallActive] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            {t('Relegate picking up the phone')}
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={['> ' + t('> AI Voicebots')]}
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

                    <div className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto text-left leading-relaxed space-y-4">
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Accelerate development')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Save time')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Save money')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Never lose a lead')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Increase customer satisfaction')}</p>
                        </div>
                    </div>


                    <a
                        href="https://cal.com/david.nabeiro/novagate.30min"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-8 relative px-8 py-4 rounded-lg border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 
          shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group
          text-lg font-semibold overflow-hidden bg-black/80 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.1) 1px,transparent 1px)] bg-[size:20px_20px]" />
                            <div className="relative flex items-center justify-center gap-2">
                                <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent 
    font-mono tracking-widest text-sm md:text-base">
                                    {t('Get Started')}
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent 
  opacity-0 group-hover:opacity-100 animate-scan" />
                        </button>
                    </a>
                </div>
            </section>

            <section className="pt-12 md:pt-20">
                <div className="max-w-4xl mx-auto p-4 md:p-8">
                    {/* Explanation Section */}
                    <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 md:mb-6 relative">
                        {t('AI Voice Interaction System')}
                            <span className="absolute bottom-0 left-0 w-16 md:w-24 h-1 bg-blue-500/50"></span>
                        </h2>

                        <div className="space-y-3 md:space-y-4">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                <span className="text-blue-400 font-semibold">{t('What is it')}</span><br />
                                {t('Voicebots Description Big')}
                            </p>

                            <div className="border-l-4 border-blue-500/30 pl-3 md:pl-4 ml-1 md:ml-2 mt-4 md:mt-6">
                                <h3 className="text-blue-400 text-lg md:text-xl font-semibold mb-2 md:mb-3">Core Capabilities:</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <svg className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        {t('Real-time speech synthesis')}
                                    </li>
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <svg className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        {t('Contextual conversation memory')}
                                    </li>
                                    <li className="flex items-center gap-2 md:gap-3">
                                        <svg className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                        {t('Multi-platform API integration')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo Section */}
                    <div className="bg-blue-500/10 p-4 md:p-6 rounded-lg md:rounded-xl border border-blue-500">
                        <h3 className="text-blue-400 text-lg md:text-xl font-bold mb-4 md:mb-6">
                            <span className="border-b-2 border-blue-500/40 pb-1"> {t('Experience Next-Gen Voice AI')}</span>
                        </h3>

                        <div className="space-y-3 md:space-y-4">
                            {error && <div className="text-red-400 mb-3 md:mb-4 text-xs md:text-sm">{error}</div>}

                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <button
                                    onClick={isCallActive ? stopCall : startCall}
                                    className={`w-full md:w-auto px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl border transition-all
                            ${isCallActive
                                            ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30'
                                            : 'bg-black/40 hover:bg-blue-500/10 text-gray-300 border-blue-500/20'}
                            hover:shadow-lg hover:shadow-blue-500/20 text-sm md:text-base`}
                                >
                                    {callStatus === 'connecting' ? 'Initializing Neural Link...' :
                                        isCallActive ? 'Terminate Connection' : 'Initiate Voice Protocol'}
                                </button>

                                <div className="flex items-center gap-2">
                                    <div className={`h-3 w-3 rounded-full ${isCallActive ? 'animate-pulse bg-green-500' : 'bg-red-500'}`} />
                                    <span className="text-gray-400 text-xs md:text-sm font-mono">
                                        SYSTEM STATUS: {callStatus.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-xs md:text-sm italic mt-3 md:mt-4">
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
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">
                        {t('Use cases')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
                        <ServiceCard
                            icon={Headset}
                            title={t('Customer Service and Technical Support')}
                            description={t('Customer Service Description')}
                        />
                        <ServiceCard
                            icon={CalendarCheck}
                            title={t('Appointment Scheduling')}
                            description={t('Appointment Scheduling Description')}
                        />
                        <ServiceCard
                            icon={Package}
                            title={t('Order Processing')}
                            description={t('Order Processing Description')}
                        />
                        <ServiceCard
                            icon={ClipboardList}
                            title={t('Surveys and Feedback Collection')}
                            description={t('Surveys Description')}
                        />
                        <ServiceCard
                            icon={Users}
                            title={t('Lead Qualification')}
                            description={t('Lead Qualification Description')}
                        />
                        <ServiceCard
                            icon={PhoneCall}
                            title={t('Outbound Calls')}
                            description={t('Outbound Calls Description')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
