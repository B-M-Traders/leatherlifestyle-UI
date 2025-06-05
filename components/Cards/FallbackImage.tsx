"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const fallbackImagePath = "/placeholder2.jpg";

const FallbackImage = ({ fallback = fallbackImagePath, alt, src, ...props }: any) => {
  const [error, setError] = useState<any>(null);
  useEffect(() => setError(null), []);

  return (
    <Image
      src={error ? fallbackImagePath : src}
      alt={alt}
      onError={setError}
      {...props}
    />
  );
};

export default FallbackImage;