import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Righteous } from '@next/font/google';
import Typography from '@mui/material/Typography';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const SwiperComponent = ({ searchPanels, headingText }) => {
  const [swiperConfig, setSwiperConfig] = useState({
    spaceBetween: 20,
    slidesPerView: 1,
  });
  
  const handleSlideChange = () => {
    console.log("hi");
    
    
    const updatedPanels = searchPanels.map((searchPanel) => ({
      ...searchPanel,
      isSlideChanging: "True",
    }));
    
  
    setSearchPanels(updatedPanels);
  };

  useEffect(() => {
    const updateSwiperConfig = () => {
      const screenWidth = window.innerWidth;
      const desiredAspectRatio = 16 / 9;

      const calculatedSlidesPerView = Math.floor(screenWidth / (200 * desiredAspectRatio));

      const newConfig = {
        spaceBetween: calculatedSlidesPerView > 1 ? 20 : 0,
        slidesPerView: calculatedSlidesPerView,
      };

      setSwiperConfig(newConfig);
    };

    window.addEventListener('resize', updateSwiperConfig);

    updateSwiperConfig();

    return () => {
      window.removeEventListener('resize', updateSwiperConfig);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '60%', paddingBottom: '50px', zIndex: 0 }}>
      <Typography variant="h4" style={{ textAlign: 'left', paddingBottom: '20px', ...righteous.style }}>
        {headingText}
      </Typography>
      <Swiper
        spaceBetween={swiperConfig.spaceBetween}
        slidesPerView={swiperConfig.slidesPerView}
        slidesPerColumn={1}
        onSlideChange={handleSlideChange()}
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
