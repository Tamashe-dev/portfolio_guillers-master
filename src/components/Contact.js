import { ChevronDoubleUpIcon } from "@heroicons/react/16/solid";
import { BrowserRouter , Link } from 'react-router-dom';
import LinkedInImage from "../LinkedIn.png";
import GitHubImage from "../GitHub.png";

export default function Contact() {
    return (
        <section id="contact" className="h-screen flex flex-col">
            <div className="flex flex-col gap-10 p-10">
                <div className="text-white text-5xl flex justify-center mt-10 p-4 top-0">Comment me contacter?</div>
                <div className="p-4 flex flex-col gap-8">
                    <BrowserRouter className="flex flex-row">
                        <Link to="https://www.linkedin.com/in/sofyan-guillermet-laouad/" target="_blank" className="w-fit">
                            <img src={LinkedInImage} alt="linkedinimage" className="hover:scale-105 border-black border-4 border-opacity-0 hover:border-opacity-50"/>
                        </Link>
                    </BrowserRouter>
                    <BrowserRouter className="flex flex-row">
                        <Link to="https://github.com/Tamashe-dev" target="_blank" className="w-fit">
                            <img src={GitHubImage} alt="githubimage" className="hover:scale-105 border-black border-4 border-opacity-0 hover:border-opacity-50"/>
                        </Link>
                    </BrowserRouter>
                    <div className="bg-green-500 text-white w-fit flex flex-row text-2xl">Téléphone/WhatsApp:</div>
                    <div className="bg-red-900 text-white w-fit flex flex-row text-2xl">E-Mail:</div>
                </div>
            </div>
            <div className="bg-black flex flex-col bottom-0 h-1/2 justify-center items-center gap-4">
                <div className="text-white hover:animate-bouncer hover:scale-125 hover:animate-pulse">
                    <a href="#accueil">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </a>
                </div>
                <div className="h-px w-1/2 bg-white opacity-50" />
            </div>
        </section>
    )
}