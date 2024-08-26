import React from 'react'
import './css/banner.css'
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap'
import MyProfile from '../SIVA.jpg'

export const Banner = () => {
  return (
    <Container id='about' className='pt-5 mt-4 text-center' >
      <Row className='justify-content-center'>
        <Col lg={6} md={9} sm={12}>
          <div className='pt-4'>
            <img src={MyProfile} alt="SIVARAJAGOPALAN S" className='profile-image' />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="h1 pt-4 text-white">
            Hello! I am <br /> SIVARAJAGOPALAN S
          </div>
          <div className='h2 text-center text-white'>I am a
            <span className='text-primary'> Front-End Devoloper</span>
          </div>
          <p className='h5 text-white-50'>
            I'm a fresher with a strong foundation in Front-End Development. I am proficient in React Js, Redux Js, JavaScript, Bootstrap, CSS, and HTML, and have experience building dynamic web applications using React and Redux state management. Passionate about learning and innovation, I'm open to new opportunities and collaborations. Check out my works and Let's connect!
          </p>
          <Nav className='h3 justify-content-center'>
            <NavLink className='text-white' target='_blank' href='https://github.com/sivarajagopalans'><i className="bi bi-github"></i></NavLink>
            <NavLink className='text-white' target='_blank'
              href='https://www.linkedin.com/in/sivarajagopalans'><i className="bi bi-linkedin"></i></NavLink>
            <NavLink className='text-white' target='_blank'
              href='https://www.instagram.com/black_pearl.sr/'><i className="bi bi-instagram"></i></NavLink>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
