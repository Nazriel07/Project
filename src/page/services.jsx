import { Link } from "react-router-dom"
import Card from "../components/Card"
import { services } from "../data/services"

const Service = () => {
    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-red-950 to-orange-900 text-orange-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-orange-300 mb-4">Layanan Minecraft</h1>
                <p className="text-orange-200/80 mb-12 max-w-2xl">Semua yang Anda butuhkan untuk komunitas Minecraft Anda.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <Card
                            key={s.title}
                            className="group bg-stone-900/70 backdrop-blur border border-orange-700 hover:border-orange-400 hover:shadow-orange-900/60 hover:-translate-y-2 cursor-pointer !text-orange-100 shadow-lg"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{s.icon}</div>
                            <h3 className="text-xl font-semibold text-orange-200 mb-2 group-hover:text-orange-300 transition-colors">{s.title}</h3>
                            <p className="text-stone-300">{s.desc}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/contact" className="inline-block px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg">
                        Konsultasi Gratis
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Service