import React from 'react';
import { Briefcase, Code, Database, Server, Smartphone, PenTool } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: '95%', icon: <Code size={20} /> },
        { name: 'CSS3', level: '90%', icon: <PenTool size={20} /> },
        { name: 'Tailwind CSS', level: '85%', icon: <PenTool size={20} /> },
        { name: 'JavaScript', level: '90%', icon: <Code size={20} /> },
        { name: 'React.js', level: '85%', icon: <Smartphone size={20} /> },
        { name: 'Bootstrap', level: '80%', icon: <PenTool size={20} /> },
        { name: 'Node.js', level: '75%', icon: <Server size={20} /> },
        { name: 'Express.js', level: '75%', icon: <Server size={20} /> },
        { name: 'MongoDB', level: '80%', icon: <Database size={20} /> },
        { name: 'Git/GitHub', level: '85%', icon: <Briefcase size={20} /> },
    ];

    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I work with to build robust applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative p-6 glass rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="p-4 bg-dark/50 rounded-full text-primary mb-4 group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>

                                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mt-2">
                                    <div
                                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-400 mt-2 block w-full text-right">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
