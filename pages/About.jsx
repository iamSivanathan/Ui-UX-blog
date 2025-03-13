import React from 'react'
import Uid from './ui-design.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <div className='about'>

      <div className='design-image'>
        <img src={Uid} alt=''/>
      </div>

        <h2>About Learn UIX Academy UI Ux design</h2>

      <div className="about-container">

        <div className="about-box">
          <h3 style={{color:'rgb(218, 85, 32'}}><i><FontAwesomeIcon icon={faCheck}/></i>Real-Time Experts as Trainers</h3>
          <p> You will learn from experts share their knowledge with learners and get mentored by the Experts</p>
        </div>

        <div className="about-box">
          <h3 style={{color:'gold'}}><i><FontAwesomeIcon icon={faCheck} /></i>LIve Project</h3>
          <p>Get the opportunity to work on real-time projects that will provide you with deep experience Showcase your project experience and increase your chance of getting hired.</p>
        </div>

        <div className="about-box">
          <h3 style={{color:'rgb(61, 163, 21)'}}><i><FontAwesomeIcon icon={faCheck} /></i>Certification</h3>
          <p>Ready to clear global Certifications. Students appear for global Certifications and 100% of them clear it.</p>
        </div>

        <div className="about-box">
          <h3 style={{color:'rgb(12, 100, 201)'}}><i><FontAwesomeIcon icon={faCheck} /></i>Affordable Fees</h3>
          <p>At Learn UIX Academy the course fee is not only affordable, but you can also pay it in installments.</p>
        </div>

        <div className="about-box">
          <h3 style={{color:'rgb(201, 12, 169)'}}><i><FontAwesomeIcon icon={faCheck} /></i>Placement Support</h3>
          <p>Tied-up & signe with over 100+ small & medium sized companies to support you with opportunity to kick-start & advance your career.</p>
        </div>
      </div>
 

    

        {/* <div className='about-container'>

            <div className="about-box">
                <h3><i><FontAwesomeIcon icon={faCheck} /></i>
                Real-Time Experts as Trainers</h3>
                <p> You will learn from experts share their knowledge with learners and get mentored by the Experts</p>
            </div>

            <div className="about-box">
            <h3><i><FontAwesomeIcon icon={faCheck} /></i>LIve Project</h3>
            <p>Get the opportunity to work on real-time projects that will provide you with deep experience Showcase your project experience and increase your chance of getting hired</p>
            </div>

            <div className="about-box">
              <h3><i><FontAwesomeIcon icon={faCheck} /></i>Certification</h3>
              <p>Ready to clear global Certifications. Students appear for global Certifications and 100% of them clear it.</p>

            </div>
            <div className="about-box">
            <h3><i><FontAwesomeIcon icon={faCheck} /></i>Affordable Fees</h3>
            <p>At Learn UIX Academy the course fee is not only affordable, but you can also pay it in installments.</p>

            </div>
            <div className="about-box">
            <h3><i><FontAwesomeIcon icon={faCheck} /></i>Placement Support</h3>
            <p>Tied-up & signe with over 100+ small & medium sized companies to support you with opportunity to kick-start & advance your career</p>
            </div>
        </div> */}
    </div>
  )
}

export default About

