import React from 'react'
import './css/skills.css'
import htmllogo from '../images/html-5.svg'
import csslogo from '../images/css3.svg'
import bootstraplogo from '../images/bootstrap.svg'
import javascriptlogo from '../images/javascript.svg'
import reactlogo from '../images/react.svg'

export const Skills = () => {
  return (
    <section >
    <div className='d-flex align-items-center text-white mb-3' id='skill'>
      <h3 className='pt-4 pb-4'>Front-end</h3>

      <div className='skills-contents'>
        <h4 className='skills-name'><img src={htmllogo} alt="" />HTML</h4>
        <h4 className='skills-name'><img src={csslogo} alt="" />CSS</h4>
        <h4 className='skills-name'><img src={bootstraplogo} alt="" />Bootstrap</h4>
        <h4 className='skills-name'><img src={javascriptlogo} alt="" />JavaScript</h4>
        <h4 className='skills-name'><img src={reactlogo} alt="" />React js</h4>
      </div>




    </div>
    </section>

  )
}
