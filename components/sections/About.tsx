"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Spacer for Story Card (Left) */}
                <div className="hidden md:block h-[500px]" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-8 text-right md:text-left p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
                >
                    <div className="space-y-2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-purple-400 font-medium tracking-wider uppercase text-sm"
                        >
                            The Story So Far
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
                            About Me
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            I’m a <span className="text-white font-medium">Full Stack Engineer</span> with a background in <span className="text-white/90">Electronics & Communication</span> (KGEC '24). My journey bridges the gap between hardware logic and software scalability.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            I don't just write code; I craft <span className="text-purple-300">digital experiences</span>. Specializing in the <span className="text-white font-medium">MERN stack</span>, I focus on building high-performance, aesthetically pleasing applications that solve real-world problems with elegance and efficiency.
                        </motion.p>
                    </div>

                    {/* Stats / Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10"
                    >
                        <div>
                            <h4 className="text-2xl font-bold text-white">2024</h4>
                            <p className="text-sm text-white/50">Graduation Year</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white">Full Stack</h4>
                            <p className="text-sm text-white/50">Specialization</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
