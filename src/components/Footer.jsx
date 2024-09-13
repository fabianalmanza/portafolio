import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/*-----------------------------------------*/}
      {/*--------------- FOOTER-------------------*/}
      {/*-----------------------------------------*/}


      <footer className="bg-secundario py-6">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm ">&copy; 2024 Fabian Almanza. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="https://github.com/fabianalmanza"  
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-black hover:text-yellow-600 flex items-center space-x-1"
              >
              <FaGithub className="h-6 w-6"/>
              </a>
              <a href="https://www.linkedin.com/in/fabian-almanza-sanchez/"  
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-black hover:text-yellow-600 flex items-center space-x-1"
              >
              <FaLinkedin className="h-6 w-6"/>
                
              </a>
             
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}