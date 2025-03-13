import React from 'react'
import Dis from './offer.png'

function Offer() {
  return (
    <div className='offer'>
      <div className="offer-box">
        <img src={Dis} alt="" />
        <div className="offer-content">
        <h1>offer valid for limited period!</h1>
        <p>Time to Apply! Enjoy 10% OFF on all our Online and Offline courses for a limited time.</p>
        </div>

      </div>

    </div>
  )
}

export default Offer

{/* <div className="offer-box">
        <img src={Dis} />
        <h1>offer valid for limited period!</h1>
        <p>Time to Apply! Enjoy 10% OFF on all our Online and Offline courses for a limited time.</p>
      </div> */}