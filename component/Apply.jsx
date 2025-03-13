import React from 'react'
import './apply.css';

function Apply() {
  return (
    <div className='apply'>
        <div className="apply-box">
            <h2>Apply Now</h2>
            
            <div className="inputs">
             <input type="text" placeholder='Full Name'/>
                <input type="mail" placeholder='E-mail'/>
                <input type="text" placeholder='91+'/>

                <select name="class-type" id="class-type">
                 <option value="">Select a class type</option>
                 <option value="offline">Offline Class</option>
                 <option value="online">Online Class</option>
                </select>

                <input className='sub-btn' type="button" value="submit" />

            </div>

        </div>
    </div>
        
  )
}

export default Apply

