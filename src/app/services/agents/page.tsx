"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

import {
    Brain, // AI Model Training & Fine-Tuning
    Workflow, // Workflow Automation
    BarChart3, // Predictive Analysis
    Database, // Data Processing
    Globe, // Data Scraping
    Sparkles // Generative AI
} from "lucide-react";

export default function Agents() {
    const t = useTranslations('common');

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            {t('Broaden possibilities')}
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[t('AI Agents')]}
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
                            <p>{t('Automate complex tasks')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Make smarter decisions')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p>{t('Boost efficiency')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-blue-500 w-6 h-6 flex-shrink-0" />
                            <p> {t('Unlock insights')}</p>
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

                            {/* Grid overlay using CSS instead of SVG */}
                            <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.1) 1px,transparent 1px)] bg-[size:20px_20px]" />

                            {/* Button content */}
                            <div className="relative flex items-center justify-center gap-2">
                                <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent 
    font-mono tracking-widest text-sm md:text-base">
                                    {t('Get Started')}
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
                <h2 className="text-2xl font-bold text-blue-400 mb-4">{t('What is it')}</h2>
                <p className="mb-6">{t('AI Agents Description 1')}</p>
                <p className="mb-6">{t('AI Agents Description 2')}</p>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">
                        {t('Use cases')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
                        <ServiceCard
                            icon={Brain}
                            title={t('AI Model Training')}
                            description={t('AI Model Training Description')}
                        />
                        <ServiceCard
                            icon={Workflow}
                            title={t('Workflow Automation')}
                            description={t('Workflow Automation Description')}
                        />
                        <ServiceCard
                            icon={BarChart3}
                            title={t('Predictive Analysis')}
                            description={t('Predictive Analysis Description')}
                        />
                        <ServiceCard
                            icon={Database}
                            title={t('Data Processing')}
                            description={t('Data Processing Description')}
                        />
                        <ServiceCard
                            icon={Globe}
                            title={t('Data Scraping')}
                            description={t('Data Scraping Description')}
                        />
                        <ServiceCard
                            icon={Sparkles}
                            title={t('Generative AI')}
                            description={t('Generative AI Description')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
