import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import L1 from './amazon.webp'
import L2 from './dell.png'
import L3 from './tcs-logo.png'
import L4 from './zoho.webp'
import L5 from './hcl.jpeg'
import L6 from './deolitte.webp'
import L7 from './tm.png'
import L8 from './virtusa.png'
import L9 from './wipro.png'


function Companies() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <section className='companies'>

    <div className="companies-heading">
        <h1>Our Academy Students Placed Companies</h1>
    </div>

    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={L1} alt="" />
        </div>
        <div>
          <img src={L2} alt="" />
        </div>
        <div>
          <img src={L3} alt="" />
        </div>
        <div>
          <img src={L4} alt="" />
        </div>
        <div>
          <img src={L5} alt="" />
        </div>
         <div>
          <img src={L6} alt="" />
         </div>
        <div>
          <img src={L7} alt="" />
        </div>
        <div>
          <img src={L8} alt="" />
        </div> 
        <div>
          <img src={L9} alt="" />
        </div> 
      </Slider>
    </div>  

    </section>
  )
}

export default Companies