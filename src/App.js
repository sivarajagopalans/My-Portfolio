import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBarComponent from './components/NavBar';
import { Banner } from './components/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import htmllogo from '../src/components/images/html-5.svg'
import csslogo from '../src/components/images/css3.svg'
import bootstraplogo from '../src/components/images/bootstrap.svg'
import javascriptlogo from '../src/components/images/javascript.svg'
import reactlogo from '../src/components/images/react.svg'
import gitlogo from '../src/components/images/git.svg'
import githublogo from '../src/components/images/github.svg'
import vscodelogo from '../src/components/images/vs-code.svg'


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
            <Skills skill="Front-end" s1={htmllogo} s1t='HTML' s2={csslogo} s2t='CSS'
            s3={bootstraplogo} s3t='Bootstrap' s4={javascriptlogo}
            s4t='JavaScript'
            s5={reactlogo} s5t='React Js'/>
          </Col>
          <Col md={6} sm={12}>
            <Skills  skill='Tools' s1={gitlogo} s1t='Git' s2={githublogo} s2t='Github'
            s3={vscodelogo} s3t='VS Code' s4='' s4t='' s5='' s5t=''/>
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
