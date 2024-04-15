import React from 'react'
import Slider from 'react-slick';


import { Card } from 'react-bootstrap';
function MyCarousel({land}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        
      };
  return (
    <Slider {...settings} className="slider-container">
         {
            land.land_media.map((img)=>(<Card.Img src={img.image}   style={{ width: '100%', height: '20rem' }}/>))
         }

          
          {/* <Card.Img src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_2_x0hgqc" />
          <Card.Img src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_1_h11aos" /> */}
      
        
    </Slider>
  )
}

export default MyCarousel