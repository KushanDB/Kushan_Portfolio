import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3C/svg%3E'
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${imageLoaded ? 'loaded' : 'loading'}`}
      loading={loading}
      style={{
        opacity: imageLoaded ? 1 : 0.5,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

export default OptimizedImage;
