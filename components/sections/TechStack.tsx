"use client";
import { motion } from "framer-motion";

const TECH_STACK = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "Framer Motion", "Three.js", "Git"
];

export default function TechStack() {
    return (
        <section id="tech" className="py-48 w-full overflow-hidden bg-primary/5">
            <div className="relative flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex gap-12 animate-infinite-scroll"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold text-white/20 uppercase hover:text-primary transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
