import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myproject from '../portfolio.jpg'
import { Container } from 'react-bootstrap';

export const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-center text-white pb-4'>My Projects</h2>
      <Container className='d-flex justify-content-center pb-4'>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myproject} />
          <Card.Body className='text-center'>
            {/* <div >
          <ul list-group-horizontal d-flex flex-row justify-content-between >
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React Js</li>
          </ul>
          </div> */}
            <div >
              <Stack direction="horizontal" gap={3} className='d-flex flex-row justify-content-center flex-wrap p-2'>
                <Badge bg="primary">HTML</Badge>
                <Badge bg="secondary">CSS</Badge>
                <Badge bg="success">Bootstrap</Badge>
                <Badge bg="danger">JavaScript</Badge>
                <Badge bg="warning" >                                     
                  React Js
                </Badge>

              </Stack>
            </div>
            <Card.Title >My Portfolio</Card.Title>
            <Card.Text>
              This project is my Portfolio.
            </Card.Text>
            {/* <Button variant="primary" target='_blank' href='https://sivarajagopalans.github.io/My-Portfolio/#skills'>Go live</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
