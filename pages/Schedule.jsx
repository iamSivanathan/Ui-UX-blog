import React from 'react'
import Sch from './schedule.webp'
import Off from './offline.jpeg'
import On from './online.png'

function Schedule() {
  return (
    <section className="schedule">
        <h1>Course Schedule</h1>
        
        <div className="schedule-container">

            <img src={Sch} alt="" />

            <div className="class-box">
                <img src={Off} alt=""/>
                <h2>Offline Class</h2>
                <div className="fees-box">
                    <h1>Rs. 35,000</h1>
                    <h4>(inclusive of gst)</h4>
                </div>
                <p>No of Days - 120</p>
                <p>Timing - 10 a.m to 01 p.m (4 hours)</p>
                <p>Leave Days - Sat, Sun</p>
                <p> EMI Options Available</p>
                <button className='class-box-btn'>Apply now</button>

            </div>

            <div className="class-box">
                <img src={On} alt="" />
                <h2>Online Class</h2>

                <div className="fees-box">
                    <h1>Rs. 30,000</h1>
                    <h4>(inclusive of gst)</h4>
                </div>
                <p>No of Days - 130</p>
                <p>Timing - 10 a.m to 01 p.m (2 hours)</p>
                <p>Leave Days - Sat, Sun</p>
                <p> EMI Options Available</p>

                <button className='class-box-btn'>Apply now</button>
            </div>
            
        </div>
    </section>
)
}

export default Schedule