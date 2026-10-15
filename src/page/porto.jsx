import { Link } from "react-router-dom"
import { projects } from "../data/portfolio"
import { clients } from "../data/clients"
import { gallery } from "../data/gallery"

const Porto = () => {
    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-violet-950 to-black text-purple-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-yellow-300 mb-4">Portofolio & Galeri</h1>
                <p className="text-purple-200/80 mb-12 max-w-2xl">
                    Contoh proyek, daftar klien, dan dokumentasi kegiatan kami.
                </p>

                                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-yellow-200 mb-6">Contoh Proyek</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => (
                            <div
                                key={p.name}
                                className="group bg-slate-900/70 backdrop-blur rounded-2xl overflow-hidden shadow-lg border border-yellow-700/60 hover:border-yellow-400 hover:shadow-yellow-900/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <div className={`${p.color} absolute inset-0 flex items-center justify-center text-white text-5xl font-bold`}>
                                        {p.name[0]}
                                    </div>
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => { e.currentTarget.style.display = "none" }}
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-yellow-200 group-hover:text-yellow-300 transition-colors">{p.name}</h3>
                                    <p className="text-purple-300 text-sm">{p.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-yellow-200 mb-6">Daftar Klien</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {clients.map((c) => (
                            <div
                                key={c}
                                className="bg-slate-900/60 border border-yellow-700/40 rounded-xl p-4 text-center text-sm text-purple-200 hover:border-yellow-400 hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300"
                            >
                                {c}
                            </div>
                        ))}
                    </div>
                </section>

                                <section>
                    <h2 className="text-2xl font-semibold text-yellow-200 mb-6">Dokumentasi Kegiatan</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gallery.map((g) => (
                            <div
                                key={g.src}
                                className="group rounded-2xl overflow-hidden shadow-lg border border-yellow-700/60 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={g.src}
                                    alt={g.caption}
                                    loading="lazy"
                                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="p-3 bg-slate-900/80 text-sm text-purple-200">{g.caption}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-12 text-center">
                    <Link to="/contact" className="text-yellow-400 font-semibold hover:underline hover:text-yellow-300 transition-colors">
                        Punya ide proyek? Hubungi kami →
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Porto