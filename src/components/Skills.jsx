<<<<<<< HEAD
const Skills = () => {
    return ( <>
    {/*-----------------------------------------------*/}
        {/*--------------- Skills -------------------*/}
        {/*-----------------------------------------------*/}
        <section className="adicionales">
          <div id="skills" className="skills container">
            <h2 className="skills__titulo">Skills</h2>
            <div className="skills__cards">
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=html" />
                  <p className="skills__card__titulo">Html5</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=css" />
                  <p className="skills__card__titulo">Css</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=js" />
                  <p className="skills__card__titulo">Javascript</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=react" />
                  <p className="skills__card__titulo">React</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=mysql" />
                  <p className="skills__card__titulo">MySql</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=git" />
                  <p className="skills__card__titulo">Git</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=md" />
                  <p className="skills__card__titulo">Markdown</p>
                </div>
              </div>
            </div>
          </div>
          <div id="skills" className="skills container">
            <h2 className="skills__titulo">Tools</h2>
            <div className="skills__cards">
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=vscode" />
                  <p className="skills__card__titulo">Visual Studio Code</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=github" />
                  <p className="skills__card__titulo">Github</p>
                </div>
              </div>
              <div className="skills__card">
                <div className="skills__card__contenido">
                  <img src="https://skillicons.dev/icons?i=netlify" />
                  <p className="skills__card__titulo">Netlify</p>
                </div>
              </div>
            </div>
          </div>
          <div id="hobbies" className="hobbies container">
            <h2 className="skills__titulo">Hobbies</h2>
            <div className="hobbies__cards">
              <div className="hobbies__card">
                <div className="hobbies__card__contenido">
                  <img
                    className="hobbies__card__img"
                    src="https://w7.pngwing.com/pngs/320/1014/png-transparent-city-bicycle-cycling-computer-icons-bike-rental-bicycle-bicycle-logo-mountain-biking.png"
                    alt="bici"
                  />
                  <p className="hobbies__card__titulo">Montar Bici</p>
                </div>
              </div>
              <div className="hobbies__card">
                <div className="hobbies__card__contenido">
                  <img
                    className="hobbies__card__img"
                    src="https://i.ibb.co/QQtYbK5/pelicula.png"
                    alt="Logo cine"
                  />
                  <p className="hobbies__card__titulo">Peliculas</p>
                </div>
              </div>
              <div className="hobbies__card">
                <div className="hobbies__card__contenido">
                  <img
                    className="hobbies__card__img"
                    src=" https://i.pinimg.com/736x/e6/aa/35/e6aa35d7c3080f488ccf7baa7693ddbf.jpg"
                    alt="Logo lectura"
                  />
                  <p className="hobbies__card__titulo">Lectura</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </> );
}
 
export default Skills;
=======
import { RiMotorbikeLine } from "react-icons/ri";
import { SiThemoviedatabase } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
const Skills = () => {
  return (
    <section className="bg-secundario py-12">
      <div id="skills" className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Card for each skill */}
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Html5</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Css</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Javascript</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="w-16 mb-3"
            />
            <p className="font-semibold">React</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Nodejs</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=mysql"
              alt="MySQL"
              className="w-16 mb-3"
            />
            <p className="font-semibold">MySql</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Git</p>
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind CSS"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Tailwind</p>
          </div>
        </div>
      </div>

      <div id="hobbies" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
          Hobbies
        </h2>
        <div className="flex flex-wrap justify-center gap-4 ">
          {/* Card for each hobby */}
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center py-11">
         
            <p className="font-semibold">Montar Bicicleta</p>
            <RiMotorbikeLine />
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
        
            <p className="font-semibold">Ver Peliculas</p>
            <SiThemoviedatabase />
          </div>
          <div className="w-1/6 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
         
            <p className="font-semibold">La Lectura</p>
            <FaBook />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
