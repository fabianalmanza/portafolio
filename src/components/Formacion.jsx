const Formacion = () => {
  return (
      <section className="bg-custom-light-blue py-12 rounded-md">
          <div id="formacion" className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold  text-center mb-8">
                  Formación Académica
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                  {/* Card for each educational experience */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                      <div className="w-24 h-24 mb-4">
                          <img
                              className="w-full h-full object-contain"
                              src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png"
                              alt="Logo Sena"
                          />
                      </div>
                      <p className="text-lg font-semibold mb-2">
                          Técnico en Programación de Aplicaciones y Servicios para la nube
                      </p>
                      <p className="text-gray-600">
                          [2023-2024] - SENA
                      </p>
                  </div>

                  <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                      <div className="w-24 h-24 mb-4">
                          <img
                              className="w-full h-full object-contain"
                              src="https://static.wixstatic.com/media/64ab98_ec1d1018b3e94e3da18ae6fc2266bdc4~mv2.png/v1/fill/w_420,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UIS-logo1.png"
                              alt="Logo UIS"
                          />
                      </div>
                      <p className="text-lg font-semibold mb-2">
                          Ingeniería De Petróleos
                      </p>
                      <p className="text-gray-600">
                          [2015-2022] - UNIVERSIDAD INDUSTRIAL DE SANTANDER
                      </p>
                  </div>

                  <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                      <div className="w-24 h-24 mb-4">
                          <img
                              className="w-full h-full object-contain"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBqd3IMg5-4KZXa7XKRcgV4QnpSGrgJ6Ayg&s"
                              alt="Logo Platzi"
                          />
                      </div>
                      <p className="text-lg font-semibold mb-2">
                          Desarrollo Web
                      </p>
                      <p className="text-gray-600">
                          [2023] - Platzi
                      </p>
                  </div>

                  <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                      <div className="w-24 h-24 mb-4">
                          <img
                              className="w-full h-full object-contain"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEX-HY8btG6ccSdB_3oUIOg9QO1tRKnliIQ&s"
                              alt="Logo Alura Latam"
                          />
                      </div>
                      <p className="text-lg font-semibold mb-2">
                          Programación Frontend
                      </p>
                      <p className="text-gray-600">
                          [2023] - Alura Latam, Oracle
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Formacion;