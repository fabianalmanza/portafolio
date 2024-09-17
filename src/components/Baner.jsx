import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
// banner
const Baner = () => {
    return (
        <section className="bg-secundario py-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl md:text-9xl font-bold text-white mb-5 text-custom-sm">
                       Desarrollador <br />Junior 
                    </h1>

                    <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 justify-center">
                        <li>
                            <a
                                href="https://github.com/fabianalmanza"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-600 flex items-center space-x-1"
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
                                className="text-white hover:text-yellow-600 flex items-center space-x-1"
                            >
                                <span>Linkedin</span>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1ztNF-tiz3g8mTlPWTLPVl_9SSIME6GF7/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-600 flex items-center space-x-1"
                            >
                                <span>Curriculo</span>
                                <TbFileCv />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


    );
}

export default Baner;