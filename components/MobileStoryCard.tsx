"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = [
    "/assets/videos/video-1.mp4",
    "/assets/videos/video-2.mp4",
    "/assets/videos/video-3.mp4",
    "/assets/videos/video-4.mp4"
];

export default function MobileStoryCard() {
    const [videoIndex, setVideoIndex] = useState(0);

    const handleNextVideo = () => {
        setVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    };

    return (
        <div className="lg:hidden w-full flex justify-center items-center py-20 bg-black">
            <div className="relative w-[250px] h-[400px] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 z-40">
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
            </div>
        </div>
    );
}
