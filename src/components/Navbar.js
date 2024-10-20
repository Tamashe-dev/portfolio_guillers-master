export default function Navbar() {
    return (
        <section className="min-w-full fixed top-0 bg-black">
            <div className="flex flex-row px-2 text-white justify-center">
                <div className="bg-black p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-t hover:border-white hover:scale-110">
                    <a href="#about">
                        A propos de moi
                    </a>
                </div>
                <div className="bg-black p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-t hover:border-white hover:scale-110">
                    <a href="#skills" >
                        Compétences
                    </a>
                </div>
                <div className="bg-black p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-t hover:border-white hover:scale-110">
                    <a href="#projects" >
                        Projets
                    </a>
                </div>
                <div className="bg-black p-2 hover:animate-pulse hover:bg-gray-800 w-36 text-center hover:border-t hover:border-white hover:scale-110">
                    <a href="#contact" >
                        Contacts
                    </a>
                </div>
            </div>
        </section>
    )
}