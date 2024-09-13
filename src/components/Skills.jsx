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
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Html5</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Css</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Javascript</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="w-16 mb-3"
            />
            <p className="font-semibold">React</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Nodejs</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=mysql"
              alt="MySQL"
              className="w-16 mb-3"
            />
            <p className="font-semibold">MySql</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              className="w-16 mb-3"
            />
            <p className="font-semibold">Git</p>
          </div>
          <div className="min-w-24 max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
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
          <div className="min-w-24 max-w-24 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center py-8">
         
            <p className="font-semibold">Bicicleta</p>
            <RiMotorbikeLine />
          </div>
          <div className="min-w-24 max-w-24 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center py-8">
        
            <p className="font-semibold">Peliculas</p>
            <SiThemoviedatabase />
          </div>
          <div className="min-w-24 max-w-24 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center py-8">
         
            <p className="font-semibold">Lectura</p>
            <FaBook />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;