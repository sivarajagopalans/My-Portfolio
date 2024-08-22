import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { Button, Container, Col, Row } from 'react-bootstrap';
import adviceApp from '../images/project images/advice-website.jpg';
import weatherApp from '../images/project images/Weather-website.jpg';
import blogApp from '../images/project images/blog-platform.jpg'
import taskTracker from '../images/project images/task-tracker.jpg'
import productCatalog from '../images/project images/product-catalog.jpg'
import './css/projects.css'

export const Projects = (props) => {

   const projectList = [
      {
         title: 'Weather website',
         image: weatherApp,
         skills: ['HTML', 'CSS', 'JavaScript', 'React Js'],
         content: "It's help to find your location's weather.  I used the Weather API and JSON to fetch weather data.",
         live: "https://sivarajagopalans.github.io/Weather-app/"
      },
      {
         title: 'Task tracker (CRUD)',
         image: taskTracker,
         skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React Js', 'Redux'],
         content: "It's a simple to-do application.  I make the CRUD operation in this project using the Redux state management library.",
         live: "https://sivarajagopalans.github.io/CodSoft-Task-2/"
      },
      {
         title: 'Blog platform',
         image: blogApp,
         skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React Js', 'Redux'],
         content: "I've built an awesome blog platform that makes creating, editing, and publishing posts.",
         live: "https://sivarajagopalans.github.io/CodSoft-Task-3/"
      },
      {
         title: 'Product catalog',
         image: productCatalog,
         skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React Js', 'Redux'],
         content: "It is a functional product catalog for an e-commerce platform.  I used API integration for dynamic product data and Redux for state management.",
         live: "https://sivarajagopalans.github.io/CodSoft-Task-4/"
      },

      {
         title: 'Advice website',
         image: adviceApp,
         skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React Js'],
         content: "This project give advices.  I used the Advice API and JSON to fetch data.",
         live: "https://sivarajagopalans.github.io/Advice-app/"
      }
   ];

   return (

      <Container fluid className='container-xl' id='projects'>
         <h2 className='text-center text-white pb-4'>My Projects</h2>
         <Row className='justify-content-center'>
            {
               projectList.map((project, index) => {
                  return (
                     <Col sm={12} md={6} lg={4} key={index} className='d-flex justify-content-center my-4 '>
                        <Card className=' bg-transparent text-white project-card'>
                           <Card.Img variant="top" src={project.image} />
                           <Card.Body className='text-center d-flex flex-column justify-content-around'>
                              <div >
                                 <Stack direction="horizontal" gap={3} className='d-flex flex-row justify-content-center flex-wrap p-2'>
                                    {project.skills.map((skill, index) => {
                                       return <Badge key={index} className='text-primary' bg="dark">{skill}</Badge>
                                    })}
                                 </Stack>
                              </div>
                              <Card.Title >{project.title}</Card.Title>
                              <Card.Text>
                                 {project.content}
                              </Card.Text>

                           </Card.Body>
                           <div className='text-center mb-4'>
                              {project.live && <Button className='live-btn' variant=""
                                 target='_blank' href={project.live}>view live
                              </Button>}
                           </div>
                        </Card>
                     </Col>
                  )
               })
            }

         </Row>
      </Container>
   )
}
