import React from 'react'
import './css/banner.css'
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap'
import MyProfile from '../SIVA.jpg'

export const Banner = () => {
    return (
        <div className='pt-5 '>
            <section id='about'>
                <Container className='pt-5 '> 
                    <Row> 
                        
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='rounded pt-4'>
                                <img src={MyProfile} alt="My profile" className='profile-image'
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}> 

                        <div className="h1 pt-4 fluid text-center text-white justify-content-center">Hello! i am <br /> SIVARAJAGOPALAN S</div>
                        <div className='h2 text-center text-white'>I am a <span className='text-primary'>Front-end Devoloper</span></div>
                        <h2 className='text-white justify-content-center text-center'>
                            <Nav className='text-white justify-content-center text-center'>
                            <NavLink className='text-white text-center'><i class="bi bi-github"></i></NavLink>
                            <NavLink className='text-white text-center'><i class="bi bi-linkedin"></i></NavLink>
                            <NavLink className='text-white text-center'><i class="bi bi-instagram"></i></NavLink>
                            </Nav>
                        </h2>
                        
                        
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
