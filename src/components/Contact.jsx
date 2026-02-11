import React, { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        // Note: The Sender Name "FormSubmit" cannot be changed (it's a limitation of the free service).
        // However, we CAN change the Subject Line to make it clear:
        data['_subject'] = "Dinesh Portfolio - New Message";

        // Using FormSubmit.co with your secure token
        fetch("https://formsubmit.co/ajax/7d47467ef7c3219704ac405065750ea4", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIsSending(false);
                setIsSent(true);
                e.target.reset();
                setTimeout(() => setIsSent(false), 5000);
            })
            .catch(error => {
                console.log(error);
                setIsSending(false);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <section id="contact" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:dineshkumar41083@gmail.com" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group">
                                <div className="p-3 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400"></h4>
                                    <p className="text-white font-medium">dineshkumar41083@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+918526782371" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group">
                                <div className="p-3 bg-secondary/20 rounded-full text-secondary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Phone</h4>
                                    <p className="text-white font-medium">+91 8526782371</p>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="https://www.linkedin.com/in/dineshkumar1303/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/DINESHKUMAR1303" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="glass p-8 rounded-2xl border border-gray-800 space-y-6 relative">
                        {isSent && (
                            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl flex-col animate-fade-in-up">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">I'll get back to you shortly.</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="your@email.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input type="text" name="subject" id="subject" required className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="Project Inquiry" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea name="message" id="message" rows="5" required className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSending ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
