const Menu = () => {
<<<<<<< HEAD
    return ( <>
    {/*----------------------------------------*/}
      {/*--------------- MENU -------------------*/}
      {/*----------------------------------------*/}
      <header>
        <div className="menu container">
          <p className="menu__nombre"> Fabian Almanza</p>
          <nav className="nav-enlaces">
            <ul className="enlaces">
              <li>
                <a href="#contenedor_sobremi">Sobre mi</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#hobbies">Hobbies</a>
              </li>
              <li>
                <a href="#formacion">Formacion</a>
              </li>
              <li>
                <a href="#experiencia">Proyectos</a>
              </li>
              <li>
                <a className="email" href="mailto:fabian.almanza741@gmail.com">
                  fabian.almanza741@gmail.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    
    
    
    </> );
}
 
export default Menu;


   
=======
  return (
      <header className="bg-custom-light-blue">
          <div className="container mx-auto px-4">
              <nav className="flex justify-between items-center py-8">
                  <p className="text-red-800 font-semibold before:content-['🚀']">
                      Fabian Almanza
                  </p>
                  <ul className="flex space-x-6">
                      <li>
                          <a href="#contenedor_sobremi" className=" hover:text-yellow-600">
                              Sobre mi
                          </a>
                      </li>
                      <li>
                          <a href="#skills" className=" hover:text-yellow-600">
                              Skills
                          </a>
                      </li>
                      <li>
                          <a href="#hobbies" className=" hover:text-yellow-600">
                              Hobbies
                          </a>
                      </li>
                      <li>
                          <a href="#formacion" className=" hover:text-yellow-600">
                              Formacion
                          </a>
                      </li>
                      <li>
                          <a href="#experiencia" className=" hover:text-yellow-600">
                              Proyectos
                          </a>
                      </li>
                      <li>
                          <a href="mailto:fabian.almanza741@gmail.com" className=" font-bold hover:underline">
                              fabian.almanza741@gmail.com
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Menu;
>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
