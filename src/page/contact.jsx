import { useState } from "react"
import { Link } from "react-router-dom"

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = "Nama wajib diisi."
        if (!form.email.trim()) e.email = "Email wajib diisi."
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid."
        if (!form.message.trim()) e.message = "Pesan wajib diisi."
        return e
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const e = validate()
        setErrors(e)
        if (Object.keys(e).length === 0) setSubmitted(true)
    }

    const handleChange = (key) => (ev) => {
        setForm((prev) => ({ ...prev, [key]: ev.target.value }))
        setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

    return (
        <main className="pt-24 px-5 py-16 min-h-screen bg-linear-180 from-sky-100 to-cyan-100 text-slate-900">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h1>
                    <p className="text-slate-700 mb-6">Ada server, mod, atau map yang ingin dibangun? Kirim pesan ke kami.</p>

                    <div className="mb-6">
                        <h3 className="font-semibold text-slate-900 mb-2">Alamat</h3>
                        <p className="text-slate-700">
                            Jl. Blok Merah No. 7, Kebayoran Baru<br />
                            Jakarta Selatan, 12180, Indonesia
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold text-slate-900 mb-2">Info Kontak</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="hover:text-cyan-600 transition-colors">📧 hello@craftverse.studio</li>
                            <li className="hover:text-cyan-600 transition-colors">📞 +62 812-3456-7890</li>
                            <li className="hover:text-cyan-600 transition-colors">💬 discord.gg/craftverse</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Media Sosial</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Instagram", "Twitter/X", "YouTube", "TikTok"].map((s) => (
                                <a
                                    key={s}
                                    href="#"
                                    className="px-3 py-1.5 rounded-full bg-white border border-sky-300 text-slate-700 text-sm hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-sky-200 space-y-4 hover:shadow-xl transition-shadow duration-300" noValidate>
                    {submitted ? (
                        <p className="text-cyan-600 font-semibold">Terima kasih! Pesan Anda telah terkirim. Kami akan segera merespons.</p>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama <span className="text-red-500">*</span></label>
                                <input
                                    value={form.name}
                                    onChange={handleChange("name")}
                                    className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all ${errors.name ? "border-red-400 focus:ring-red-400" : "border-sky-300 focus:ring-cyan-500 focus:border-cyan-500"}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange("email")}
                                    className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-400 focus:ring-red-400" : "border-sky-300 focus:ring-cyan-500 focus:border-cyan-500"}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan <span className="text-red-500">*</span></label>
                                <textarea
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange("message")}
                                    className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all ${errors.message ? "border-red-400 focus:ring-red-400" : "border-sky-300 focus:ring-cyan-500 focus:border-cyan-500"}`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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