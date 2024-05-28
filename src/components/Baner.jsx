const Baner = () => {
    return ( <>
     {/*------------------------------------------*/}
        {/*--------------- BANNER -------------------*/}
        {/*------------------------------------------*/}
        <section className="contenedor__banner">
          <div className="banner container">
            <div className="banner__informacion">
              <h1 className="banner__informacion__titulo">
                Front-End Developer
              </h1>
              <p className="banner__informacion__texto"></p>
              <ul className="banner__informacion__enlaces">
                <li>
                  <a href="https://github.com/fabianalmanza" target="_blank">
                    Github{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/fabian-almanza-sanchez/"
                    target="_blank"
                  >
                    Linkedin{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1PIvtsCvG7pXRUc0L7DRyYAwBRozIaL5Q/view?usp=sharing"
                    target="_blank"
                  >
                    Curriculo{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="banner__img">
              <img
                className="img"
                src="https://i.ibb.co/5v8YNNL/1656639332718.jpg"
                alt="Logo Fabi"
              />
            </div>
          </div>
        </section>
    </> );
}
 
export default Baner;