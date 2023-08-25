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
    spaceBetween: 20, // Default space between slides
    slidesPerView: 1, // Default number of slides per view
  });

  useEffect(() => {
    // Function to update Swiper configuration based on screen width
    const updateSwiperConfig = () => {
      const screenWidth = window.innerWidth;
      const desiredAspectRatio = 16 / 9; // Aspect ratio of 1536 x 864

      // Calculate the number of slides per view based on the screen width and desired aspect ratio
      const calculatedSlidesPerView = Math.floor(screenWidth / (200 * desiredAspectRatio)); // Adjust 200 to your desired slide width

      const newConfig = {
        spaceBetween: calculatedSlidesPerView > 1 ? 20 : 0, // Adjust space between slides
        slidesPerView: calculatedSlidesPerView,
      };

      setSwiperConfig(newConfig);
    };

    // Add a window resize event listener to dynamically update the configuration
    window.addEventListener('resize', updateSwiperConfig);

    // Initial configuration based on the current screen width
    updateSwiperConfig();

    // Remove the event listener when the component unmounts
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
