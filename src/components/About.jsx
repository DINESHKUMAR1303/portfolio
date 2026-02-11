import React from 'react';
import { User, Award, Code } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-card rounded-2xl p-8 border border-gray-800">

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Enthusiastic and adaptable Web Developer with a background in Computer Science, proficient in JavaScript, HTML5, CSS, React, and Node.js.
                                With a solid understanding of front-end and back-end development, I am experienced in designing and implementing responsive, user-friendly web applications.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Currently working as a Software Trainer at Vivid Trans Tech Solution, I enjoy bridging the gap between theoretical concepts and practical applications, helping others master modern web technologies.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-dark/50 rounded-lg border border-gray-700 text-center">
                                    <span className="block text-3xl font-bold text-primary mb-1">2+</span>
                                    <span className="text-sm text-gray-400">Years Experience</span>
                                </div>
                                <div className="p-4 bg-dark/50 rounded-lg border border-gray-700 text-center">
                                    <span className="block text-3xl font-bold text-secondary mb-1">5+</span>
                                    <span className="text-sm text-gray-400">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-6 glass rounded-xl hover:bg-white/5 transition-colors duration-300">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Education</h3>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-white">MSc Computer Science</h4>
                                    <p className="text-gray-400 text-sm">Sri Krishna Arts and Science, Coimbatore</p>
                                    <p className="text-primary text-sm mt-1">GPA: 7.5 | 2022-2024</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">BSc Computer Science</h4>
                                    <p className="text-gray-400 text-sm">National College, Tiruchirappalli</p>
                                    <p className="text-primary text-sm mt-1">GPA: 8.9 | 2019-2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 glass rounded-xl hover:bg-white/5 transition-colors duration-300">
                            <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Certifications</h3>
                                <h4 className="font-semibold text-white">Full Stack Web Development - JavaScript</h4>
                                <p className="text-gray-400 text-sm">NSCHOOL Academy, Coimbatore</p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Completed a 6-month professional training program focused on full stack development using HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MySQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
