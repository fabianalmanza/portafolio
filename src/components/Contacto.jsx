import chat from '../assets/chat.svg'

const Contacto = () => {
    return ( <>
    {/*--------------------------------------------*/}
        {/*--------------- CONTACTO -------------------*/}
        {/*--------------------------------------------*/}
        <section className="contenedor-formulario">
          <div className="formulario container">
            <div className="formulario__contenedor">
              <img
                className="formulario__contenedor__img"
                src={chat}
                alt="Imagen contacto"
              />
            </div>
            <div className="formulario__contenido">
              <h2 className="formulario__contenido__titulo">Contacto</h2>
              <p>¿Quieres contactarme?</p>
              <p>
                Completa el siguiente formulario y me pondre en contacto contigo
                lo antes posible
              </p>
              <form
                name="formulario-contacto"
                action="https://formspree.io/f/mbjneevw"
                method="POST"
                netlify=""
              >
                <div className="input-container">
                  <input
                    name="name"
                    id="name"
                    className="input inputs"
                    type="text"
                    placeholder="Nombre"
                    required=""
                    data-tipo="nombre"
                  />
                  <label className="input-label" htmlFor="name">
                    Nombre
                  </label>
                  <span className="input-message-error">
                    Este campo no es valido
                  </span>
                </div>
                <div className="input-container">
                  <input
                    name="email"
                    id="email"
                    className="input inputs"
                    type="email"
                    placeholder="Email"
                    required=""
                    data-tipo="email"
                  />
                  <label className="input-label" htmlFor="name">
                    Email
                  </label>
                  <span className="input-message-error">
                    Este campo no es valido
                  </span>
                </div>
                <div className="input-container">
                  <input
                    name="asunto"
                    id="asunto"
                    className="input inputs"
                    type="text"
                    placeholder="Asunto"
                    pattern="[\s\S]{4,20}"
                    required=""
                    data-tipo="asunto"
                  />
                  <label className="input-label" htmlFor="name">
                    Asunto
                  </label>
                  <span className="input-message-error">
                    Este campo no es valido
                  </span>
                </div>
                <div className="textarea-container">
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    className="textarea inputs"
                    rows={5}
                    type="text"
                    placeholder="Mensaje"
                    required=""
                    data-tipo="mensaje"
                    defaultValue={""}
                  />
                  <label className="input-label" htmlFor="name">
                    Mensaje
                  </label>
                  <span className="input-message-error">
                    Este campo no es valido
                  </span>
                </div>
                <input
                  className="boton-form"
                  type="submit"
                  
                  id="enviar"
                  defaultValue="Enviar Mensaje"
                />
              </form>
            </div>
          </div>
        </section>
    </> );
}
 
export default Contacto;
