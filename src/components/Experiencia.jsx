const Experiencia = () => {
    return (
        <section className="bg-secundario py-12">
            <div id="experiencia" className="container mx-auto px-4">
                <h2 className="text-3xl text-custom-blue font-semibold  text-center mb-8">
                    Proyectos
                </h2>
                <div className="flex flex-col  lg:flex-row  rounded-lg overflow-hidden">
                <p className=" font-my-cursive mb-4 ">
                    A continuación se presentan algunos de los proyectos realizados como Desarrollador junior. <br />
                    ❖  Página Web eCommerce: Diseñé y desarrollé una solución ecommerce para un cliente local, integrando sistemas de pago y
                    funciones de gestión de productos. <br />
                    ❖ Landing Pages: Creé landing pages personalizadas para profesionales, ayudando a destacar sus habilidades y proyectos <br />
                    ❖ Desarrollo Frontend para Intranet de Analítica: Desarrollé un sistema integral para la recopilación y visualización de datos analíticos,
                    mejorando significativamente la eficiencia en el análisis de información empresarial. <br />
                    ❖ Desarrollo y Despliegue de APIs: Implementé APIs REST con seguridad JWT y gestioné el despliegue en producción utilizando
                    herramientas como IIS y PM2. Incluyó la integración de servicios como Twilio para consultas de balance de cuenta.

                </p>
                </div>
                <br />
                <div className="space-y-8">
                    {/* Proyecto 1 */}
                    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full lg:w-1/2 h-60  object-cover "
                            src="https://i.ibb.co/bdt9Dq6/calculadora.png"
                            alt="Proyecto Calculadora"
                        />
                        <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">
                                Calculadora
                            </h3>
                            <p className=" font-my-cursive mb-4">
                                Interfaz atractiva y fácil de usar. Botones numéricos y operadores que permitirán operaciones básicas.
                                <br />
                                <br />
                                El campo de visualización mostrará la expresión y el resultado. La calculadora realizará sumas, restas,
                                multiplicaciones y divisiones. IT skills: HTML, CSS, JS
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                                    href="https://github.com/fabianalmanza/base-calculadora-curso-js/tree/master"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Repositorio
                                </a>
                                <a
                                    className="inline-block px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    href="https://subtle-dragon-71c221.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">
                                Aplicación del Clima
                            </h3>
                            <p className=" font-my-cursive mb-4">
                                Ingresa el nombre de la ciudad y obtén datos actualizados al instante. Visualiza pronósticos detallados para
                                planificar tu semana. Interfaz intuitiva y agradable.
                                <br />
                                <br />
                                Acceso por medio de la API a información meteorológica - IT skills: HTML, CSS y JavaScript.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                                    href="https://github.com/fabianalmanza/aplicacion-clima"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Repositorio
                                </a>
                                <a
                                    className="inline-block px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    href="https://fabianalmanza.github.io/aplicacion-clima/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Demo
                                </a>
                            </div>
                        </div>
                        <img
                            className="w-full lg:w-1/2 h-60 object-cover"
                            src="https://i.ibb.co/5KpwM2h/clima.png"
                            alt="Aplicación Clima"
                        />
                    </div>

                    {/* Proyecto 3 */}
                    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            className="w-full lg:w-1/2 h-60 object-cover"
                            src="https://i.ibb.co/pZH0d2t/3-1.gif"
                            alt="Juego del Ahorcado"
                        />
                        <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">
                                Juego del Ahorcado
                            </h3>
                            <p className=" font-my-cursive mb-4">
                                Interfaz atractiva y fácil de usar.
                                <br />
                                <br />
                                Antes de iniciar el juego puedes agregar una nueva palabra. Cuando agregues la nueva palabra enseguida inicias el juego.
                                Puedes jugar cuantas veces quieras. Por cada juego puedes equivocarte como máximo 9 veces para seguir con vida.
                                Si completas la palabra antes del ahorcado has ganado! Si te equivocas 9 veces sin completar la palabra, habrás perdido.
                                <br />
                                <br />
                                IT skills: HTML, CSS, JS
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                                    href="https://github.com/fabianalmanza/Juego-Ahorcado_Challengue-2-master"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Repositorio
                                </a>
                                <a
                                    className="inline-block px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    href="https://juego-adivina-palabra.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiencia;