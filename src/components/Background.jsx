import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Background = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Optional: Do something when particles are loaded
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-50 bg-dark overflow-hidden pointer-events-none">

            {/* Ambient Background Glows */}
            <div className="absolute inset-0">
                <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 opacity-30 blur-[120px] animate-pulse"></div>
                <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 opacity-30 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute left-[40%] top-[40%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 opacity-20 blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Particle Network */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0"
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: ["grab", "bubble"], // Multiple interactions
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 1,
                                    color: "#f472b6" // Pink highlight on grab
                                }
                            },
                            bubble: {
                                distance: 200,
                                size: 10,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"], // Blue, Purple, Green, Gold
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.5 },
                        },
                        shape: {
                            type: ["circle", "triangle"], // Mixed shapes
                        },
                        size: {
                            value: { min: 1, max: 5 },
                            animation: {
                                enable: true,
                                speed: 4, // Pulsing size
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Background;
