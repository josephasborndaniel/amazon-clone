import React, { useState, useEffect } from 'react';

const BannerCarousel = () => {
  const banners = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/video/bxgy/2X_Decor_GBF_PC_3000X1200._CB794524354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_common_12th._CB555377188_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? banners.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === banners.length - 1 ? 0 : index + 1);
  };

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const arrowButtonStyle =
    "absolute top-1/2 transform -translate-y-1/2 bg-black/40 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/60 transition";

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-top bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${banners[index]})` }}
      />

      {/* Left Arrow */}
      <button onClick={prevSlide} className={`${arrowButtonStyle} left-4`}>
        ‹
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} className={`${arrowButtonStyle} right-4`}>
        ›
      </button>
    </div>
  );
};

export default BannerCarousel;
