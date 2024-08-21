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
    <div className='' style={{ background: "rgb(25, 25, 36)" }}>

      {/* -------------preloader------------ */}

      {preloader && <Preloader />}


      {/* -------------navbar--------------- */}
      <NavBarComponent />

      {/* -------------banner--------------- */}
      <div className='text-center pt-4'>
        <Banner />
      </div>


      {/* ---------Skills---------- */}

      <Container className='d-flex flex-column justify-content-center pt-3 align-items-center' id='skills'>
        <h3 className=' h1 text-white d-flex justify-content-center py-1' >SKILLS</h3>
        <Row className=' my-2 justify-content-center' >
          <Col style={{ paddingLeft: "0px", paddingRight: "0px" }} className=''
            md={6} sm={9} lg={6} xl={5} xxl={5}>
            <Skills skill="Front-end" s1={htmllogo} s1t='HTML' s2={csslogo} s2t='CSS'
              s3={bootstraplogo} s3t='Bootstrap' s4={javascriptlogo}
              s4t='JavaScript'
              s5={reactlogo} s5t='React Js' />
          </Col>
          <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}
            md={6} sm={9} lg={6} xl={5} xxl={5}>
            <Skills skill='Tools' s1={gitlogo} s1t='Git' s2={githublogo} s2t='Github'
              s3={vscodelogo} s3t='VS Code' s4={wamplogo} s4t='WAMP' s5={postmanlogo} s5t='Postman' />
          </Col>

        </Row>
      </Container>

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


      <Contact/>

      {/* --------footer------- */}
      <div className=''>
        <Footer />
      </div>

    </div>
  );
}

export default App;
