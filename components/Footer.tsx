import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Brand / Copyright */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-serif text-white">Subhadeep Saha</h3>
                    <p className="text-white/50 text-sm">
                        Building digital experiences with passion and precision.
                    </p>
                    <p className="text-white/30 text-xs">
                        &copy; {new Date().getFullYear()} Subhadeep Saha. All rights reserved.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col gap-4 items-center md:items-end">
                    <a
                        href="https://www.google.com/maps/dir//22.9102657,88.417579/@22.9102657,88.417579,16z?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                    >
                        <span className="text-sm">22.9102657, 88.417579 (View on Map)</span>
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <MapPin className="w-4 h-4" />
                        </div>
                    </a>

                    <a
                        href="tel:7003137469"
                        className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                    >
                        <span className="text-sm">+91 7003137469</span>
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                    </a>

                    <a
                        href="mailto:rajsaha.sep@gmail.com"
                        className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                    >
                        <span className="text-sm">rajsaha.sep@gmail.com</span>
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <Mail className="w-4 h-4" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
