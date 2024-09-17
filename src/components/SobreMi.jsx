const SobreMi = () => {
    return (
        <section id="sobremi" className="bg-custom-light-blue py-12 rounded-md ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-8xl font-bold text-gray-700 ml-20">
                            Sobre mí

                        </h2>

                        <div className="max-w-md ml-20 my-8 items-start">
                            <hr className="border-t-2 border-custom-blue my-4" />
                        </div>

                        <p className="text-base md:text-lg text-justify leading-relaxed mb-20 ml-20">
                            Hola Soy Fabian un Desarrollador Junior. <br /> <br />  Poseo sólida experiencia en el desarrollo de aplicaciones tanto en el frontend como en el backend. Mi experiencia abarca
                            la creación de interfaces intuitivas, el desarrollo y despliegue de APIs, y la gestión de entornos de producción. He trabajado en proyectos que van
                            desde el desarrollo de portales funcionales hasta la migración y optimización de APIs.
                        </p>
                    </div>
                    <div className="w-full max-w-[350px] flex items-center justify-center">
                        <img
                            src="https://i.imgur.com/rvdP57Z.png"
                            alt="Logo Fabi"
                            className="w-full h-auto max-h-[400px] rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>


    );
}

export default SobreMi;