import { useState } from "react"
import { Link } from "react-router-dom"
import instagramIcon from "../assets/Instagram.jpeg"
import contactBgImg from "../assets/bacground contact.jpeg"
import twitterIcon from "../assets/Twitter.jpeg"
import youtubeIcon from "../assets/Youtube.jpeg"
import tiktokIcon from "../assets/Tiktok.jpeg"

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
        <main
            className="relative pt-24 px-5 py-16 min-h-screen bg-cover bg-center text-purple-100 overflow-hidden"
            style={{ backgroundImage: `url(${contactBgImg})` }}
        >
            <div className="absolute inset-0 bg-violet-950/65" />
            <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-4xl font-bold text-yellow-200 mb-4">Hubungi Kami</h1>
                    <p className="text-purple-200/80 mb-6">Ada server, mod, atau map yang ingin dibangun? Kirim pesan ke kami.</p>

                    <div className="mb-6">
                        <h3 className="font-semibold text-yellow-200 mb-2">Alamat</h3>
                        <p className="text-purple-200">
                            Jl. Blok Merah No. 7, Kebayoran Baru<br />
                            Jakarta Selatan, 12180, Indonesia
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold text-yellow-200 mb-2">Info Kontak</h3>
                        <ul className="space-y-2 text-purple-200">
                            <li><a href="https://mail.google.com/mail/u/0/#inbox" className="hover:text-yellow-300 transition-colors">📧 hello@craftverse.studio</a></li>
                            <li><a href="https://wa.me/+6289677678060" className="hover:text-yellow-300 transition-colors">📞 +62 896-7767-8060</a></li>
                            <li><a href="https://discord.com/users/1132575846973046916" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">💬 discord.gg/craftverse</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-yellow-200 mb-2">Media Sosial</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "Instagram", url: "https://www.instagram.com/rilz_n?cplk=YzhiaTVwOWhjOWY4", icon: instagramIcon, plain: true },
                                { name: "Twitter/X", url: "https://x.com/narjil0", icon: twitterIcon },
                                { name: "YouTube", url: "https://www.youtube.com/@narjil6157/videos", icon: youtubeIcon, plain: true },
                                { name: "TikTok", url: "https://www.tiktok.com/@narjiil?_r=1&_t=ZS-9AZpPsNGVIv", icon: tiktokIcon },
                            ].map((s) => (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-12 h-12 rounded-full overflow-hidden border border-yellow-700/40 hover:scale-110 transition-all duration-300 ${s.plain ? "!bg-white" : "!bg-slate-900"}`}
                                    title={s.name}
                                >
                                    <img src={s.icon} alt={s.name} className={`w-full h-full ${s.plain ? "object-contain p-1" : "object-cover"}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="!bg-slate-900 rounded-2xl p-6 shadow-lg border border-yellow-700/60 space-y-4 hover:shadow-xl transition-shadow duration-300" noValidate>
                    {submitted ? (
                        <p className="text-yellow-300 font-semibold">Terima kasih! Pesan Anda telah terkirim. Kami akan segera merespons.</p>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-1">Nama <span className="text-red-400">*</span></label>
                                <input
                                    value={form.name}
                                    onChange={handleChange("name")}
                                    className={`w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all !bg-slate-800 text-white ${errors.name ? "border border-red-400 focus:ring-red-400" : "border border-yellow-700/40 focus:ring-yellow-500"}`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-1">Email <span className="text-red-400">*</span></label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange("email")}
                                    className={`w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all !bg-slate-800 text-white ${errors.email ? "border border-red-400 focus:ring-red-400" : "border border-yellow-700/40 focus:ring-yellow-500"}`}
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-1">Pesan <span className="text-red-400">*</span></label>
                                <textarea
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange("message")}
                                    className={`w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition-all !bg-slate-800 text-white ${errors.message ? "border border-red-400 focus:ring-red-400" : "border border-yellow-700/40 focus:ring-yellow-500"}`}
                                />
                                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <button type="submit" className="w-full px-6 py-3 rounded-lg bg-yellow-600 text-black font-semibold hover:bg-yellow-500 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg">
                                Kirim Pesan
                            </button>
                        </>
                    )}
                </form>
            </div>
            <div className="mt-10 text-center">
                <Link to="/" className="text-yellow-400 font-semibold hover:underline hover:text-yellow-300 transition-colors">
                    ← Kembali ke Home
                </Link>
            </div>
        </main>
    )
}

export default Contact