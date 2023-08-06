import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Righteous } from '@next/font/google';
import Typography from '@mui/material/Typography';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const SwiperComponent = ({ searchPanels, headingText }) => {
  const isMobile = window.innerWidth <= 600;

  return (
    <div style={{ position: 'relative', width: '60%', paddingBottom: '50px', zIndex: 0}}>
      <Typography variant="h4" style={{ textAlign: 'left', paddingBottom: '20px' }} className={righteous.className}>
        {headingText}
      </Typography>
      <Swiper
        spaceBetween={isMobile ? 100 : 5}
        slidesPerView={isMobile ? 2 : 5}
        slidesPerColumn={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: '160px' }}
      >
        {searchPanels.map((searchPanel, index) => (
          <SwiperSlide key={index}>{searchPanel}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;