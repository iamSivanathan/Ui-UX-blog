import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.webp'

function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>

        <h3 className='heading'>Learn <span>UIX</span></h3>

        <ul className='navbar'>
            <a><Link>Call us</Link></a>
            <a><Link to='/apply'>Apply Now</Link></a>
        </ul>
    </nav>
  )
}

export default Navbar