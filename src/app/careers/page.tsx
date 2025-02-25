"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Pill } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const CareersPage = () => {
    const t = useTranslations('common');
    const router = useRouter();

    const jobs = [
        {
            title: "Software Developer",
            department: "Software Development",
            description: "Join our team to build scalable, high-performance web applications with React, Node.js, and TypeScript, driving innovation in AI-powered solutions.",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Social Media Marketing",
            department: "Marketing",
            description: "Lead our social media strategy to amplify NovaGate's AI solutions, engaging a global audience with creative, impactful content.",
            location: "Remote",
            type: "Full-time"
        }
    ];

    return (
        <div className="text-gray-300">
            <main className="container mx-auto px-6 py-6">
                <section className="flex items-center justify-center pt-20 px-4 py-12">
                    <div className="max-w-4xl text-center space-y-8">
                        {/* Main Headline with Console-style */}
                        <div className="relative group">
                            <div className="flex items-center justify-center">
                                <TypeAnimation
                                    sequence={[
                                        '> ' + t('We are hiring')
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

                        <p className="text-gray-300 text-lg mb-12">
                            {t('Philospohy')}
                        </p>

                    </div>
                </section>


                <div className="max-w-4xl mx-auto">

                    {/* Job Listings */}
                    <div className="space-y-8">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-sc-overlay/10 rounded-lg border border-sc-border/50 hover:border-sc-icon shadow-lg shadow-sc-shadow/30 hover:shadow-sc-shadow/50 transition-all"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-white drop-shadow-md">{job.title}</h2>
                                        <span className="px-4 py-1 bg-sc-overlay/20 text-white rounded-full text-sm">
                                            {job.department}
                                        </span>
                                    </div>
                                    <p className="text-gray-200">{job.description}</p>
                                    <div className="flex space-x-4 text-sm">
                                        <span className="flex items-center text-gray-300">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {/* Location icon paths */}
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className="flex items-center text-gray-300">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {/* Job type icon paths */}
                                            </svg>
                                            {job.type}
                                        </span>
                                    </div>
                                    <div className="flex space-x-4 mt-6">
                                        <a
                                            href="https://cal.com/david.nabeiro/novagate.30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="flex items-center px-6 py-2 bg-red-500/30 text-red-300 rounded-full hover:bg-red-500/50 transition-all">
                                                <Pill className="w-5 h-5" />
                                            </button>
                                        </a>

                                        <a
                                            href="https://cal.com/david.nabeiro/novagate.30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="flex items-center px-6 py-2 border border-sc-border/50 text-sc-icon rounded-full hover:border-sc-border/60 hover:bg-sc-overlay/20 transition-all">
                                                <Pill className="w-5 h-5" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CareersPage;