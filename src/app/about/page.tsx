"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function AboutPage() {
    return (
        <div className="min-h-screen text-gray-300">
            {/* Hero Section */}
            <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <TypeAnimation
                        sequence={['> About the company']}
                        speed={50}
                        cursor={false}
                        className="text-4xl md:text-6xl font-bold text-blue-400"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: '0 0 10px rgba(96, 165, 250, 0.5)'
                        }}
                    />
                </div>

                {/* Main Content Section */}
                <div className="max-w-6xl mx-auto px-4 text-center">
                    {/* About Content */}
                    <div className="mb-16 max-w-3xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            At NovaGate AI Solutions, we redefine how businesses grow and operate in a digital world by making advanced technology accessible. Our team of AI experts empowers companies to elevate customer interactions and streamline processes for greater agility and success.
                        </p>
                        <a href="/careers" className="block mt-3 text-blue-400 font-semibold hover:underline hover:text-blue-500 transition-colors">
                            - Join us -
                        </a>
                    </div>
                </div>

            </section>

            {/* Founders Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl text-white mb-12 text-center drop-shadow-md">Meet Our Founders</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                <p className="text-gray-200">{founder.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl text-white mb-12 text-center drop-shadow-md">Our Core Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="p-6 rounded-xl border border-blue-500/50 bg-[#0a0f1f] hover:bg-blue-500/10 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
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

const founders = [
    {
        name: "Manuel Imanse",
        title: "Co-Founder & CEO",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHgia5-7p51Fg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731678368384?e=1744848000&v=beta&t=1FJGTqd9_vg0rjBKqeytgxjNmYQ0RH_NtcTKSszHaKA",
        bio: "Business Consultant and Marketing Strategist"
    },
    {
        name: "Nichita Railean",
        title: "Co-Founder and CTO",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQF-Q8RhIVHzvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731154186348?e=1744848000&v=beta&t=Plr7bv3bCBoaxN-WtUZXRTasLfHUJJUkyyPbZiZwG-I",
        bio: "Software Engineer and AI Developer"
    },
    {
        name: "David Nabeiro",
        title: "Founder & COO",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFSthgk-1ts9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712600959823?e=1744848000&v=beta&t=QlYj0FR6XEDTo-_F_xTdUgKbF-71x2dN-1QtHuVRjH0",
        bio: "No-code Developer and Systems Engineer"
    }
];

const values = [
    {
        title: "Innovation",
        description: "We continuously push the boundaries of AI and automation, leveraging cutting-edge technologies to create impactful, future-ready solutions."
    },
    {
        title: "Efficiency",
        description: "Our goal is to maximize productivity and streamline processes, delivering results that save time, reduce costs, and boost operational performance."
    },
    {
        title: "Customer-Centricity",
        description: "We design every solution with the client's unique needs in mind, ensuring a tailored approach that drives measurable improvements in customer engagement and satisfaction."
    }
];