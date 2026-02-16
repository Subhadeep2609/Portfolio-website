"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";

const VIDEOS = [
    "/assets/videos/video-1.mp4",
    "/assets/videos/video-2.mp4",
    "/assets/videos/video-3.mp4",
    "/assets/videos/video-4.mp4"
];

export default function StoryCard() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    const [videoIndex, setVideoIndex] = useState(0);

    const handleNextVideo = () => {
        setVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    };

    // --- MOTION TRIGGER POINTS ---
    // 0.0 - 0.1: Hero (Right)
    // 0.1 - 0.4: About (Left - Force early transition)
    // 0.4 - 0.41: Fade Out (Instant)
    // 0.41 - 0.9: Tech & Projects (Hidden)
    // 0.9 - 1.0: Contact (Left - Reappear)

    // Position X
    // Position X
    const left = useTransform(smoothProgress,
        [0, 0.1, 0.15, 0.4, 1],
        ["80%", "80%", "20%", "20%", "20%"]
    );

    // Position Y
    const top = useTransform(smoothProgress,
        [0, 0.38, 0.85, 1],
        ["50%", "50%", "50%", "50%"]
    );

    // Opacity: Aggressive fade out before About ends (0.38), reappear later (0.92) for Contact. Hide before footer.
    const opacity = useTransform(smoothProgress,
        [0, 0.15, 0.2, 0.8, 0.85, 0.93, 0.97],
        [1, 1, 0, 0, 1, 1, 0]
    );

    // Size: Expand at About (0.2-0.4) and Contact (0.92+)
    const width = useTransform(smoothProgress,
        [0, 0.15, 0.2, 0.92, 0.95],
        ["300px", "350px", "350px", "500px", "500px"]
    );

    const height = useTransform(smoothProgress,
        [0, 0.15, 0.2, 0.92, 0.95],
        ["450px", "500px", "600px", "600px", "600px"]
    );

    // Revolve Look (Rotate Y)
    const rotateY = useTransform(smoothProgress,
        [0, 0.1, 0.15, 0.4, 0.45, 0.92, 1],
        [-15, -15, 15, 15, -15, 15, 15]
    );

    return (
        <motion.div
            style={{
                left,
                top,
                width,
                height,
                opacity,
                rotateY,
                perspective: 1000,
                x: "-50%",
                y: "-50%",
                position: "fixed"
            }}
            animate={{ y: ["-50%", "-52%", "-50%"] }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="hidden lg:block fixed z-40 rounded-[24px] overflow-hidden shadow-2xl bg-black border border-white/10 cursor-pointer"
        >
            <AnimatePresence mode="wait">
                <motion.video
                    key={videoIndex}
                    src={VIDEOS[videoIndex]}
                    muted
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onEnded={handleNextVideo}
                    onError={(e) => console.error("Video Error:", e)}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>
    );
}
