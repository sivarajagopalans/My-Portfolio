import React from 'react'
import '../skills/skills.css'
import htmllogo from '../images/html-5.svg'
import csslogo from '../images/css3.svg'
import bootstraplogo from '../images/bootstrap.svg'
import javascriptlogo from '../images/javascript.svg'
import reactlogo from '../images/react.svg'

export const ExampleSkill = (props) => {
    return (
        <div>
            <div className='skills-div'>
                    <h2 className='front-end'>{props.tech}</h2>
                <div className='skills-tr'>
                    
                    <div className='skills-h'><img src={reactlogo} alt="" />React js</div>
                    <div className='skills-h'><img src={bootstraplogo} alt="" />Bootstrap</div>
                    <div className='skills-h'><img src={htmllogo} alt="" />HTML</div>
                    <div className='skills-h'><img src={javascriptlogo} alt="" />JavaScript</div>
                    <div className='skills-h'><img src={csslogo} alt="" />CSS</div>
                </div>

            </div>

        </div>
    )
}
