import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-20">
            <div className="container mx-auto px-4 z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold font-heading mb-6 leading-tight"
                >
                    DINESH <span className="gradient-text">KUMAR M</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-4xl text-gray-300 font-medium mb-8"
                >
                    Full Stack Web Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-400 mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                >
                    Building scalable web applications and crafting intuitive user experiences.
                    Passionate about transforming complex requirements into elegant, efficient code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                        View Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={resumePdf}
                        download="Dinesh_Kumar_Resume.pdf"
                        className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                    >
                        Download Resume
                        <Download size={20} />
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center gap-6"
                >
                    <a href="https://github.com/DINESHKUMAR1303" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/dineshkumar1303/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:dineshkumar41083@gmail.com" className="p-3 glass rounded-full text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
