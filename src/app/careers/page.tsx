"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Pill } from "lucide-react";
import { useTranslations } from 'next-intl';

const CareersPage = () => {
    const t = useTranslations('common');
    
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
                                        t('We are hiring')  
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
                                className="group relative p-8 bg-blue-500/10 rounded-lg border border-blue-500/50 hover:border-blue-400 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-white drop-shadow-md">{job.title}</h2>
                                        <span className="px-4 py-1 bg-blue-500/20 text-white rounded-full text-sm">{job.department}</span>
                                    </div>
                                    <p className="text-gray-200">{job.description}</p>
                                    <div className="flex space-x-4 text-sm">
                                        <span className="flex items-center text-gray-300">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className="flex items-center text-gray-300">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {job.type}
                                        </span>
                                    </div>
                                    <div className="flex space-x-4 mt-6">
                                        {/* Apply Now - Red Icon Pill */}
                                        <button className="flex items-center px-6 py-2 bg-red-500/30 text-red-300 rounded-full hover:bg-red-500/50 transition-all">
                                            <Pill className="w-5 h-5" />
                                        </button>

                                        {/* Skip - Blue Solid Pill */}
                                        <button className="flex items-center px-6 py-2 border border-blue-500/50 text-blue-300 rounded-full hover:border-blue-500/60 hover:bg-blue-500/20 transition-all">
                                            <Pill className="w-5 h-5" />
                                        </button>
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