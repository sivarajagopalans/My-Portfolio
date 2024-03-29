import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Container } from 'react-bootstrap';

export const Projects = (props) => {
  return (
    <section id='projects'>
      
      <Container className='d-flex justify-content-center pb-4'>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.proImg} />
          <Card.Body className='text-center'>
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
            <Card.Title >{props.title}</Card.Title>
            <Card.Text>
              {props.content}
            </Card.Text>
            {/* <Button variant="primary" target='_blank' href='https://sivarajagopalans.github.io/My-Portfolio/#skills'>Go live</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
