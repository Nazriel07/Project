import { Link } from "react-router-dom"

const About = () => {
    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-slate-950 to-cyan-900 text-slate-100">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-cyan-300 mb-6">Tentang Kami</h1>
                <p className="text-lg text-slate-200 leading-relaxed mb-4">
                    Kami adalah studio kreatif Minecraft yang membantu komunitas, streamer, dan klan membangun
                    pengalaman bermain terbaik — dari server hosting hingga mod & map kustom.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed mb-8">
                    Dengan pengalaman di ekosistem Minecraft, kami menggabungkan teknik redstone, desain terrain,
                    dan optimasi server agar gameplay lancar dan imersif.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 shadow-lg border border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="font-semibold text-cyan-200 mb-2">Visi</h3>
                        <p className="text-slate-300">Membangun dunia Minecraft tanpa batas, satu blok setiap kalinya.</p>
                    </div>
                    <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 shadow-lg border border-cyan-700 hover:shadow-cyan-900/50 hover:-translate-y-1 transition-all duration-300">
                        <h3 className="font-semibold text-cyan-200 mb-2">Misi</h3>
                        <p className="text-slate-300">Memberdayakan para pemain melalui server, mod, dan konten kustom berkualitas.</p>
                    </div>
                </div>
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