export default function Accueil() {
    return(
        <section id="accueil" className="mt-10 min-h-screen flex justify-center items-center p-4 h-screen flex-col gap-6">
        <p className="text-5xl text-white font-semibold center">
            Bonjour, je m'appelle <span className="text-blue-400">Sofyan Guillermet-Laouad </span>
            <br/>Bienvenue dans mon portfolio.
        </p>
        <div className="text-red-300 text-3xl border-white hover:scale-110" style={{fontWeight: "bold"}}>
            <a href="#about">
                En savoir plus
            </a>
        </div>
        </section>
    )
}