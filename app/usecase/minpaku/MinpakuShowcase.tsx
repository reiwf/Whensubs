import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/chatshowcase1.png', alt: 'Image 1' },
  { src: '/chatshowcase2.png', alt: 'Image 2' },
  { src: '/chatshowcase3.png', alt: 'Image 3' },
];

const DynamicImageGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      if (!isHovered) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
  
        return () => clearInterval(interval); // Cleanup on unmount
      }
    }, [isHovered]);
  
    return (
      <div 
        className="image-slider-container border shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="image-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="image"
            />
          ))}
        </div>
      </div>
  );
};

export default DynamicImageGrid;