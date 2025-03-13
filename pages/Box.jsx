import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChalkboardUser, faBriefcase, faUserTie, faUserGroup} from '@fortawesome/free-solid-svg-icons'

function Box() {
  return (
    <div className="box">
    <div className='boxs'>
        <div className="box-container">
            <i><FontAwesomeIcon icon={faCalendarDays } /></i>
            <p>3 1/2 Months Course</p>
            <h4>Duration</h4>
        </div>

        <div className="box-container">
            <i><FontAwesomeIcon icon={faChalkboardUser}/></i>
            
            <p>Online & Offline Class</p>
            <h4>Format</h4>
        </div>

        <div className="box-container">
            <i><FontAwesomeIcon icon={faUserTie}/></i>
            <p>1x1 Mentor Support</p>
              <h4>Mentor</h4>
        </div>
        <div className="box-container">
            <i><FontAwesomeIcon icon={faUserGroup}/></i>
            <p>1x1 Mock Interview</p>
              <h4>Interview</h4>
        </div>

        <div className="box-container">
            <i><FontAwesomeIcon icon={faBriefcase}/></i>
            <p>Placement support</p>
            <h4>Placement</h4>
        </div>
        
        </div>
        </div>
  )
}

export default Box