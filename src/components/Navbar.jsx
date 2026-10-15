import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(false);

    const linkClass = (to, activeColor, hoverColor) =>
        `block transition-colors ${path === to ? `${activeColor} drop-shadow-[0_0_8px_currentColor]` : `hover:${hoverColor}`}`

    const links = [
        { to: "/", label: "Home", active: "text-emerald-400", hover: "text-emerald-400" },
        { to: "/about", label: "About", active: "text-stone-300", hover: "text-stone-300" },
        { to: "/services", label: "Services", active: "text-orange-500", hover: "text-orange-500" },
        { to: "/porto", label: "Portfolio", active: "text-teal-400", hover: "text-teal-400" },
        { to: "/contact", label: "Contact", active: "text-purple-400", hover: "text-purple-400" },
    ];

    return (
        <nav
            style={{ fontFamily: '"Press Start 2P", monospace' }}
            className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md text-white z-50 text-sm"
        >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4">
                <Link to="/" className="text-base font-bold text-red-600 hover:text-red-500 transition-colors">
                    CRAFTVERSE
                </Link>

                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-white/40"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>

                <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium">
                    {links.map((l) => (
                        <Link key={l.to} to={l.to} className={linkClass(l.to, l.active, l.hover)}>
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 space-y-2 font-medium">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className={linkClass(l.to, l.active, l.hover)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;