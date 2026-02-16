"use client";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Seniorcare Ecommerce",
        desc: "Premium e-commerce solution for senior care products (Next.js, Node.js/Express)",
        img: "/assets/images/seniorcare_ecommerce.png",
        link: "https://senior-care-ecommerce.vercel.app/"
    },
    {
        title: "Nova UI",
        desc: "Modern, responsive SaaS landing page (React, Tailwind, Framer Motion)",
        img: "/assets/images/nova-ui.png",
        link: "https://nova-ui-gamma.vercel.app/"
    },
    {
        title: "Collaborative Task Manager",
        desc: "Full-stack Collaborative Task Management App (React, TS, Node.js, PostgreSQL)",
        img: "/assets/images/task-manager.png",
        link: "https://collaborative-task-manager-taupe.vercel.app/"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-[300vh] w-full p-4 md:p-8 flex flex-col items-center bg-transparent">
            <h2 className="text-5xl font-serif mb-5 z-10 mix-blend-difference text-white">Projects</h2>

            <div className="w-full max-w-5xl flex flex-col gap-40 pb-40 pt-24">
                {PROJECTS.map((project, i) => (
                    <div
                        key={i}
                        className="group relative w-full h-[70vh] bg-[#09090b] border border-white/10 rounded-3xl overflow-hidden shadow-2xl sticky top-24 z-20"
                    >
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-12">
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                            <p className="text-xl text-white/80 max-w-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 opacity-0 group-hover:opacity-100">{project.desc}</p>
                        </div>
                        <a href={project.link} target="_blank" className="absolute inset-0 z-20" aria-label={`View ${project.title}`}></a>
                    </div>
                ))}
            </div>
        </section>
    );
}
