import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

import { Button, Container } from 'react-bootstrap';

export const Projects = (props) => {
  return (
    <section>

      <Container className='d-flex  justify-content-center align-items-center text-center pb-4' >

        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={props.proImg} />
          <Card.Body className='text-center d-flex flex-column justify-content-center '>
            <div >
              <Stack direction="horizontal" gap={3} className='d-flex flex-row justify-content-center flex-wrap p-2'>
                <Badge bg="primary">{props.s1}</Badge>
                <Badge bg="secondary">{props.s2}</Badge>
                <Badge bg="success">{props.s3}</Badge>
                <Badge bg="danger">{props.s4}</Badge>
                <Badge bg="warning">{props.s5}</Badge>
              </Stack>
            </div>
            <Card.Title >{props.title}</Card.Title>
            <Card.Text>
              {props.content}
            </Card.Text>
            {props.live && <Button variant="secondary" 
              style={{color:"white",backgroundColor:"rgb(117 52 207)",fontSize:"1.2rem"}} 
              target='_blank' href={props.live}>view live
            </Button>}
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
