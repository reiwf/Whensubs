import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/chatshowcase1.png', alt: 'Image 1', width: 360, height: 600 },
  { src: '/chatshowcase2.png', alt: 'Image 2', width: 360, height: 600 },
  { src: '/chatshowcase3.png', alt: 'Image 3', width: 360, height: 600 },
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
          <div key={index} className="image">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
      </div>
  );
};

export default DynamicImageGrid;