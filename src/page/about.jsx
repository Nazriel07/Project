import { Link } from "react-router-dom"
import Card from "../components/Card"
import { team } from "../data/team"
import aboutBgImg from "../assets/background about.jpeg"

const About = () => {
    return (
        <main
            className="relative pt-24 px-5 py-16 min-h-screen bg-cover bg-center text-slate-100 overflow-hidden"
            style={{ backgroundImage: `url(${aboutBgImg})` }}
        >
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-200 mb-6">Tentang Kami</h1>

                                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-cyan-200 mb-3">Sejarah Singkat</h2>
                    <p className="text-slate-100 leading-relaxed">
                        Craftverse dimulai pada 2022 dari sebuah server Survival kecil bersama teman-teman.
                        Antusiasme komunitas mendorong kami untuk mengembangkan server kustom, mod, dan map
                        yang lebih serius. Hingga kini kami telah membantu puluhan komunitas dan klan
                        membangun dunia Minecraft mereka sendiri.
                    </p>
                </section>

                                <section className="grid sm:grid-cols-2 gap-6 mb-12">
                    <Card className="!bg-slate-900 border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 !text-white shadow-lg">
                        <h3 className="font-semibold text-white mb-2">Visi</h3>
                        <p className="text-slate-100">Membangun dunia Minecraft tanpa batas, satu blok setiap kalinya.</p>
                    </Card>
                <Card className="!bg-slate-900 border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 !text-white shadow-lg">
                        <h3 className="font-semibold text-white mb-2">Misi</h3>
                        <p className="text-slate-100">Memberdayakan para pemain melalui server, mod, dan konten kustom berkualitas, performa tinggi, dan komunitas yang solid.</p>
                    </Card>
                </section>

                                <section>
                    <h2 className="text-2xl font-semibold text-cyan-200 mb-6">Profil Tim</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((m) => (
                            <Card
                                key={m.name}
                                className={`group text-center border border-cyan-700 shadow-lg hover:shadow-cyan-900/50 hover:-translate-y-2 !text-white relative overflow-hidden ${m.bgImage ? "bg-cover bg-center" : "!bg-slate-900"}`}
                                style={m.bgImage ? { backgroundImage: `url(${m.bgImage})` } : undefined}
                            >
                                {m.bgImage && <div className="absolute inset-0 bg-black/70" />}
                                <div className="relative z-10">
                                    {m.image ? (
                                        <img src={m.image} alt={m.name} className="w-16 h-16 mx-auto rounded-full object-cover mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    ) : (
                                        <div className={`w-16 h-16 mx-auto rounded-full ${m.color} flex items-center justify-center text-white text-xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                            {m.avatar}
                                        </div>
                                    )}
                                    <h3 className="font-semibold text-white">{m.name}</h3>
                                    <p className="text-slate-100 text-sm">{m.role}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <div className="mt-10">
                    <Link to="/contact" className="text-cyan-400 font-semibold hover:underline hover:text-cyan-300 transition-colors">
                        Hubungi kami →
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default About