"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
    className?: string; // Additional classes for the container/text
    cursorClassName?: string; // Additional classes for the cursor
}

export default function Typewriter({
    words,
    typeSpeed = 150,
    deleteSpeed = 100,
    delaySpeed = 2000,
    className = "",
    cursorClassName = "",
}: TypewriterProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect logic (handle separately visually via CSS/framer or state)
    // Actually, standard typewriter just needs the text update. The cursor can be CSS animation or Framer Motion loop.

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, delaySpeed);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setSubIndex((prev) => prev + (reverse ? -1 : 1));
            },
            Math.max(reverse ? deleteSpeed : typeSpeed, Math.random() * (reverse ? 50 : 150) + 50)
            // Add slight randomness for realism
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, delaySpeed]);

    return (
        <span className={`${className} inline-block`}>
            {`${words[index].substring(0, subIndex)}`}
            <motion.span
                className={`inline-block ml-1 w-[3px] h-[1em] bg-current align-middle ${cursorClassName}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
        </span>
    );
}
