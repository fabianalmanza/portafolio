import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
// banner
const Baner = () => {
    return (
        <section className="bg-secundario py-8">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="w-2/3">
                    <h1 className="text-5xl font-bold text-gray-700 mb-5 text-custom-sm">Front-End Developer</h1>
                    
                    <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        <li>
                            <a 
                                href="https://github.com/fabianalmanza" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-black hover:text-yellow-600 flex items-center space-x-1"
                            >
                                <span>Github</span>
                                <FaGithubAlt />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/fabian-almanza-sanchez/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-black hover:text-yellow-600 flex items-center space-x-1"
                            >
                                <span>Linkedin</span>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1DVu1q1Muam9PLG7UifnO00U3-T1MPnoQ/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-black hover:text-yellow-600 flex items-center space-x-1"
                            >
                                <span>Curriculo</span>
                                <TbFileCv />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img
                        src="https://i.ibb.co/5v8YNNL/1656639332718.jpg"
                        alt="Logo Fabi"
                        className="w-3/4 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default Baner;