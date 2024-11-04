export default function About() {
    return(
        <section id="about" className="mt-10 min-h-screen flex p-4 h-screen flex-col gap-6">
            <div className="bg-blue-600 md:mt-10 h-1/2 w-1/2">
                <p>Etudiant en école d'ingénieur à l'ESIEE Paris, j'ai pu experimenter avec Java, Python et C durant ma scolarité: 
                    j'ai du créer un jeu vidéo en Java et faire plusieurs dizaines d'exercices en Python et C. 
                    Durant mon temps libre j'ai également eu le temps d'apprendre à utiliser Javascript, notamment le framework React avec lequel ce site a été codé.
                    Passionné par l'informatique, l'Histoire, la linguistique, l'anthropologie ainsi que les jeux vidéos j'essaie d'associer du mieux que je peux ces différentes passions.
                    Vous trouverez ci-dessous mon CV et mes différents projets aboutis ou non.
                </p>
            </div>
            <div className="bg-black h-28 w-12">
                Curriculum Vitae
            </div>
        </section>
    )
}