import { Link } from "react-router-dom"

const Home = () => {
    return (
            <div className="flex flex-col justify-center py-10 px-5 font-sans min-h-screen bg-linear-180 from-sky-300/70 to-green-800/80">
                <section className="flex flex-col">
                    <h1 className="text-xl text-stone-800">Membangun Dunia Tanpa Batas, Satu Blok Setiap Kalinya</h1>

                </section>
            <Link to ="/contact"> Ke Contact </Link>
            </div>
    )
}

export default Home