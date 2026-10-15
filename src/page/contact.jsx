import { useState } from "react"
import { Link } from "react-router-dom"

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-sky-100 to-cyan-100 text-slate-900">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h1>
                    <p className="text-slate-700 mb-6">Ada server, mod, atau map yang ingin dibangun? Kirim pesan ke kami.</p>
                    <ul className="space-y-3 text-slate-800">
                        <li className="hover:text-cyan-600 transition-colors cursor-pointer">📧 hello@craftverse.studio</li>
                        <li className="hover:text-cyan-600 transition-colors cursor-pointer">💬 discord.gg/craftverse</li>
                        <li className="hover:text-cyan-600 transition-colors cursor-pointer">📍 Jakarta, Indonesia</li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-sky-200 space-y-4 hover:shadow-xl transition-shadow duration-300">
                    {submitted ? (
                        <p className="text-cyan-600 font-semibold">Terima kasih! Pesan Anda telah terkirim.</p>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama</label>
                                <input required className="w-full border border-sky-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" required className="w-full border border-sky-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                                <textarea required rows={4} className="w-full border border-sky-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all" />
                            </div>
                            <button type="submit" className="w-full px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-500 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg">
                                Kirim Pesan
                            </button>
                        </>
                    )}
                </form>
            </div>
            <div className="mt-10 text-center">
                <Link to="/" className="text-cyan-600 font-semibold hover:underline hover:text-cyan-700 transition-colors">
                    ← Kembali ke Home
                </Link>
            </div>
        </main>
    )
}

export default Contact