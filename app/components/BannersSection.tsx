'use client';

import { useEffect, useState } from 'react';

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

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Destaques
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg animate-pulse">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md animate-pulse">
                <div className="w-full h-32 bg-gray-200"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destaques
            </h2>
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
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Destaques
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {banners.featured.map((banner) => (
            <div key={banner.id} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{banner.title}</h3>
                <p className="text-gray-200">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {banners.categories.map((category) => (
            <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white text-sm font-semibold">{category.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 