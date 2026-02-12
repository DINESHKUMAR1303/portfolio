import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
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
                    mode: ["grab", "bubble"],
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
                        color: "#f472b6"
                    }
                },
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                }
            },
        },
        particles: {
            color: {
                value: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"],
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
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            shape: {
                type: ["circle", "triangle"],
            },
            size: {
                value: { min: 1, max: 5 },
                animation: {
                    enable: true,
                    speed: 4,
                    minimumValue: 0.1,
                    sync: false
                }
            },
        },
        detectRetina: true,
    };

    return (
        <div className="fixed inset-0 w-full h-full -z-50 bg-dark overflow-hidden pointer-events-none">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')` // Coding/Laptop Image
                }}
            ></div>

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark"></div>

            {/* Ambient Background Glows */}
            <div className="absolute inset-0">
                <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 opacity-20 blur-[120px] animate-pulse"></div>
                <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute left-[40%] top-[40%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 opacity-10 blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Particle Network */}
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0"
                    options={options}
                />
            )}
        </div>
    );
};

export default Background;
