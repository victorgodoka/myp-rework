import React from 'react';
import { cn } from '@/lib/utils';

interface BannerProps {
  id: number;
  title: string;
  description?: string;
  image: string;
  alt: string;
  variant?: 'featured' | 'category';
  className?: string;
  onClick?: () => void;
}

export default function Banner({
  id,
  title,
  description,
  image,
  alt,
  variant = 'featured',
  className,
  onClick
}: BannerProps) {
  const variants = {
    featured: {
      container: "relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer",
      image: "w-full h-64 object-cover",
      overlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6",
      title: "text-white text-xl font-bold",
      description: "text-gray-200"
    },
    category: {
      container: "relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer",
      image: "w-full h-32 object-cover",
      overlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4",
      title: "text-white text-sm font-semibold",
      description: "text-gray-200 text-xs"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div 
      className={cn(currentVariant.container, className)}
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className={currentVariant.image}
      />
      <div className={currentVariant.overlay}>
        <h3 className={currentVariant.title}>
          {title}
        </h3>
        {description && (
          <p className={currentVariant.description}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
} 