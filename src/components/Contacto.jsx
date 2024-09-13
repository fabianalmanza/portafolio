<<<<<<< HEAD
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
 
=======
import chat from '../assets/chat.svg';

const Contacto = () => {
    return (
        <section className="bg-custom-light-blue py-12 rounded-md">
            <div className="container mx-auto px-4 flex justify-around items-start">
                <div className="w-2/5">
                    <img
                        src={chat}
                        alt="Imagen contacto"
                        className="w-full h-full object-cover"
                    />
                </div>
                <form
                    name="formulario-contacto"
                    action="https://formspree.io/f/mbjneevw"
                    method="POST"
                    className="w-2/5 space-y-6"
                >
                    <h2 className="text-3xl font-semibold  text-center mb-8">
                        Contacto
                    </h2>
                    <div className="relative mb-6">    
                       <label
                            htmlFor="name"
                            className="absolute top-0 left-2 text-sm  transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left"
                        >
                            Nombre
                          
                        </label>
                        <br />
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-2 border-b border-custom-blue focus:outline-none"
                            required
                        />
                   
                       
                    </div>
                    <div className="relative mb-6">    
                          <label
                            htmlFor="email"
                            className="absolute top-0 left-2 text-sm  transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left"
                        >
                            Email
                        </label>
                        <br />
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border-b border-custom-blue focus:outline-none"
                            required
                        />
                
                    </div>
                    <div className="relative mb-6">
                         <label
                            htmlFor="asunto"
                            className="absolute top-0 left-2 text-sm  transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left"
                        >
                            Asunto
                        </label>   
                        <br /> 
                         <input
                            name="asunto"
                            id="asunto"
                            type="text"
                            placeholder="Asunto"
                            className="w-full p-2 border-b border-custom-blue focus:outline-none"
                            required
                        />
                  
                    </div>
                    <div className="relative mb-6">
                       <label
                            htmlFor="mensaje"
                            className="absolute top-0 left-2 text-sm  transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left"
                        >
                            Mensaje
                        </label>  <br />
                           <textarea
                            name="mensaje"
                            id="mensaje"
                            rows="5"
                            placeholder="Mensaje"
                            className="w-full p-2 border-b border-custom-blue focus:outline-none resize-none"
                            required
                        />
                    
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-custom-blue text-white rounded hover:shadow-md"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
export default Contacto;
