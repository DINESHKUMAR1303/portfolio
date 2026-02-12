import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-transparent">
            {/* Creative IT Background Elements Removed - Using Global Background */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div className="relative border-l-2 border-gray-700 ml-4 md:ml-8 space-y-12">
                    {/* Experience Item 1 */}
                    <div className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark shadow-[0_0_0_4px_rgba(59,130,246,0.3)]"></div>

                        <div className="glass p-6 md:p-8 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">Vivid Trans Tech Solution Private Limited</h3>
                                    <h4 className="text-lg text-gray-300 mt-1 font-medium">Software Trainer</h4>
                                </div>
                                <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-gray-400 space-y-1">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>Chennai, India</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>September 2024 - February 2025</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 text-gray-300 list-disc list-outside pl-5 marker:text-primary">
                                <li>
                                    <strong className="text-white">TASMAC E2E Project:</strong> Conducted end-to-end training programs for government staff, focusing on the adoption and effective use of digital systems.
                                </li>
                                <li>
                                    Designed and delivered structured sessions that integrated theoretical concepts with practical applications.
                                </li>
                                <li>
                                    Enabled participants to streamline workflows and improve operational efficiency through hands-on software training.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
