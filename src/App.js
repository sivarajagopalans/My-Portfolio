import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBarComponent from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import { Contact } from './components/Contact';

function App() {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1500);
  }, []);
  return (
    <div style={{ background: "rgb(25, 25, 36)" }}>

      {preloader && <Preloader />}

      <NavBarComponent />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div >
  );
}

export default App;
