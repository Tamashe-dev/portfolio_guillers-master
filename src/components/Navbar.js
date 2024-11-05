export default function Navbar() {
    return (
        <section className="w-screen fixed top-0 bg-black">
            <div className="flex flex-row px-2 text-white justify-center">
                <div className="p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-b-2 hover:border-white hover:scale-110">
                    <a href="#about">
                        A propos de moi
                    </a>
                </div>
                <div className="p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-b-2 hover:border-white hover:scale-110">
                    <a href="#skills" >
                        Compétences
                    </a>
                </div>
                <div className="p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-b-2 hover:border-white hover:scale-110">
                    <a href="#projects" >
                        Projets
                    </a>
                </div>
                <div className="p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-b-2 hover:border-white hover:scale-110">
                    <a href="#contact" >
                        Contacts
                    </a>
                </div>
            </div>
        </section>
    )
}