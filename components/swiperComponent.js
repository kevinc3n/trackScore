import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Righteous } from '@next/font/google';
import Typography from '@mui/material/Typography';
import SearchPanel from '../components/search_panel.jsx';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const SwiperComponent = ({ searchPanels, headingText }) => {
  const [swiperConfig, setSwiperConfig] = useState({
    spaceBetween: 20,
    slidesPerView: 1,
  });

  const [updatedSearchPanels, setUpdatedSearchPanels] = useState(searchPanels);

  const handleSlideChange = () => {
    console.log("detected slide change and it handling");
  
    const updatedPanels = updatedSearchPanels.map((searchPanel) => ({
      ...searchPanel,
      props: {
        ...searchPanel.props,
        isSlideChanging: true,
      },
    }));
  
    setUpdatedSearchPanels(updatedPanels);
  
    setTimeout(() => {
      const resetPanels = updatedPanels.map((searchPanel) => ({
        ...searchPanel,
        props: {
          ...searchPanel.props,
          isSlideChanging: false,
        },
      }));
  
      setUpdatedSearchPanels(resetPanels);
    }, 100);
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
        onSlideChange={() => handleSlideChange()}
        style={{ height: '160px' }}
      >
        {updatedSearchPanels.map((searchPanel, index) => (
          <SwiperSlide key={index}>
            <SearchPanel
              id={searchPanel.props.id}
              imageUrl={searchPanel.props.imageUrl}
              tooltipText={searchPanel.props.tooltipText}
              artist={searchPanel.props.artist}
              year={searchPanel.props.year}
              type={searchPanel.props.type}
              isSlideChanging={searchPanel.props.isSlideChanging}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
