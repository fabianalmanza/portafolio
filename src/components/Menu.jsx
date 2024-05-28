const Menu = () => {
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


   