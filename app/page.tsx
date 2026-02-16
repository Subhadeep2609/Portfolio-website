import SmoothScroll from "@/components/SmoothScroll";
import StoryCard from "@/components/StoryCard";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import MobileStoryCard from "@/components/MobileStoryCard";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen">
            <SmoothScroll />
            <Hero />
            <MobileStoryCard />
            <StoryCard />
            <About />
            <TechStack />
            <Projects />
            <Contact />
        </main>
    );
}
