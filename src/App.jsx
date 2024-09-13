
import './App.css'

import Menu from './components/Menu'
import Baner from './components/Baner.jsx'
import SobreMi from './components/SobreMi.jsx'
import Skills from './components/Skills.jsx'
import Formacion from './components/Formacion.jsx'
import Experiencia from './components/Experiencia.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <main className=' bg-secundario'>
      <Menu />
        <Baner />
        <SobreMi />
        <Skills />
        <Formacion />
        <Experiencia />
        <Contacto  />
      </main>
      <Footer />
    </>
  );
};

export default App;