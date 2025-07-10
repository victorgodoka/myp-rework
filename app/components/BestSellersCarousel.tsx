'use client'

import { useEffect, useState } from 'react';
import { Carousel, Card, CarouselSkeleton } from './ui';

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

  const handleBuyClick = (id: number) => {
    console.log('Buy clicked for card:', id);
    // Implement buy functionality
  };

  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked for card:', id);
    // Implement favorite functionality
  };

  if (loading) {
    return (
      <Carousel title="Cartas Mais Vendidas" showNavigation={false}>
        {[...Array(6)].map((_, index) => (
          <CarouselSkeleton key={index} />
        ))}
      </Carousel>
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
    <Carousel title="Cartas Mais Vendidas">
      {bestSellers.map((card) => (
        <div key={card.id} className="flex-shrink-0 w-[240px]">
          <Card
            {...card}
            variant="carousel"
            onBuyClick={handleBuyClick}
            onFavoriteClick={handleFavoriteClick}
          />
        </div>
      ))}
    </Carousel>
  );
} 