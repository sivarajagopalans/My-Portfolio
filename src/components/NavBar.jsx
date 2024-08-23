import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
    <Navbar expand="lg" collapseOnSelect className="fixed-top" style={{ background: "rgb(25, 25, 36)" }}>
      <Container>
        <Navbar.Brand href="#home"><h3 className='text-white'><span><i className="bi bi-person-circle"></i> Portfolio</span></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='h5'>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <Nav.Link href="#skills" className='text-white'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='text-white'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>

            <Nav.Link href="https://github.com/sivarajagopalans" target='_blank'
              style={{ border: "1.8px solid rgb(133, 76, 230)", borderRadius: "15px", padding: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", color: "rgb(133, 76, 230)" }}>GitHub Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;