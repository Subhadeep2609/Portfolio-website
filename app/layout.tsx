import type { Metadata } from "next";
import { Inter, Crimson_Pro, Dancing_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
    title: "Full Stack Developer | Portfolio",
    description: "Building scalable, high-performance MERN applications",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${crimson.variable} ${dancing.variable} antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
