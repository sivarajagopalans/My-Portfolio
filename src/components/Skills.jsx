import React from 'react'
import './css/skills.css'
import { Col, Container, Row } from 'react-bootstrap';

import htmllogo from '../images/html-5.svg';
import csslogo from '../images/css3.svg';
import bootstraplogo from '../images/bootstrap.svg';
import javascriptlogo from '../images/javascript.svg';
import reactlogo from '../images/react.svg';
import gitlogo from '../images/git.svg';
import githublogo from '../images/github.svg';
import vscodelogo from '../images/vs-code.svg';
import wamplogo from '../images/WampServer.svg';
import postmanlogo from '../images/postman.svg';

export const Skills = (props) => {

  const skillsList = [
    {
      title: 'Front-End',
      skills: [
        { name: 'HTML', image: htmllogo },
        { name: 'CSS', image: csslogo },
        { name: 'Bootstrap', image: bootstraplogo },
        { name: 'JavaScript', image: javascriptlogo },
        { name: 'React Js', image: reactlogo },
      ]
    },

    {
      title: 'Tools',
      skills: [
        { name: 'Git', image: gitlogo },
        { name: 'Github', image: githublogo },
        { name: 'VS Code', image: vscodelogo },
        { name: 'WAMP', image: wamplogo },
        { name: 'Postman', image: postmanlogo }
      ]
    }

  ]

  return (
    <Container className='my-4' id='skills'>
      <Row className=' my-2'>
        <h3 className=' h1 text-white text-center py-1' >SKILLS</h3>
        {
          skillsList.map((skill, index) => {
            return (
              <Col className='my-2' md={6} sm={12} key={index}>
                <div  className=' text-white mb-3 skill'>
                  <h3 className='my-4'>{skill.title}</h3>
                  <div className='skills-contents'>
                    {
                      skill.skills.map((item) => {
                        return (
                          <h6 key={item.name} className='skills-name'><img src={item.image} alt="" />{item.name}</h6>)
                      })
                    }
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
