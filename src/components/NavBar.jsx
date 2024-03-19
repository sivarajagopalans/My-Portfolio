import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
        <div > 
      <Navbar expand="lg" className="fixed-top text-white" style={{background: "rgb(25, 25, 36)"}}>
      <Container className='text-white'>
        <Navbar.Brand href="#home"><h2 className='text-white'><span><i className="bi bi-person-circle"></i> Portfolio</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav className='h4'>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <Nav.Link href="#skills" className='text-white'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='text-white'>Projects</Nav.Link>
            <Nav.Link href="#education" className='text-white'>Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBarComponent;