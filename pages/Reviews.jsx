import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faUser} from '@fortawesome/free-solid-svg-icons'

function Reviews() {
  return (
<div className='reviews'>

  <h1>Reviews</h1>

<div className="reviews-container">

  <div className="reviews-box">
    <i className='star'><FontAwesomeIcon icon={faStar}/></i>
    <h1>Review from our Students</h1>
  </div>

  <div className="reviews-box">
    <h3><FontAwesomeIcon className='designer-icon' icon={faUser}/> UI UX designer</h3>
    <p>Great coure for beginners. Covers all the basics and provides practical exercises.The course was well-structured and covered all aspects of UX design, from user research to prototyping. The instructor id knoledgeable and provides clear explanations.</p>
    <i><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
  </div>

  <div className="reviews-box">
  <h3><FontAwesomeIcon className='designer-icon' icon={faUser}/> UI UX designer</h3>    <p>"I took this course to learn more about UX design and how to apply it to my work.  The instructor was knowledgeable and provided clear explanations. The course also included practical exercises, which helped me to apply what I learned. Overall, I highly recommend this course to anyone interested in UX design."</p>
    <i><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
  </div>

  <div className="reviews-box">
  <h3><FontAwesomeIcon className='designer-icon' icon={faUser}/> UI UX designer</h3>  <p>"I enrolled in this specialization to improve my UI/UX design skills. The specialization consisted of four courses, each covering a different aspect of UI/UX design. The courses were well-taught and included interactive assignments, which helped me to practice what I learned.</p>
  <i><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
  </div>

  <div className="reviews-box">
  <h3><FontAwesomeIcon className='designer-icon' icon={faUser}/> UI UX designer</h3>  <p>"I was blown away by the depth of knowledge shared in this course. The instructor's experience in UX design shines through in every lesson. I appreciated the practical exercises and real-world examples that helped reinforce the concepts.  I've already seen improvements in my UX design work thanks to this course."</p>
  <i><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
  </div>

  <div className="reviews-box">
  <h3><FontAwesomeIcon className='designer-icon' icon={faUser}/> UI UX designer</h3>  <p>"I loved this course! The instructor was engaging and knowledgeable, and the course materials were well-organized and easy to follow. I appreciated the focus on human-centered design and the importance of user research. The assignments were challenging but rewarding, and the feedback from peers was helpful."</p>
  <i><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
  </div>
</div>  
</div>
)
}

export default Reviews