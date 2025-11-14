'use client';

import Image from 'next/image';

const images = [
  '/uploads/Banner Web-01.jpg'
];

export default function ImageSlider() {
  return (
    <div className="w-full px-4 md:px-0 flex justify-center">
      <div className="flex flex-wrap gap-4 justify-center items-center w-full max-w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full max-w-full h-auto mx-auto"
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              width={1200}
              height={300}
              className="w-full h-auto object-contain"
              style={{ 
                objectFit: 'contain', 
                objectPosition: 'center',
                imageRendering: 'auto',
                WebkitImageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              sizes="100vw"
              quality={100}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
