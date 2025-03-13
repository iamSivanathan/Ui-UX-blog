import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-icons">

            <i><FontAwesomeIcon icon={faInstagram}/> </i>
            <i><FontAwesomeIcon icon={faFacebook}/> </i>
            <i><FontAwesomeIcon icon={faTwitter}/> </i> 

        </div>

        <div class="footer-content">
            
                <a>contact</a>

                <a>faq</a>
           
                <a>privacy policy</a>
        </div>
    </div>
  )
}

export default Footer