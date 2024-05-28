const Experiencia = () => {
    return ( <>
    {/*-------------------------------------------------------*/}
        {/*--------------- EXPERIENCIA LABORAL -------------------*/}
        {/*-------------------------------------------------------*/}
        <section className="contenedor-experiencia">
          <div id="experiencia" className="experiencia">
            <h2 className="experiencia__titulo">Proyectos</h2>
            <div className="experiencia__contenidos">





              <div className="experiencia__contenido wordle">
                <img
                  className="experiencia__contenido__img"
                  src="https://i.ibb.co/bdt9Dq6/calculadora.png"
                  alt="Proyecto Wordle Clone"
                />
                <div className="experiencia__contenido__informacion">
                  <h3 className="experiencia__contenido__informacion__titulo">
                    Calculadora
                  </h3>
                  <p className="experiencia__contenido__informacion__texto">
                    interfaz atractiva y fácil de usar. Botones numéricos y
                    operadores que permitirán operaciones básicas.
                    <br />
                    <br />
                    El campo de visualización mostrará la expresión y el
                    resultado. La calculadora realizará sumas, restas,
                    multiplicaciones y divisiones. IT skills HTML, CSS, Js
                  </p>
                  <div className="experiencia__contenido__informacion__botones">
                    <a
                      className="btn-repo"
                      href="https://github.com/fabianalmanza/base-calculadora-curso-js/tree/master"
                      target="_blank"
                    >
                      Repositorio
                    </a>
                    <a
                      className="btn-demo"
                      href="https://subtle-dragon-71c221.netlify.app"
                      target="_blank"
                    >
                      Ver Demo
                    </a>
                  </div>
                </div>
              </div>




          
              <div className="experiencia__contenidos">
                <div className="experiencia__contenido ahorcado">
                  <div className="experiencia__contenido__informacion">
                    <h3 className="experiencia__contenido__informacion__titulo">
                      Aplicación del Clima
                    </h3>
                    <p className="experiencia__contenido__informacion__texto">
                      Ingresa el nombre de la ciudad y obtén datos actualizados
                      al instante. Visualiza pronósticos detallados para
                      planificar tu semana. Interfaz intuitiva y agradable.{" "}
                      <br />
                      <br /> Acceso por medio de la Api a información
                      meteorológica- IT skills: HTML, CSS y JavaScript.
                    </p>
                    <div className="experiencia__contenido__informacion__botones">
                      <a
                        className="btn-repo"
                        href="https://github.com/fabianalmanza/aplicacion-clima"
                        target="_blank"
                      >
                        Repositorio
                      </a>
                      <a
                        className="btn-demo"
                        href="https://fabianalmanza.github.io/aplicacion-clima/"
                        target="_blank"
                      >
                        Ver Demo
                      </a>
                    </div>
                  </div>
                  <img
                    className="experiencia__contenido__img"
                    src="https://i.ibb.co/5KpwM2h/clima.png"
                    alt="aplicacion clima"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </> );
}
 
export default Experiencia;