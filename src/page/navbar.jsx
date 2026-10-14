    import { Link, useLocation } from "react-router-dom";

    const Navbar = () => {
        const location = useLocation();
        const path = location.pathname;

        return (
            <nav className="absolute w-full flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md text-white z-50">
                
                <div>
                    <Link to="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
                        MOJANG
                    </Link>
                </div>

                <div className="flex space-x-6 font-medium">
                    <Link 
                        to="/" 
                        className={`transition-colors ${path === '/' ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'hover:text-emerald-400'}`}
                    >
                        Home
                    </Link>

                    <Link 
                        to="/about" 
                        className={`transition-colors ${path === '/about' ? 'text-stone-300 drop-shadow-[0_0_8px_rgba(214,211,209,0.8)]' : 'hover:text-stone-300'}`}
                    >
                        About
                    </Link>

                    <Link 
                        to="/services" 
                        className={`transition-colors ${path === '/services' ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'hover:text-orange-500'}`}
                    >
                        Services
                    </Link>

                    <Link 
                        to="/porto" 
                        className={`transition-colors ${path === '/porto' ? 'text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]' : 'hover:text-teal-400'}`}
                    >
                        Portfolio
                    </Link>

                    <Link 
                        to="/contact" 
                        className={`transition-colors ${path === '/contact' ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]' : 'hover:text-purple-400'}`}
                    >
                        Contact
                    </Link>
                </div>
                
            </nav>
        );
    };

    export default Navbar;