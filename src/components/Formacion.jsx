const Formacion = () => {
    return ( <>
     {/*-------------------------------------------------------*/}
        {/*--------------- FORMACION ACADEMICA -------------------*/}
        {/*-------------------------------------------------------*/}
        <section className="contenedor-formacion">
          <div id="formacion" className="formacion container">
            <h2 className="formacion__titulo">Formacion Academica</h2>
            <div className="formacion__cards">

              <div className="formacion__card">
                <div className="formacion__card__img">
                  <img
                    className="logo_sena"
                    src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png"
                    alt="Logo Sena"
                  />
                </div>
                <p className="formacion__card__contenido__curso">
                  Tecnico en Programacion de Aplicaciones y Servicios para la nube
                </p>
                <p className="formacion__card__contenido__curso__datos">
                  [2023-2024] - SENA
                </p>
              </div>

              <div className="formacion__card">
                <div className="formacion__card__img">
                  <img
                    className="logo_sergio"
                    src="https://static.wixstatic.com/media/64ab98_ec1d1018b3e94e3da18ae6fc2266bdc4~mv2.png/v1/fill/w_420,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UIS-logo1.png"
                    alt="Logo UIS"
                  />
                </div>
                <p className="formacion__card__contenido__curso">
                  Ingeniería De Petróleos
                </p>
                <p className="formacion__card__contenido__curso__datos">
                  [2015-2022] - UNIVERSIDAD INDUSTRIAL DE SANTANDER
                </p>
              </div>

              <div className="formacion__card">
                <div className="formacion__card__img">
                  <img
                    className="logo_platzi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBqd3IMg5-4KZXa7XKRcgV4QnpSGrgJ6Ayg&s"
                    alt="Logo Platzi"
                  />
                </div>
                <p className="formacion__card__contenido__curso">
                  Desarrollo Web
                </p>
                <p className="formacion__card__contenido__curso__datos">
                  [2023] - Platzi
                </p>
              </div>
              <div className="formacion__card">
                <div className="formacion__card__img">
                  <img
                    className="logo_alura"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEX-HY8btG6ccSdB_3oUIOg9QO1tRKnliIQ&s"
                    alt="Logo Alura latam"
                  />
                </div>
                <p className="formacion__card__contenido__curso">
                  Programacion Frontend
                </p>
                <p className="formacion__card__contenido__curso__datos">
                  [2023] - Alura Latam, Oracle
                </p>
              </div>


            </div>
          </div>
        </section>
    </> );
}
 
export default Formacion;
