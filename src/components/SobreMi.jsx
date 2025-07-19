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
                            Ingeniero de Petróleos con formación técnica en programación y actualmente cursando una especialización en<br /> <br />  Big Data. Cuenta con más de 2 años de experiencia en desarrollo de software (frontend y backend) y análisis de 
                            datos. Posee conocimientos sólidos en Python, Node.js, React, bases de datos e inteligencia artificial aplicada a 
                            chatbots. Su rol como Observador de Importaciones le ha permitido aplicar análisis de datos, estadísticas y 
                            visualización en Excel. Aporta valor con su pensamiento crítico, aprendizaje autónomo y comunicación efectiva. 
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
