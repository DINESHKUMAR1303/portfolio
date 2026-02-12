import React from 'react';
import { ExternalLink, Github, Layers, Code } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
                    {/* Project 1 */}
                    <div className="group relative rounded-2xl overflow-hidden glass border border-gray-700 hover:border-primary/50 transition-colors duration-300">
                        {/* Image Placeholder */}
                        <div className="h-64 relative overflow-hidden">
                            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="E-Farming System"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-8 relative z-20 -mt-10">
                            <div className="bg-dark/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">E-Farming System</h3>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/DINESHKUMAR1303/PRIDE-OF-COWS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Code">
                                            <Github size={20} />
                                        </a>
                                        <a href="https://dineshkumar1303.github.io/PRIDE-OF-COWS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6">
                                    A full-stack e-commerce web application connecting farmers directly with buyers to enable transparent and efficient agricultural trade.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                                    <li>Features responsive and user-friendly front-end design.</li>
                                    <li>Implemented component-based React architecture.</li>
                                    <li>Integrated MongoDB as the primary database.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Add a "Coming Soon" or secondary project placeholder if desired to fill the grid, or just center the single project. 
               For now, I'll stick to the single main project mentioned in the resume but center it or leave as grid.
               I'll add a "More Coming Soon" card to balance the layout. */}
                    <div className="flex items-center justify-center h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-2xl p-8 text-center text-gray-500 hover:border-gray-700 hover:text-gray-400 transition-all">
                        <div>
                            <Code size={48} className="mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-bold mb-2">More Projects In The Works</h3>
                            <p className="max-w-xs mx-auto">I'm constantly building and experimenting. Check back soon for more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
