import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBarComponent from './components/NavBar';
import { Banner } from './components/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className='' style={{ background: "rgb(25, 25, 36)" }}>
      <NavBarComponent />
      <div className='text-center pt-4'> 
        <Banner />
      </div>

      <Container className='d-flex flex-column justify-content-center pt-5 align-items-center' id='skills'>
        <h3 className=' h1 text-white d-flex justify-content-center py-4' >SKILLS</h3>
        <Row className='mx-1 my-4 '>
          <Col className='' md={6} sm={12} >
            <Skills />
          </Col>
          <Col md={6} sm={12}>
            <Skills />
          </Col>

        </Row>
      </Container>
      <Projects/>
      <div className=''>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
