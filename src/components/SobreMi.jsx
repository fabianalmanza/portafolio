const SobreMi = () => {
<<<<<<< HEAD
    return ( <>
    {/*--------------------------------------------*/}
        {/*--------------- SOBRE MI -------------------*/}
        {/*--------------------------------------------*/}
        <section id="contenedor_sobremi">
          <div className="sobremi container">
            <h2 className="sobremi__titulo">Sobre mi</h2>
            <p className="sobremi__texto">
              💻 Soy estudiante de programación de aplicaciones y servicios para la nube en el SENA, 
              y me desempeño como desarrollador de software. Apasionado por la tecnología, 
              complemento mis estudios de manera autodidacta y nunca dejo de aprender. 
              Me considero altamente organizado y capaz de adaptarme a diversas situaciones.
               Valoro enormemente las habilidades interpersonales y el trabajo en equipo, 
               fundamentales para alcanzar los objetivos en cualquier proyecto.
              <br />
             
            </p>
          </div>
        </section>
    </> );
}
 
export default SobreMi;
=======
  return (
      <section className="bg-custom-light-blue py-12 rounded-md ">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-700 mb-8">
                  Sobre mi
              </h2>
              <p className="text-lg w-2/3 text-justify leading-relaxed mb-5">
                  💻 Soy estudiante de programación de aplicaciones y servicios para la nube en el SENA, 
                  y me desempeño como desarrollador de software. Apasionado por la tecnología, 
                  complemento mis estudios de manera autodidacta y nunca dejo de aprender. 
                  Me considero altamente organizado y capaz de adaptarme a diversas situaciones.
                  Valoro enormemente las habilidades interpersonales y el trabajo en equipo, 
                  fundamentales para alcanzar los objetivos en cualquier proyecto.
              </p>
              {/* Si tienes una imagen que quieras agregar, descomenta la siguiente línea */}
              {/* <img src="your-signature.png" alt="Your Signature" className="w-1/6" /> */}
          </div>
      </section>
  );
}

export default SobreMi;
>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
