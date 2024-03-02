import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import './RecommendGame.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import { useSwiper } from 'swiper/react';
import { useSwiperSlide } from 'swiper/react';

import { Virtual } from 'swiper/modules';
import 'swiper/css/virtual';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';



const RecommendGame = () => {
  const [image, setImage] = useState('Apex.jfif');

  const Image1 = () => {
    return (
      <div className='Image-display'>
        <img src="Apex.jfif" alt="Apex Legends Game" />
      </div>
    );
  };

  const Image2 = () => {
    return (
      <div className='Image-display'>
        <img src="Overwatch2.jfif" alt="Overwatch 2 Game" />
      </div>
    );
  };


  const handleImageChange = (protp) => {
    const newImage = protp;
    setImage(newImage);
  };

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='container-imagechagne'>
          <nav>
            <div className='display'>
              {image === 'Apex.jfif' ? <Image1 /> : <Image2 />}
            </div>
            <div className='Choice'>
              <div className='choice-click' onClick={() => handleImageChange('Apex.jfif')}><img src="Apex.jfif" alt="Apex Legends Game" /></div>
              <div className='choice-click' onClick={() => handleImageChange('Overwatch2.jfif')}><img src="Overwatch2.jfif" alt="Overwatch 2 Game" /></div>
              <div className='choice-click' onClick={() => handleImageChange('Apex.jfif')}><img src="Apex.jfif" alt="Apex Legends Game" /></div>
              <div className='choice-click' onClick={() => handleImageChange('Overwatch2.jfif')}><img src="Overwatch2.jfif" alt="Overwatch 2 Game" /></div>
              {/* ... ส่วนที่เหลือของโค้ด ... */}
            </div>

          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='GameSlide' >
          <div className='GameImage'>
            <img src="./header.jpg" alt="Tom Clancy's Rainbow Six® Siege" />
          </div>
          <div className='GameContent'>
            <h2 className='GameTitle'>เกม Tom Clancy's Rainbow Six® Siege</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='GameSlide' >
          <div className='GameImage'>
            <img src="./Overwatch2.jfif" alt="Overwatch 2" />
          </div>
          <div className='GameContent'>
            <h2 className='GameTitle'>เกม Apex Legends</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./Apex.jfif" alt="Apex Legends" style={{ width: "100%", marginRight: "10px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className='GameSlide' >
          <div className='GameImage'>
            <img src="./Overwatch2.jfif" alt="Overwatch 2" />
          </div>
          <div className='GameContent'>
            <h2 className='GameTitle'>เกม Apex Legends</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./Apex.jfif" alt="Apex Legends" style={{ width: "100%", marginRight: "10px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className='GameSlide' >
          <div className='GameImage'>
            <img src="./Overwatch2.jfif" alt="Overwatch 2" />
          </div>
          <div className='GameContent'>
            <h2 className='GameTitle'>เกม Apex Legends</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>


  );
};

export default RecommendGame;
