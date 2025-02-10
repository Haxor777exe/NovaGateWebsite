"use client";
import ServiceCard from '@/components/cards';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { 
    UserCog,  // Internal Support
    Star,  // Customer Reviews and Feedback
    Package,  // Order Processing
    CalendarCheck,  // Booking and Reservations
    MessageCircle,  // Social Media Management
    Handshake  // Sales Support
  } from "lucide-react";

export default function Chatbots() {

    return (
        <div>
            <section className="flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl text-center space-y-8">
                    {/* Small Top Text */}
                    <div className="space-y-2">
                        <p className="text-gray-300 text-lg font-light tracking-widest">
                            Relegate repetitive inquiries. Information acessibility made instant.
                        </p>
                    </div>

                    {/* Main Headline with Console-style */}
                    <div className="relative group">
                        <div className="flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    '> AI Chatbots',
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
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Save time
                        Save money on expensive customer support teams
                        Never lose a lead again
                        Increase customer satisfation
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
                    AI Chatbots are advanced systems that interact with users via chat, providing natural, human-like conversations.
                </p>
                <p className="mb-6">
                    They use natural language processing and machine learning to understand and respond to text enquiries, automate tasks, and integrate with various systems, enhancing customer experience and operational efficiency.
                </p>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">Use cases‍‍</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={UserCog}
                            title="Internal Support"
                            description="Assisting employees with IT, HR, and creative tasks. Chatbots work with AI agents to draft documents, generate reports, transfer data, and more"
                        />
                        <ServiceCard
                            icon={Star}
                            title="Customer Reviews and Feedback"
                            description="Gathering and analyzing customer reviews and feedback to gain insights and improve products and services"
                        />
                        <ServiceCard
                            icon={Package}
                            title="Order Processing"
                            description="Assisting customers in placing orders, tracking deliveries, and handling returns and exchanges"
                        />
                        <ServiceCard
                            icon={CalendarCheck}
                            title="Booking and Reservations"
                            description="Automating the booking process for hotels, restaurants, and events, reducing manual workload and errors"
                        />
                        <ServiceCard
                            icon={MessageCircle}
                            title="Social Media Management"
                            description="Responding to customer inquiries and comments on social media platforms, maintaining active engagement"
                        />
                        <ServiceCard
                            icon={Handshake}
                            title="Sales Support"
                            description="Engaging with website visitors, answering product questions, and generating leads for the sales team"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}