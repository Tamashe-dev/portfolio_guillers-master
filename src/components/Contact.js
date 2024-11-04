import { BrowserRouter , Link } from 'react-router-dom';
import LinkedInImage from "../LinkedIn.png";
import GitHubImage from "../GitHub.png";
import PhoneImage from "../Phone.png";
import GmailImage from "../Gmail.png";

export default function Contact() {
    return (
        <section id="contact" className=" flex flex-col">
            <div className="flex flex-col h-screen gap-10 p-10">
                <div className="text-white text-7xl flex justify-center mt-10 p-4 top-0">Comment me contacter?</div>
                <div className="flex flex-col">
                    <div className="p-20 flex justify-center justify-items-center gap-64 flex-row">
                        <BrowserRouter className="flex">
                            <Link to="https://www.linkedin.com/in/sofyan-guillermet-laouad/" target="_blank" className="w-fit">
                                <img src={LinkedInImage} width={150} heigth={250} alt="linkedinimage" className="hover:scale-105"/>
                            </Link>
                        </BrowserRouter>
                        <BrowserRouter className="flex">
                            <Link to="https://github.com/Tamashe-dev" target="_blank" className="w-fit">
                                <img src={GitHubImage} width={150} heigth={250} alt="githubimage" className="hover:scale-105 rounded-full"/>
                            </Link>
                        </BrowserRouter>
                    </div>
                    <div className="p-20 flex justify-center justify-items-center gap-64 flex-row">
                        <a href="tel:+33669736032">
                            <img src={PhoneImage} width={150} heigth={250} alt="phoneimage" className="hover:scale-105"/> 
                        </a>
                        <a href="mailto:sofyan.guillermet-laouad@edu.esiee.fr">
                            <img src={GmailImage} width={150} heigth={250} alt="gmailimage" className="hover:scale-105"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-black flex flex-col bottom-0 h-40 justify-center items-center gap-4">
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