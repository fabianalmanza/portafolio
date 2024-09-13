const SobreMi = () => {
    return (
        <section className="bg-custom-light-blue py-12 rounded-md ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-700 mb-8">
                    Sobre mi
                </h2>
                <p className="text-lg w-2/3 text-justify leading-relaxed mb-5">
                    Soy un desarrollador junior con sólida experiencia en el desarrollo de aplicaciones tanto en el frontend como en el backend. Mi experiencia abarca
                    la creación de interfaces intuitivas, el desarrollo y despliegue de APIs, y la gestión de entornos de producción. He trabajado en proyectos que van
                    desde el desarrollo de portales funcionales hasta la migración y optimización de APIs.

                </p>
                {/* Si tienes una imagen que quieras agregar, descomenta la siguiente línea */}
                {/* <img src="your-signature.png" alt="Your Signature" className="w-1/6" /> */}
            </div>
        </section>
    );
}

export default SobreMi;