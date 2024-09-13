const Menu = () => {
    return (
        <header className="bg-custom-light-blue w-full">
            <div className="mx-auto px-4 max-w-7xl">
                <nav className="flex flex-col md:flex-row justify-between items-center py-8">
                    <p className="text-red-800 font-semibold  text-lg md:text-xl before:content-['🚀']">
                        Fabian Almanza
                    </p>
                    <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 ">
                        <li>
                            <a href="#sobremi" className="hover:text-yellow-600 text-sm md:text-base">
                                Sobre mi
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-yellow-600 text-sm md:text-base">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#hobbies" className="hover:text-yellow-600 text-sm md:text-base">
                                Hobbies
                            </a>
                        </li>
                        <li>
                            <a href="#formacion" className="hover:text-yellow-600 text-sm md:text-base">
                                Formacion
                            </a>
                        </li>
                        <li>
                            <a href="#experiencia" className="hover:text-yellow-600 text-sm md:text-base">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:fabian.almanza741@gmail.com"
                                className="font-bold hover:underline text-sm md:text-base text-custom-sm"
                            >
                                fabian.almanza741@gmail.com
                            </a>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Menu;
