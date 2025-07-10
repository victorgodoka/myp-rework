'use client';

import { useEffect, useState } from 'react';
import { Typography, Banner, BannerSkeleton } from './ui';

interface FeaturedBanner {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CategoryBanner {
  id: number;
  title: string;
  image: string;
  alt: string;
}

interface BannersData {
  featured: FeaturedBanner[];
  categories: CategoryBanner[];
}

export default function BannersSection() {
  const [banners, setBanners] = useState<BannersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('/api/banners');
        if (!response.ok) {
          throw new Error('Falha ao carregar os banners');
        }
        const data = await response.json();
        setBanners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const handleBannerClick = (bannerId: number) => {
    console.log('Banner clicked:', bannerId);
    // Implement banner click functionality
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Typography variant="h2" className="text-center mb-12">Destaques</Typography>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {[...Array(3)].map((_, index) => (
              <BannerSkeleton key={index} />
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <BannerSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Typography variant="h2">Destaques</Typography>
            <p className="text-red-600">Erro: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!banners) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography variant="h2" className="text-center mb-12">Destaques</Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {banners.featured.map((banner) => (
            <Banner
              key={banner.id}
              {...banner}
              variant="featured"
              onClick={() => handleBannerClick(banner.id)}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {banners.categories.map((category) => (
            <Banner
              key={category.id}
              {...category}
              variant="category"
              onClick={() => handleBannerClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 