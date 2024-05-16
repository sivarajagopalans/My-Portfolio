import React from 'react'
import './css/skills.css'


export const Skills = (props) => {
  return (
    <section >
    <div className='d-flex align-items-center text-white mb-3' id='skill'>
      <h3 className='pt-4 pb-4'>{props.skill}</h3>

      <div className='skills-contents'>
        <h6 className='skills-name'><img src={props.s1} alt="" />{props.s1t}</h6>
        <h6 className='skills-name'><img src={props.s2} alt="" />{props.s2t}</h6>
        <h6 className='skills-name'><img src={props.s3} alt="" />{props.s3t}</h6>
        <h6 className='skills-name'><img src={props.s4} alt="" />{props.s4t}</h6>
        <h6 className='skills-name'><img src={props.s5} alt="" /> {props.s5t}</h6>
      </div>




    </div>
    </section>

  )
}
