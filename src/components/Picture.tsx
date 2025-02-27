import React, { useState } from 'react';

interface PictureProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export function Picture({ 
  src, 
  alt, 
  className = '', 
  onClick,
  objectFit = 'cover',
  objectPosition = 'center',
  width,
  height,
  aspectRatio
}: PictureProps) {
  const [imgError, setImgError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  // Handle Unsplash images differently from local images
  const isUnsplashImage = src.includes('unsplash.com');
  
  // For Unsplash images, we can request specific sizes and formats
  const webpSrc = isUnsplashImage
    ? `${src}&fm=webp&q=80&fit=crop&w=1200`
    : src;
    
  // Try JPG if WebP fails for local images
  const jpegSrc = isUnsplashImage
    ? `${src}&fm=jpg&q=80&fit=crop&w=1200`
    : src.replace('.webp', '.jpg');

  // Handle image load error
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    
    // Prevent infinite error loop
    if (retryCount >= 2) {
      console.error(`Failed to load image after retries: ${src}`);
      return;
    }
    
    // Try fallback source
    if (!imgError) {
      setImgError(true);
      setRetryCount(prev => prev + 1);
      img.src = jpegSrc;
    }
  };

  // Combine provided className with default styles
  const imageStyles = `
    ${className}
    max-w-full
    h-auto
    transition-all
    duration-300
  `.trim();

  const containerStyle = {
    aspectRatio: aspectRatio || 'auto',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <div style={containerStyle} className="overflow-hidden">
      <picture className="block w-full h-full">
        {!imgError && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={imgError ? jpegSrc : webpSrc}
          alt={alt}
          className={imageStyles}
          onClick={onClick}
          loading="lazy"
          style={{
            objectFit,
            objectPosition,
            width: '100%',
            height: '100%',
          }}
          onError={handleError}
        />
      </picture>
    </div>
  );
}