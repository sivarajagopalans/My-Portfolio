import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBarComponent from './components/NavBar';
import { Banner } from './components/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import htmllogo from '../src/images/html-5.svg';
import csslogo from '../src/images/css3.svg';
import bootstraplogo from '../src/images/bootstrap.svg';
import javascriptlogo from '../src/images/javascript.svg';
import reactlogo from '../src/images/react.svg';
import gitlogo from '../src/images/git.svg';
import githublogo from '../src/images/github.svg';
import vscodelogo from '../src/images/vs-code.svg';
import wamplogo from '../src/images/WampServer.svg';
import postmanlogo from '../src/images/postman.svg';
import adviceApp from '../src/images/adviceApp.jpg';
import weatherApp from '../src/images/weatherApp.jpg';
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
      <Container id='projects'>
        <h2 className='text-center text-white pb-4'>My Projects</h2>
        <Row className='justify-content-center'>
          <Col sm={12} md={6} lg={4}>
            <Projects proImg={weatherApp}
              s1="HTML" s2="CSS" s4="JavaScript" s5="React Js"
              title='Weather Website' content="Find your location weather."
              live="https://sivarajagopalans.github.io/Weather-app/" />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Projects proImg={adviceApp}
              s1="HTML" s2="CSS" s3="Bootstrap" s4="JavaScript" s5="React Js"
              title='Advice Website' content="This project give advices."
              live="https://sivarajagopalans.github.io/Advice-app/" />
          </Col>
        </Row>
      </Container>

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
