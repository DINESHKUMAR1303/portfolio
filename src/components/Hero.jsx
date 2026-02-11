import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h2 className="text-primary font-medium tracking-wider mb-4 animate-fade-in-up">HELLO, I'M</h2>
                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    DINESH <span className="gradient-text">KUMAR M</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Full Stack Web Developer
                </p>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    I build scalable web applications and intuitive user interfaces. Passionate about transforming ideas into reality through code.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 group"
                    >
                        View Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Dinesh_Kumar_Resume.pdf"
                        className="px-8 py-3 border border-gray-700 bg-white/5 backdrop-blur-sm rounded-full font-medium text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
                    >
                        Download Resume
                        <Download size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
