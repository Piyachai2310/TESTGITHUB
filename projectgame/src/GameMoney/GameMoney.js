import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import './GameMoney.css'; // เปลี่ยนตรงนี้
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

const GameMoney = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='Containers'>
          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='Containers'>
          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>

          <div className='GameMoneySlide' > {/* เปลี่ยนชื่อคลาสนี้ */}
            <div className='GameMoneyImage'>
              <img src="./Overwatch2.jfif" alt="Overwatch 2" />
            </div>
            <div className='GameMoneyContent'>
              <p className='GameTitle'>เกม Apex Legends</p>
            </div>
          </div>
            
        </div>
      </SwiperSlide>
      </Swiper>
  );
};

export default GameMoney;
