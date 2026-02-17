import React from 'react';
import { Briefcase, Code, Database, Server, Smartphone, PenTool } from 'lucide-react';

import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <Code size={20} /> },
        { name: 'CSS3', icon: <PenTool size={20} /> },
        { name: 'Tailwind CSS', icon: <PenTool size={20} /> },
        { name: 'JavaScript', icon: <Code size={20} /> },
        { name: 'React.js', icon: <Smartphone size={20} /> },
        { name: 'Bootstrap', icon: <PenTool size={20} /> },
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'Express.js', icon: <Server size={20} /> },
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'Git/GitHub', icon: <Briefcase size={20} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        Technical <span className="gradient-text">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        My tech stack for building scalable and efficient applications.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-6 glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center gap-3">
                                <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-inner shadow-white/10">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
