"use client";
import { Instagram, Linkedin, Mail, Phone, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


const Footer = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const t = useTranslations('common');

    const copyToClipboard = async (text: any, type: any) => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <footer className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left justify-items-center md:justify-items-start">
                    {/* PAGES */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-mono text-blue-400 mb-4"> {t('Pages')}</h3>
                        <ul className="space-y-2 text-gray-300">
                            {[
                                { label: t('AI Voicebots'), href: '/services/voicebot' },
                                { label: t('AI Chatbots'), href: '/services/chatbot' },
                                { label: t('AI Agents'), href: '/services/agents' },
                                { label: t('Smart Software Development'), href: '/services/software' },
                                { label: t('Automations'), href: '/services/automations' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-blue-400 transition-colors cursor-pointer">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-mono text-blue-400 mb-4"> {t('Contact')}</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li
                                className="flex items-center space-x-2 justify-center md:justify-start group cursor-pointer"
                                onClick={() => copyToClipboard('david@novagate-solutions.com', 'email')}
                            >
                                <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="group-hover:text-blue-400 transition-colors">david@novagate-solutions.com</span>
                                {copiedEmail ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                            </li>
                            <li
                                className="flex items-center space-x-2 justify-center md:justify-start group cursor-pointer"
                                onClick={() => copyToClipboard('+45 71 62 63 79', 'phone')}
                            >
                                <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                <span className="group-hover:text-blue-400 transition-colors">+45 71 62 63 79</span>
                                {copiedPhone ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                            </li>
                        </ul>
                    </motion.div>

                    {/* NETWORK */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="font-mono text-blue-400 mb-4"> {t('Network')}</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mt-8 mb-6 border-t border-gray-700"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 text-center text-gray-400 text-sm"
                >
                    <p>© 2025 NovaGate Solutions. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;