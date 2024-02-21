import React, { useState } from 'react';
import Slider from 'react-slick';
import './sildImg.css'

const SlidImg = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  return (
    <div className='Sild'>
      <Slider {...settings}>
        <div>
          <img src="Apex.jfif" alt="Image1" />
        </div>
        <div>
          <img src="Callofduty.jfif" alt="Image2" />
        </div>
      </Slider>
    </div>
  );
};

export default SlidImg;
