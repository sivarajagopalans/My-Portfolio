import React from 'react'
import { Col, Container, Row, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


export const Footer = () => {
  return (
    <div>

      <Container>
        <Row xs={12} className='d-flex text-center' >
          <Col sm={12}  >
            <Nav className=' d-flex  justify-content-center h5 pb-2'>
              <Nav.Link href="#about" className='text-white '>About</Nav.Link>
              <Nav.Link href="#skills" className='text-white '>Skills</Nav.Link>
              <Nav.Link href="#projects" className='text-white '>Projects</Nav.Link>
              <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
              {/* <Nav.Link href="#education" className='text-white '>Education</Nav.Link> */}
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav className='text-white justify-content-center text-center h5'>
              <NavLink target='_blank' href='https://github.com/sivarajagopalans' className='text-white text-center'><i className="bi bi-github"></i></NavLink>
              <NavLink className='text-white text-center' target='_blank'
                href='https://in.linkedin.com/in/sivarajagopalan-s-219b9a261'><i className="bi bi-linkedin"></i></NavLink>
              <NavLink className='text-white text-center' target='_blank'
                href='https://www.instagram.com/black_pearl.sr/'><i className="bi bi-instagram"></i></NavLink>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-white text-center'>© 2024 Sivarajagopalan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
