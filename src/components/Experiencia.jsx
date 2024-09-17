// experiencia.jsx

const LaptopWithGIF = ({ laptopImage, gifImage, title}) => {
  return (
    <div className="relative w-full h-full  rounded-lg overflow-hidden">
      {/* Laptop image */}
      <div className="absolute inset-0">
        <img
          src={laptopImage}
          alt={`Laptop view for ${title}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* GIF image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={gifImage}
          alt={`GIF for ${title}`}
          className="max-w-[78%] max-h-[70%] object-contain mr-1 pb-4"
        />
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Seresa Ecommerce",
    description: "Aplicación de comercio electrónico diseñada para una tienda de joyería, permitiendo a los usuarios explorar productos, agregar artículos al carrito y realizar pedidos.",
    laptopImage: "https://i.imgur.com/XieZ5Rm.png",
    gifImage: "https://i.imgur.com/QCVS5Ef.gif",
    technologies: ["React", "Tailwind", "JS","Vercel","Git"],
    demoUrl: "https://seresa.vercel.app/",
    repoUrl: "https://github.com/fabianalmanza/seresa",
  },
  {
    title: "Portal Menu Intranet",
    description: "Desarrollé un sistema integral para la recopilación y visualización de datos analíticos mejorando significativamente la eficiencia en el análisis de información empresarial.",
    laptopImage: "https://i.imgur.com/XieZ5Rm.png",
    gifImage: "https://i.imgur.com/MOEv9Om.gif",
    technologies: ["HTML", "CSS", "JavaScript","React","nodejs","mysql"],
    demoUrl: "https://github.com/fabianalmanza/Menu",
    repoUrl: "https://github.com/fabianalmanza/Menu",
  },
  {
    title: "Portafolio Personal",
    description: "Este proyecto es mi portafolio web personal, diseñado y desarrollado para mostrar mis habilidades, proyectos y experiencia como Desarrollador Junior. Utiliza tecnologías modernas de frontend para crear una experiencia de usuario atractiva y responsive.",
    laptopImage: "https://i.imgur.com/XieZ5Rm.png",
    gifImage: "https://i.imgur.com/OTY6U1W.png",
    technologies: ["HTML", "CSS", "JS", "React", "Tailwind", "Netlify"],
    demoUrl: "https://juego-adivina-palabra.netlify.app/",
    repoUrl: "https://github.com/fabianalmanza/Juego-Ahorcado_Challengue-2-master",
    
  },
  {
    title: "Balance Checker",
    description: "Balance Checker es una aplicación Node.js diseñada para monitorear y gestionar el saldo de una cuenta Twilio. Esta herramienta es crucial para mantener la continuidad de los servicios de comunicación, asegurando que siempre haya fondos suficientes para las operaciones.",
    laptopImage: "https://i.imgur.com/XieZ5Rm.png",
    gifImage: "https://i.imgur.com/sGoKEVC.gif",
    technologies: ["Node.js", "Twilio", "JavaScript","Jwt","Express","postman"],
    demoUrl: "https://github.com/fabianalmanza/Balance-Checker",
    repoUrl: "https://github.com/fabianalmanza/Balance-Checker",
    
  },
];

const Experiencia = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-10 overflow-x-auto">
    <div id="experiencia" className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Proyectos</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image container */}
            <div className="w-full md:w-1/3 h-64">
              <LaptopWithGIF
                laptopImage={project.laptopImage}
                gifImage={project.gifImage}
                title={project.title}
                specialStyle={project.specialStyle}
              />
            </div>
            {/* Text container */}
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="bg-gray-50 border-t p-4 flex justify-between">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                >
                  Repositorio
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Experiencia;
