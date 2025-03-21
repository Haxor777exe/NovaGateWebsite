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
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import path from "path";
import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline";

//const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

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
  <div className="relative group flex flex-col md:flex-row items-stretch gap-8">
    {/* Number container */}
    <div className="flex md:w-32 items-center justify-center">
      <span className="font-mono text-6xl md:text-8xl font-bold text-sc-border/50 transition-colors duration-300 group-hover:text-sc-border/75">
        {number}
      </span>
    </div>

    {/* Content card */}
    <div className="flex-1 p-6 bg-sc-overlay/10 rounded-lg border border-sc-border/40 transition-all duration-300 group-hover:border-sc-border/60 relative overflow-hidden">
      {/* Subtle grid pattern (static color) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      <div className="flex items-start space-x-4 relative z-10">
        {/* Icon container */}
        <div className="p-3 bg-sc-overlay/20 rounded-lg transition-all duration-300 group-hover:bg-sc-overlay/30">
          <Icon className="w-6 h-6 text-sc-icon transition-colors group-hover:text-white" />
        </div>

        <div className="flex-1">
          <h3 className="font-mono text-sc-icon mb-2 text-lg transition-colors group-hover:text-white">
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


export default function Home() {
  const t = useTranslations('common');
  const router = useRouter();

  const ServiceCard = ({ icon: Icon, title, description, path }: {
    icon: any,
    title: string,
    description: string,
    path: string
  }) => (
    <div className="relative p-6 rounded-lg border border-sc-border shadow-lg sc-base hover:sc-hover transition-all duration-300 group">
      <div className="absolute inset-0 bg-sc-overlay/10 rounded-lg group-hover:bg-sc-overlay/20 transition-all duration-300"></div>
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-sc-icon mb-4 group-hover:text-white transition-all duration-300" />
        <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
        <button
          className="mt-4 text-sc-icon hover:text-white font-mono text-sm transition-colors duration-300"
          onClick={() => router.push(path)}
        >
          Learn More →
        </button>
      </div>
    </div>
  );



  return (
    <div>
      <section className="min-h-[70vh] flex items-center justify-center pt-32 px-4">
        <div className="max-w-4xl text-center space-y-8">
          {/* Small Top Text */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg font-light tracking-widest">
              {t('AI & Automation Consulting')}
            </p>
            <p className="text-gray-400 text-sm font-light tracking-wide">
              {t('Efficient Software Development')}
            </p>
          </div>

          {/* Main Headline with Console-style */}
          <div className="relative group">
            <div className="flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  '> ' + t('AI, Automation & Software Made Simple'),
                ]}
                speed={50}
                cursor={false}
                className="text-4xl md:text-6xl font-bold text-blue-400"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  textShadow: '0 0 10px rgba(96, 165, 250, 0.5)'
                }}
                key={t('AI, Automation & Software Made Simple')}
              />
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('Dont have any idea of how we can help you?')}
          </p>

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
                  {t('INITIATE_FREE_PLAN')}
                </span>
              </div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent 
  opacity-0 group-hover:opacity-100 animate-scan" />
            </button>
          </a>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-gray-300 text-lg font-light tracking-widest text-center mb-2">
            {t('How our process works')}
          </p>

          <h2 className="text-3xl font-mono text-blue-400 mb-16 text-center mt-4 relative">
            {t('From Consulting to Smart Development')}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
          </h2>

          <div className="relative space-y-16">
            {/* Connecting line */}

            <ProcessStep
              number="01"
              icon={Search}
              title={t('Discovery Session')}
              description={t('Discovery Content')}
            />
            <ProcessStep
              number="02"
              icon={FileText}
              title={t('Action Plan Proposal')}
              description={t('Action Plan Content')}
            />
            <ProcessStep
              number="03"
              icon={Code2}
              title={t('Development Protocol')}
              description={t('Development Content')}
            />
            <ProcessStep
              number="04"
              icon={Network}
              title={t('Integration')}
              description={t('Integration Content')}
            />
            <ProcessStep
              number="05"
              icon={RefreshCw}
              title={t('Optimization Loop')}
              description={t('Optimization Content')}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-blue-400 font-mono mb-12 text-center">
            {t('Trusted by Leading Innovators')}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-500/10"
              >
                <div className="relative h-14 w-full flex items-center justify-center">
                  <img
                    src={company.image}
                    alt={company.alt}
                    className={`${company.size || 'h-full'} ${company.maxWidth || 'max-w-full'} w-auto object-contain grayscale brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-mono text-blue-400 mb-12 text-center">Core Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">            
            <ServiceCard
              icon={Bot}
              title={t('AI Agents')}
              description={t('AI Agents Content')}
              path="/services/agents"
            />
            <ServiceCard
              icon={Cog}
              title={t('Automations')}
              description={t('Automations Content')}
              path="/services/automations"
            />
            <ServiceCard
              icon={Code2}
              title={t('Smart Software Development')}
              description={t('Smart Software Development Content')}
              path="/services/software"
            />
            <ServiceCard
              icon={Brain}
              title={t('AI Voicebots')}
              description={t('AI Content')}
              path="/services/voicebot"
            />
            <ServiceCard
              icon={MessageSquare}
              title={t('AI Chatbots')}
              description={t('AI Chat Content')}
              path="/services/chatbot"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


const companies = [
  {
    id: 1,
    image: "/images/hub55.png",
    alt: "Hub 55 .",
  },
  {
    id: 2,
    image: "/images/gym.png",
    alt: "gym",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[180px]'
  },
  {
    id: 3,
    image: "/images/balance.png",
    alt: "My True Bio",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[150px]'
  },
  {
    id: 4,
    image: "/images/cbs.png",
    alt: "Copenhagen Business School",
  },
  {
    id: 5,
    image: "/images/skylab.png",
    alt: "Dtu Skylab",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[170px]'
  },
  {
    id: 6,
    image: "/images/folques.png",
    alt: "Folques",

  },
  {
    id: 7,
    image: "https://cse.cbs.dk/wp-content/uploads/2024/06/cropped-Logo-1-1.png",
    alt: "Copenhagen School of Entrepreneurship",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[180px]'
  },
  {
    id: 8,
    image: "https://www.tweedproject.eu/wp-content/uploads/2024/10/logo-dtu.webp",
    alt: "Denmark Technical University",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[180px]'
  },
  {
    id: 9,
    image: "/images/factoring.png",
    alt: "Soof",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[150px]'
  },
  {
    id: 10,
    image: "/images/vue.png",
    alt: "Sens Vue",
    size: "h-24",  // Direct height control
    maxWidth: 'max-w-[180px]'
  }
];