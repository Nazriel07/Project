import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    const linkClass = (to, activeColor, hoverColor) =>
        `transition-colors ${path === to ? `${activeColor} drop-shadow-[0_0_8px_currentColor]` : `hover:${hoverColor}`}`

    return (
        <nav className="absolute w-full flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md text-white z-50">
            <div>
                <Link to="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
                    MOJANG
                </Link>
            </div>

            <div className="flex space-x-6 font-medium">
                <Link to="/" className={linkClass("/", "text-emerald-400", "text-emerald-400")}>Home</Link>
                <Link to="/about" className={linkClass("/about", "text-stone-300", "text-stone-300")}>About</Link>
                <Link to="/services" className={linkClass("/services", "text-orange-500", "text-orange-500")}>Services</Link>
                <Link to="/porto" className={linkClass("/porto", "text-teal-400", "text-teal-400")}>Portfolio</Link>
                <Link to="/contact" className={linkClass("/contact", "text-purple-400", "text-purple-400")}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;