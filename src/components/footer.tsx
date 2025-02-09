"use client";
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    return (
        <footer className="bg-black/80 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid: single column on mobile, three columns on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left justify-items-center md:justify-items-start">

                    {/* PAGES */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-mono text-blue-400 mb-4">Pages</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>AI Voicebots</li>
                            <li>AI Chatbots</li>
                            <li>AI Agents</li>
                            <li>Smart Software Development</li>
                            <li>Automations</li>
                        </ul>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-mono text-blue-400 mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center space-x-2 justify-center md:justify-start">
                                <Mail className="w-4 h-4" />
                                <span>david@novagate-solutions.com</span>
                            </li>
                            <li className="flex items-center space-x-2 justify-center md:justify-start">
                                <Phone className="w-4 h-4" />
                                <span>+45 71 62 63 79</span>
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
                        <h3 className="font-mono text-blue-400 mb-4">Network</h3>
                        {/* Center icons on mobile, left on md+ */}
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Separator Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mt-8 mb-6 border-t border-gray-700"
                />

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 text-center text-gray-400 text-sm"
                >
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        <p>© 2025 NovaGate Solutions. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
