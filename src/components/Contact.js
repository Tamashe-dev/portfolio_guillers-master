export default function Contact() {
    return(
        <section id="contact" className= "mt-0 w-screen min-h-screen flex p-4 h-screen flex-col gap-6">
            <div className="text-white text-5xl flex justify-center mt-10 p-4 top-0">Comment me contacter?</div>
            <div className="text-white text-2xl w-fit flex flex-row bg-blue-900">LinkedIn:</div>
            <div className="text-white bg-black w-fit text-2xl flex flex-row">Github:</div>
            <div className="bg-green-500 text-white w-fit flex flex-row text-2xl">Téléphone/WhatsApp:</div>
            <div className="bg-red-900 text-white w-fit flex flex-row text-2xl">E-Mail:</div>
            <div className="bg-black bottom-0 h-1/4 flex justify-center items-center">
                <div className="text-white hover:animate-bouncer hover:scale-125 hover:animate-pulse">
                    <a href="#accueil">^</a>
                </div>
            </div>
        </section>    
    )
}