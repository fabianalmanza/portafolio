
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
      <Menu />
<<<<<<< HEAD
      <main>
=======
      <main className=' bg-secundario'>
>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
        <Baner />
        <SobreMi />
        <Skills />
        <Formacion />
        <Experiencia />
<<<<<<< HEAD
        <Contacto />
=======
        <Contacto  />
>>>>>>> 5d0f72a (se adapto el proyecto hacia tailwind)
      </main>
      <Footer />
    </>
  );
};

export default App;
