import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface CardProps {
  id: number;
  name: string;
  game: string;
  price: string;
  image: string;
  tags?: string[];
  collection?: string;
  variant?: 'default' | 'featured' | 'carousel';
  className?: string;
  onBuyClick?: (id: number) => void;
  onFavoriteClick?: (id: number) => void;
}

export default function Card({
  id,
  name,
  game,
  price,
  image,
  tags = [],
  collection,
  variant = 'default',
  className,
  onBuyClick,
  onFavoriteClick
}: CardProps) {
  const variants = {
    default: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden",
    featured: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden",
    carousel: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
  };

  const imageClasses = {
    default: "w-full h-80 object-cover",
    featured: "w-full h-80 object-cover",
    carousel: "w-full h-48 object-contain rounded-xl"
  };

  const contentClasses = {
    default: "p-6",
    featured: "p-6",
    carousel: "p-4"
  };

  const handleBuyClick = () => {
    onBuyClick?.(id);
  };

  const handleFavoriteClick = () => {
    onFavoriteClick?.(id);
  };

  return (
    <div className={cn(variants[variant], className)}>
      <div className="relative">
        <img
          src={image}
          alt={name}
          className={imageClasses[variant]}
        />
        
        {/* Game badge */}
        <div className="absolute top-2 right-2 bg-myp-secondary text-black px-2 py-1 rounded text-xs font-semibold">
          {game}
        </div>
        
        {/* New badge for featured cards */}
        {variant === 'featured' && (
          <div className="absolute top-4 left-4 bg-myp-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
            Novo
          </div>
        )}
        
        {/* Collection badge */}
        {collection && (
          <div className="absolute top-4 left-4 bg-myp-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {collection}
          </div>
        )}
      </div>
      
      <div className={contentClasses[variant]}>
        <h3 className={cn(
          "font-semibold text-gray-900 mb-2 line-clamp-2",
          variant === 'carousel' ? "text-sm" : "text-lg"
        )}>
          {name}
        </h3>
        
        <p className="text-myp-primary font-bold text-lg mb-4">
          {price}
        </p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={`${tag}-${index}`} 
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button 
            onClick={handleBuyClick}
            className="flex-1"
            size={variant === 'carousel' ? 'sm' : 'md'}
          >
            Comprar
          </Button>
          
          <Button
            variant="outline"
            size={variant === 'carousel' ? 'sm' : 'md'}
            onClick={handleFavoriteClick}
            className="p-3"
          >
            <i className="icon-[lucide--heart] text-gray-600"></i>
          </Button>
        </div>
      </div>
    </div>
  );
} 