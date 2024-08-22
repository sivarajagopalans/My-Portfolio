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

      {/* -------------preloader------------ */}

      {preloader && <Preloader />}


      {/* -------------navbar--------------- */}
      <NavBarComponent />

      {/* -------------banner--------------- */}
      <div className='text-center pt-4'>
        <Banner />
      </div>


      {/* ---------Skills---------- */}

      <Skills />

      {/* ----------project--------- */}

      <Projects />

      {/* -----contact----- */}


      <Contact />

      {/* --------footer------- */}
      <div className=''>
        <Footer />
      </div>

    </div >
  );
}

export default App;
