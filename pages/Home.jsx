import React from 'react'
import Navbar from '../component/Navbar'
import Himg from '../component/home.jpeg'
function Home() {
  return (
    <div>
        <Navbar/>
        <div className='home'>
        <div className='home-box'>
        <div className='home-content'>
            <h2>Now you can Become a UI UX Designer in 4 Months and 5 Month Internship! </h2>
        </div>
        <div className='home-btn'>
            <button>Online</button>
            <button>Offline</button>
        </div>
        <div className='content2'>
            <p>Learning Paths to help you achieve your goals.
            </p>
            <p>Certificates to celebrate your accomplishments.</p>

            <button>Apply now</button>

        </div>
        </div>
        <div className='image'>
            <img src={Himg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Home