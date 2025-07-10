import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'banner' | 'carousel';
}

export function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 rounded";
  
  const variants = {
    text: "h-4 bg-gray-200 rounded",
    card: "bg-white rounded-lg shadow-md overflow-hidden",
    banner: "relative overflow-hidden rounded-xl shadow-lg",
    carousel: "flex-shrink-0 w-[200px]"
  };

  if (variant === 'card') {
    return (
      <div className={cn(variants.card, className)}>
        <div className="relative p-2 py-4 bg-gray-100">
          <div className="w-full h-48 bg-gray-200 rounded"></div>
          <div className="absolute top-2 right-2 bg-gray-300 px-2 py-1 rounded text-xs">
            <div className="w-12 h-3 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-6 bg-gray-200 rounded mb-3"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={cn(variants.banner, className)}>
        <div className="w-full h-64 bg-gray-200"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (variant === 'carousel') {
    return (
      <div className={cn(variants.carousel, className)}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="relative p-2 py-4 bg-gray-100">
            <div className="w-full h-48 bg-gray-200 rounded"></div>
            <div className="absolute top-2 right-2 bg-gray-300 px-2 py-1 rounded text-xs">
              <div className="w-12 h-3 bg-gray-400 rounded"></div>
            </div>
          </div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-3"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(baseClasses, variants.text, className)}></div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return <Skeleton variant="card" className={className} />;
}

export function BannerSkeleton({ className }: { className?: string }) {
  return <Skeleton variant="banner" className={className} />;
}

export function CarouselSkeleton({ className }: { className?: string }) {
  return <Skeleton variant="carousel" className={className} />;
} 