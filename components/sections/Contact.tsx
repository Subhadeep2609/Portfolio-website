"use client";
import { Github, Linkedin, Send, Twitter, Loader2, CheckCircle, XCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        setStatus("idle");

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY!;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                setIsSending(false);
                formRef.current?.reset();
                setTimeout(() => setStatus("idle"), 5000);
            }, (error) => {
                console.error(error.text);
                setStatus("error");
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Spacer for Story Card (Left) */}
                <div className="hidden md:block" />

                <div className="w-full bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-serif mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Get in Touch</h2>
                    <p className="text-white/50 text-center mb-8">Let's build something amazing together.</p>

                    <form ref={formRef} className="space-y-6 relative z-10" onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-white/70 ml-1">Name</label>
                                <input
                                    id="user_name"
                                    name="user_name"
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-white/70 ml-1">Email</label>
                                <input
                                    id="user_email"
                                    name="user_email"
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-white/70 ml-1">Service Interested In</label>
                            <div className="relative">
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    defaultValue=""
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                                >
                                    <option value="" disabled className="bg-[#09090b] text-white/50">Select a service...</option>
                                    <option value="Web Development" className="bg-[#09090b]">Web Development</option>
                                    <option value="UI/UX Design" className="bg-[#09090b]">UI/UX Design</option>
                                    <option value="Mobile App Development" className="bg-[#09090b]">Mobile App Development</option>
                                    <option value="Full Stack Project" className="bg-[#09090b]">Full Stack Project</option>
                                    <option value="Other" className="bg-[#09090b]">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Tell me about your project..."
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-white/90 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-white/5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSending ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    Sent Successfully!
                                </>
                            ) : status === "error" ? (
                                <>
                                    <XCircle className="w-5 h-5 text-red-600" />
                                    Failed. Try again?
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                        <p className="text-center text-white/50 text-sm mb-6">Or connect with me on socials</p>
                        <div className="flex justify-center gap-6">
                            <SocialLink href="https://www.linkedin.com/in/subhadeep-saha-3b5ba9201/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="https://github.com/Subhadeep2609" icon={<Github className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="https://x.com/UnknownRaj2609" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
