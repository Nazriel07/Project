import { Link } from "react-router-dom"

const projects = [
    { name: "BlockEmpire", tag: "Server Survival", color: "bg-emerald-600" },
    { name: "RedstoneLab", tag: "Tech Map", color: "bg-red-600" },
    { name: "SkyWarsX", tag: "Minigame", color: "bg-sky-600" },
    { name: "CraftCosmetics", tag: "Texture Pack", color: "bg-purple-600" },
    { name: "MobArena", tag: "PVE Mode", color: "bg-orange-600" },
    { name: "PixelVillage", tag: "Adventure Map", color: "bg-amber-600" },
]

const Porto = () => {
    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-violet-950 to-black text-purple-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-yellow-300 mb-4">Portofolio Minecraft</h1>
                <p className="text-purple-200/80 mb-12 max-w-2xl">Beberapa server, mod, dan map yang telah kami buat.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <div
                            key={p.name}
                            className="group bg-slate-900/70 backdrop-blur rounded-2xl overflow-hidden shadow-lg border border-yellow-700/60 hover:border-yellow-400 hover:shadow-yellow-900/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`${p.color} h-40 flex items-center justify-center text-white text-5xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                                {p.name[0]}
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-yellow-200 group-hover:text-yellow-300 transition-colors">{p.name}</h3>
                                <p className="text-purple-300 text-sm">{p.tag}</p>
                            </div>
                        </div>
                    ))}
                </div>
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