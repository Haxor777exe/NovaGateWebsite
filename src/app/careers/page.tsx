"use client";
import React, { useState } from 'react'; // Import useState
import { TypeAnimation } from 'react-type-animation';
import { Pill, Briefcase, MapPin, Send } from "lucide-react";
import { useTranslations } from 'next-intl';

// Import the new form component (ensure path is correct)
import JobApplicationForm from '@/components/JobApplicationForm'; // Using alias @ assuming setup

// --- Define Types ---

// Interface for the structure of a Job object
interface Job {
    id: string;
    title: string;
    department: string;
    description: string;
    location: string;
    type: string;
}

// --- Component ---

const CareersPage: React.FC = () => { // Standard functional component type
    const t = useTranslations('common');

    // State to manage which job application form is open
    // Type hint: it can be a Job object or null
    const [applyingToJob, setApplyingToJob] = useState<Job | null>(null);

    // Define the jobs array with the Job interface type
    const jobs: Job[] = [
        {
            id: "swe-01",
            title: "Software Developer",
            department: "Software Development",
            description: "Join our team to build scalable, high-performance web applications with React, Node.js, and TypeScript, driving innovation in AI-powered solutions.",
            location: "Remote",
            type: "Full-time"
        },
        {
            id: "mkt-01",
            title: "Social Media Marketing",
            department: "Marketing",
            description: "Lead our social media strategy to amplify NovaGate's AI solutions, engaging a global audience with creative, impactful content.",
            location: "Remote",
            type: "Full-time"
        }
    ];

    // Function to open the form - takes a Job object
    const handleApplyClick = (job: Job): void => {
        setApplyingToJob(job);
    };

    // Function to close the form - takes no arguments
    const handleCloseForm = (): void => {
        setApplyingToJob(null);
    };


    return (
        <div className="text-gray-300">
            <main className="container mx-auto px-6 py-6">
                {/* ... (rest of the headline/intro section remains the same) ... */}
                <section className="flex items-center justify-center pt-20 px-4 py-12">
                     <div className="max-w-4xl text-center space-y-8">
                        {/* Main Headline */}
                         <div className="relative group">
                            <div className="flex items-center justify-center">
                                <TypeAnimation
                                    sequence={['> ' + t('We are hiring')]}
                                    speed={50}
                                    cursor={false}
                                    className="text-4xl md:text-6xl font-bold text-blue-400"
                                    style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 10px rgba(96, 165, 250, 0.5)' }}
                                    key={t('We are hiring')} // Key helps React identify changes if text content changes
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
                        {/* Map over the typed 'jobs' array */}
                        {jobs.map((job) => ( // 'job' is now correctly typed as 'Job'
                            <div
                                key={job.id} // Use the unique ID
                                className="group relative p-6 md:p-8 bg-sc-overlay/10 rounded-lg border border-sc-border/50 hover:border-sc-icon shadow-lg shadow-sc-shadow/30 hover:shadow-sc-shadow/50 transition-all"
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                        <h2 className="text-2xl font-bold text-white drop-shadow-md">{job.title}</h2>
                                        <span className="px-3 py-1 bg-sc-overlay/20 text-white rounded-full text-xs sm:text-sm whitespace-nowrap">
                                            {job.department}
                                        </span>
                                    </div>
                                    <p className="text-gray-200">{job.description}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                        <span className="flex items-center text-gray-300">
                                            <MapPin className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center text-gray-300">
                                            <Briefcase className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" />
                                            {job.type}
                                        </span>
                                    </div>
                                    {/* Modified Buttons Area */}
                                    <div className="flex flex-wrap gap-3 pt-4">

                                        {/* Cal.com links */}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => handleApplyClick(job)} 
                                             title="Schedule a Call (Option 1)"
                                        >
                                            <button className="flex items-center px-4 py-2 bg-red-500/30 text-red-300 rounded-full hover:bg-red-500/50 transition-all" aria-label="Schedule call option 1">
                                                <Pill className="w-5 h-5 mr-2"/>
                                                Apply
                                            </button>
                                        </a>
                                         <a
                                            href="https://cal.com/david.nabeiro/novagate.30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Schedule a Call (Option 2)"
                                        >
                                            <button className="flex items-center px-4 py-2 border border-sc-border/50 text-sc-icon rounded-full hover:border-sc-border/60 hover:bg-sc-overlay/20 transition-all" aria-label="Schedule call option 2">
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

            {/* Conditionally Render the Job Application Form */}
            {/* Type checking ensures props passed match JobApplicationFormProps */}
            {applyingToJob && (
                <JobApplicationForm
                    jobTitle={applyingToJob.title}
                    jobDescription={applyingToJob.description}
                    onClose={handleCloseForm} // Pass the correctly typed close handler
                />
            )}
        </div>
    );
};

export default CareersPage;