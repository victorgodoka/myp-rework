'use client';

import React, { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface CarouselProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showNavigation?: boolean;
  scrollAmount?: number;
}

export default function Carousel({
  children,
  title,
  className,
  showNavigation = true,
  scrollAmount = 250
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn("py-16 bg-gray-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>
            {showNavigation && (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollLeft}
                  className="p-2 rounded-full"
                >
                  <i className="icon-[lucide--chevron-left] text-gray-600"></i>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollRight}
                  className="p-2 rounded-full"
                >
                  <i className="icon-[lucide--chevron-right] text-gray-600"></i>
                </Button>
              </div>
            )}
          </div>
        )}
        
        <div 
          ref={carouselRef} 
          className="overflow-hidden flex gap-4 w-full scroll-smooth"
        >
          {children}
        </div>
      </div>
    </div>
  );
} 