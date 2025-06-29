"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';
import { Linkedin } from "lucide-react";

export default function AboutPage() {
    const t = useTranslations('common');

    const values = [
        {
            title: t('Innovation'),
            description: t('Innovation Content')
        },
        {
            title: t('Efficiency'),
            description: t('Efficiency Content')
        },
        {
            title: t('Customer-Centricity'),
            description: t('Customer-Centricity Content')
        }
    ];

    const founders = [
        {
            name: "Manuel Imanse",
            title: "Co-Founder & CEO",
            linkedin: "https://www.linkedin.com/in/manuel-imanse/",
            image: "/images/manuel.png",
            bio: "Business strategist with a background in consulting"
        },
        {
            name: "Nichita Railean",
            title: "Co-Founder and CTO",
            linkedin: "https://www.linkedin.com/in/nichita-railean-a78b4a206/",
            image: "/images/nick.png",
            bio: "Full-stack engineer leading tech development"
        },
        {
            name: "David Nabeiro",
            title: "Founder & COO",
            linkedin: "https://www.linkedin.com/in/david-nabeiro/",
            image: "/images/david.png",
            bio: "AI and Process Improvement"
        },
        {
            name: "João Pedro Gomes",
            title: "Head of Marketing   ",
            linkedin: "https://www.linkedin.com/in/joão-pedro-gomes-124b77361/",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEv2BuJlxcWdw/profile-displayphoto-shrink_800_800/B4DZZfEpPeG0Ac-/0/1745351775585?e=1755734400&v=beta&t=cJgXcMNsKFTELaqYUDnEX-AOMUayclA9brO0L8aRsr0",
            bio: "Sell Ideas, create demand, give solutions."
        },
        {
            name: "Rune Josefsen",
            title: "Process Consulting & Ops Advisor",
            linkedin: "https://www.linkedin.com/in/runejosefsen/",
            image: "https://i.ibb.co/ZnPSKSM/Rune-Profilbillede.jpg",
            bio: "Advisor in operations strategy and process improvement."
        },
        {
            name: "Dovydas Vinickis",
            title: "Lithuanian AI Automation Specialist",
            linkedin: "https://www.linkedin.com/in/dovydas-vinickis/",
            image: "/images/Dovidas.jpeg",
            bio: "Cost Optimization & Operational Efficiencies "
        },
        {
            name: "Manuel Serralha",
            title: "Strategic AI & Ops Advisor",
            linkedin: "https://www.linkedin.com/in/mserralha/",
            image: "/images/Manel.jpeg",
            bio: "Advisor in AI strategy and global operations."
        },
        {
            name: "Martijn van Eck",
            title: "Partner & Head of FinTech",
            linkedin: "https://www.linkedin.com/in/martijnvaneck/",
            image: "/images/Martijn.jpeg",
            bio: "Venture Building, Innovation, A.I., Financial Services, Digital Assets"
        },
    ];


    return (
        <div className="min-h-screen text-gray-300">
            {/* Hero Section */}
            <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <TypeAnimation
                        sequence={['> ' + t('About the company')]}
                        speed={50}
                        cursor={false}
                        className="text-4xl md:text-6xl font-bold text-blue-400"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: '0 0 10px rgba(96, 165, 250, 0.5)'
                        }}
                        key={t('About the company')}
                    />
                </div>

                {/* Main Content Section */}
                <div className="max-w-6xl mx-auto px-4 text-center">
                    {/* About Content */}
                    <div className="mb-16 max-w-3xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {t('At Novagate')}
                        </p>
                        <a href="/careers" className="block mt-3 text-blue-400 font-semibold hover:underline hover:text-blue-500 transition-colors">
                            {t('- Join us -')}
                        </a>
                    </div>
                </div>

            </section>

            {/* Founders Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl text-white mb-12 text-center drop-shadow-md">{t('Meet Our Founders')}</h2>

                    {/* First row with 4 founders */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {founders.map((founder) => (
                            <div key={founder.name} className="group bg-[#0a0f1f] p-6 rounded-xl border border-blue-500/50 hover:border-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                                <div className="aspect-square w-full relative mb-4 rounded-lg overflow-hidden border border-blue-500/50">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <h3 className="text-xl text-white drop-shadow-md">{founder.name}</h3>
                                <p className="text-blue-300 mb-2">{founder.title}</p>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                                >
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                                <p className="text-gray-200">{founder.bio}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl text-white mb-12 text-center drop-shadow-md">{t('Our Core Values')}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-xl border border-sc-border/50 bg-[#0a0f1f] hover:bg-sc-overlay/10 shadow-lg shadow-sc-shadow/30 hover:shadow-sc-shadow/50 transition-all"
                            >
                                <h3 className="text-2xl text-white mb-4 drop-shadow-md">{value.title}</h3>
                                <p className="text-gray-200">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}



