import React from 'react'
import Slider from 'react-slick';


import { Card } from 'react-bootstrap';
function MyCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        
      };
  return (
    <Slider {...settings} className="slider-container">
         

          <Card.Img src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_1_h11aos" />
          <Card.Img src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_2_x0hgqc" />
          <Card.Img src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_1_h11aos" />
      
        
    </Slider>
  )
}

export default MyCarousel