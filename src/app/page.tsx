"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Brain,
  MessageSquare,
  Bot,
  Cog,
  Code2,
  Search,
  FileText,
  Network,
  RefreshCw,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

const ProcessStep = ({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: any;
  title: string;
  description: string;
}) => (
  // On small screens stack the number and card, on md+ place them side-by-side.
  <div className="relative group flex flex-col md:flex-row items-stretch gap-8">
    {/* Number container – on md+ it will be a fixed-width column matching the card’s height */}
    <div className="flex md:w-32 items-center justify-center">
      <span className="font-mono text-6xl md:text-8xl font-bold text-blue-500/50 transition-colors duration-300 group-hover:text-blue-500/75">
        {number}
      </span>
    </div>

    {/* Content card */}
    <div className="flex-1 p-6 bg-blue-500/10 rounded-lg border border-blue-500/40 transition-all duration-300 group-hover:border-blue-500/60 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      <div className="flex items-start space-x-4 relative z-10">
        {/* Icon container */}
        <div className="p-3 bg-blue-500/20 rounded-lg transition-all duration-300 group-hover:bg-blue-500/30">
          <Icon className="w-6 h-6 text-blue-400 transition-colors group-hover:text-blue-300" />
        </div>

        <div className="flex-1">
          <h3 className="font-mono text-blue-400 mb-2 text-lg transition-colors group-hover:text-blue-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="relative p-6  rounded-lg border border-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 transition-all duration-300 group">
    <div className="absolute inset-0 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300"></div>
    <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-white transition-all duration-300" />
    <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
    <button className="mt-4 text-blue-400 hover:text-white font-mono text-sm transition-colors duration-300">Learn More →</button>
  </div>
);


export default function Home() {



  return (
    <div>
      <section className="min-h-[70vh] flex items-center justify-center pt-32 px-4">
        <div className="max-w-4xl text-center space-y-8">
          {/* Small Top Text */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg font-light tracking-widest">
              AI & Automation Consulting
            </p>
            <p className="text-gray-400 text-sm font-light tracking-wide">
              Efficient Software Development
            </p>
          </div>

          {/* Main Headline with Console-style */}
          <div className="relative group">
            <div className="flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  '> AI, Automation & Software Made Simple',
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
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Don't have any idea of how we can help you? Get a Free custom plan for how AI and automations can improve your business
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
                INITIATE_FREE_PLAN
              </span>
            </div>

            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent 
  opacity-0 group-hover:opacity-100 animate-scan" />
          </button>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-gray-300 text-lg font-light tracking-widest text-center mb-2">
            How our process works
          </p>

          <h2 className="text-3xl font-mono text-blue-400 mb-16 text-center mt-4 relative">
            From Consulting to Smart Development
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
          </h2>

          <div className="relative space-y-16">
            {/* Connecting line */}

            <ProcessStep
              number="01"
              icon={Search}
              title="Discovery Session"
              description="We'll examine your company's processes, talk to you to understand your pain points and desires, and analyse your industry"
            />
            <ProcessStep
              number="02"
              icon={FileText}
              title="Action Plan Proposal"
              description="After considering every potential beneficial service for your company, we will calculate an estimate ROI for each one and give you a final proposal"
            />
            <ProcessStep
              number="03"
              icon={Code2}
              title="Development Protocol"
              description="Having an arsenal of the newest development tools, we will minimize the time spent coding and deliver an affordable, high-quality product with unprecedented go-to-market speed"
            />
            <ProcessStep
              number="04"
              icon={Network}
              title="Integration"
              description="We will take care of seamlessly connecting your new product with your current systems"
            />
            <ProcessStep
              number="05"
              icon={RefreshCw}
              title="Optimization Loop"
              description="Our rapid development enables continuous iteration. We actively incorporate feedback from you and your clients to refine the solution"
            />
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">Core Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Voicebots"
              description="AI that speaks with you like an actual human being. It can be complemented with advanced functions"
            />
            <ServiceCard
              icon={MessageSquare}
              title="AI Chatbots"
              description="AI that talks with you by text. Used for customer interaction or as an internal tool"
            />
            <ServiceCard
              icon={Bot}
              title="AI Agents"
              description="AI that performs actions. Data analysis, manipulation, generation and prediction"
            />
            <ServiceCard
              icon={Cog}
              title="Automations"
              description="Automate every and any repetitive process. Data extraction, transfer and retrieval"
            />
            <ServiceCard
              icon={Code2}
              title="Smart Software Development"
              description="From apps and websites to back-end complex systems. Less resources, faster development, more iteration, better product"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
