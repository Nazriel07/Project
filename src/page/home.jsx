import { Link } from "react-router-dom"

const features = [
    { title: "Server Minecraft", desc: "Host server performa tinggi untuk komunitas Anda.", accent: "bg-emerald-500", icon: "🖥️" },
    { title: "Mod & Plugin", desc: "Pengembangan mod/plugin kustom sesuai kebutuhan gameplay.", accent: "bg-orange-500", icon: "⚙️" },
    { title: "Custom Map", desc: "Bangun dunia & map unik dengan redstone & terrain kustom.", accent: "bg-sky-500", icon: "🗺️" },
]

const Home = () => {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 pt-24 bg-linear-180 from-sky-400 to-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-stone-700 animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-emerald-600 animate-bounce" />
                    <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-sky-600 animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Membangun Dunia Blok
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl">
                    Satu petualangan setiap kalinya — server, mod, dan map Minecraft untuk komunitas Anda.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link to="/services" className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 hover:scale-105 transition-all duration-300 shadow-lg">
                        Lihat Layanan
                    </Link>
                    <Link to="/contact" className="px-6 py-3 rounded-lg bg-white/80 text-stone-900 font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                        Hubungi Kami
                    </Link>
                </div>
            </section>

            <section className="py-20 px-5 bg-stone-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Apa yang Kami Tawarkan?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-lg ${f.accent} mb-4 flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform duration-300`}>
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                                <p className="text-stone-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-5 bg-emerald-700 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Siap Memulai Petualangan?</h2>
                <p className="mb-6 max-w-xl mx-auto">Mari bangun server dan dunia Minecraft Anda bersama kami.</p>
                <Link to="/contact" className="inline-block px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-stone-100 hover:scale-105 transition-all duration-300 shadow-lg">
                    Mulai Sekarang
                </Link>
            </section>
        </>
    )
}

export default Home