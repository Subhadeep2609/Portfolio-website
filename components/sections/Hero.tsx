"use client";
import { motion } from "framer-motion";
import Scene from "@/components/3d/Scene";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
    return (
        <section id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
            {/* 3D Background */}
            <Scene />

            <div className="z-10 text-left w-full max-w-7xl px-4 md:px-8 flex flex-col justify-center h-full pointer-events-none">
                <div className="max-w-4xl z-50 mix-blend-normal">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-cursive font-bold mb-6 tracking-wide leading-tight"
                    >
                        <motion.span
                            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)" }}
                            animate={{
                                color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#ff0000"],
                                textShadow: [
                                    "5px 5px 0px #000000, 0 0 20px rgba(255,0,0,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(0,255,0,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(0,0,255,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(255,255,0,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(0,255,255,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(255,0,255,0.8)",
                                    "5px 5px 0px #000000, 0 0 20px rgba(255,0,0,0.8)"
                                ]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            Subhadeep Saha
                        </motion.span>
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-white mix-blend-difference leading-tight min-h-[1.2em]"
                    >
                        <Typewriter
                            words={["FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER", "MERN STACK DEVELOPER"]}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-6 text-xl text-white/80 font-sans"
                    >
                        Building scalable, high-performance MERN applications
                    </motion.p>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />
        </section>
    );
}
