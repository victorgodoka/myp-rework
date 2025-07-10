'use client'

import { useRef, useEffect, useState } from 'react';

interface BestSeller {
  id: number;
  name: string;
  collection: string;
  game: string;
  price: string;
  image: string;
  tags: string[];
}

export default function BestSellersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [bestSellers, setBestSellers] = useState<BestSeller[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch('/api/best-sellers');
        if (!response.ok) {
          throw new Error('Falha ao carregar os mais vendidos');
        }
        const data = await response.json();
        setBestSellers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - 250,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + 250,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Cartas Mais Vendidas
            </h2>
            <div className="flex space-x-2">
              <div className="p-2 rounded-full bg-white shadow-md animate-pulse">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
              <div className="p-2 rounded-full bg-white shadow-md animate-pulse">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden flex gap-4 w-full">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[200px]">
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
              Cartas Mais Vendidas
            </h2>
            <p className="text-red-600">Erro: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Cartas Mais Vendidas
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <i className="icon-[lucide--chevron-left] text-gray-600"></i>
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <i className="icon-[lucide--chevron-right] text-gray-600"></i>
            </button>
          </div>
        </div>
        
        <div ref={carouselRef} className="overflow-hidden flex gap-4 w-full scroll-smooth">
          {bestSellers.map((card) => (
            <div key={card.id} className="flex-shrink-0 w-[200px]">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative p-2 py-4 bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-48 object-contain rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-myp-secondary text-black px-2 py-1 rounded text-xs font-semibold">
                    {card.game}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                    {card.name}
                  </h3>
                  <p className="text-myp-primary font-bold text-lg">
                    {card.price}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                      <span key={tag + index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full mt-3 bg-myp-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 