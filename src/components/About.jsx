import React from 'react';
import { User, GraduationCap } from 'lucide-react';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-primary to-secondary block mx-auto rounded-full"
                    ></motion.span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Bio & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <User className="text-primary" />
                                Get to know me!
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                I'm an <span className="text-white font-medium">enthusiastic Full Stack Developer</span> with a strong foundation in Computer Science.
                                My journey involves bridging the gap between theoretical concepts and practical, real-world applications.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                I specialize in the <span className="text-secondary font-medium">MERN Stack</span> and enjoy building responsive, user-friendly web interfaces.
                                Beyond coding, I have experience as a <span className="text-primary font-medium">Software Trainer</span>, helping others master web technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <GraduationCap className="text-secondary" />
                            Education & Certifications
                        </h3>

                        <div className="relative space-y-8 pl-8 border-l-2 border-white/10 ml-3">
                            {/* Timeline Item 1 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">MSc Computer Science</h4>
                                <p className="text-primary text-sm font-medium mb-2">2022 - 2024</p>
                                <p className="text-gray-400">Sri Krishna Arts and Science, Coimbatore</p>
                                <p className="text-xs text-gray-500 mt-1">GPA: 7.5</p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-secondary group-hover:scale-125 transition-transform duration-300"></span>
                                <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">BSc Computer Science</h4>
                                <p className="text-secondary text-sm font-medium mb-2">2019 - 2022</p>
                                <p className="text-gray-400">National College, Tiruchirappalli</p>
                                <p className="text-xs text-gray-500 mt-1">GPA: 8.9</p>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-accent group-hover:scale-125 transition-transform duration-300"></span>
                                <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Full Stack Web Development</h4>
                                <p className="text-accent text-sm font-medium mb-2">Certification</p>
                                <p className="text-gray-400">NSCHOOL Academy, Coimbatore</p>
                                <p className="text-sm text-gray-500 mt-2 italic">
                                    "Specialized training in MERN Stack & Modern Web Technologies"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
