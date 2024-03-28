import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
        <div > 
      <Navbar expand="lg" className="fixed-top text-white" style={{background: "rgb(25, 25, 36)"}}>
      <Container className='text-white'>
        <Navbar.Brand href="#home"><h3 className='text-white'><span><i className="bi bi-person-circle"></i> Portfolio</span></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='h5'>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <Nav.Link href="#skills" className='text-white'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='text-white'>Projects</Nav.Link>
            <Nav.Link href="https://github.com/sivarajagopalans" target='_blank' className=' '
            style={{border:"1.8px solid rgb(133, 76, 230)", borderRadius:"15px",padding:"10px",paddingTop:"10px",display:"flex", justifyContent:"center", alignItems:"center",flexWrap:"wrap",color: "rgb(133, 76, 230)"}}>GitHub Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBarComponent;