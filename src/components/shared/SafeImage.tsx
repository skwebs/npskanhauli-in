"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

const SafeImage = ({ 
  src, 
  fallbackSrc = "/images/placeholders/facility-placeholder.svg", 
  alt, 
  ...props 
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  // Reset error state if src changes
  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
  }

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : src}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
      // Use blur placeholder if it's a large image and we have a blurDataURL
      placeholder={props.placeholder === 'blur' && !hasError ? 'blur' : 'empty'}
    />
  );
};

export default SafeImage;

