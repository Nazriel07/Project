import { Link } from "react-router-dom"
import Card from "../components/Card"
import { team } from "../data/team"

const About = () => {
    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-slate-950 to-cyan-900 text-slate-100">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-300 mb-6">Tentang Kami</h1>

                                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-cyan-200 mb-3">Sejarah Singkat</h2>
                    <p className="text-slate-200 leading-relaxed">
                        Craftverse dimulai pada 2022 dari sebuah server Survival kecil bersama teman-teman.
                        Antusiasme komunitas mendorong kami untuk mengembangkan server kustom, mod, dan map
                        yang lebih serius. Hingga kini kami telah membantu puluhan komunitas dan klan
                        membangun dunia Minecraft mereka sendiri.
                    </p>
                </section>

                                <section className="grid sm:grid-cols-2 gap-6 mb-12">
                    <Card className="bg-slate-800/70 backdrop-blur border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 !text-slate-100">
                        <h3 className="font-semibold text-cyan-200 mb-2">Visi</h3>
                        <p className="text-slate-300">Membangun dunia Minecraft tanpa batas, satu blok setiap kalinya.</p>
                    </Card>
                <Card className="bg-slate-800/70 backdrop-blur border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 !text-slate-100">
                        <h3 className="font-semibold text-cyan-200 mb-2">Misi</h3>
                        <p className="text-slate-300">Memberdayakan para pemain melalui server, mod, dan konten kustom berkualitas, performa tinggi, dan komunitas yang solid.</p>
                    </Card>
                </section>

                                <section>
                    <h2 className="text-2xl font-semibold text-cyan-200 mb-6">Profil Tim</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((m) => (
                            <Card
                                key={m.name}
                                className="group bg-slate-800/70 backdrop-blur text-center border border-cyan-700 shadow-lg hover:shadow-cyan-900/50 hover:-translate-y-2 !text-slate-100"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full ${m.color} flex items-center justify-center text-white text-xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    {m.avatar}
                                </div>
                                <h3 className="font-semibold text-cyan-200">{m.name}</h3>
                                <p className="text-slate-300 text-sm">{m.role}</p>
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