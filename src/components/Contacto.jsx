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
                    <h2 className="text-3xl font-semibold  text-center mb-8 text-custom-sm">
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
                        className="px-4 py-2 bg-custom-blue text-white rounded hover:shadow-md text-custom-sm"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contacto;