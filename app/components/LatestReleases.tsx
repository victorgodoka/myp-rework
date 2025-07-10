'use client';

import { useEffect, useState } from 'react';
import { H2, P, Card, CardSkeleton } from './ui';

interface CardData {
  id: number;
  name: string;
  game: string;
  price: string;
  image: string;
}

export default function LatestReleases() {
  const [latestReleases, setLatestReleases] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestReleases = async () => {
      try {
        const response = await fetch('/api/latest-releases');
        if (!response.ok) {
          throw new Error('Falha ao carregar os lançamentos');
        }
        const data = await response.json();
        setLatestReleases(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestReleases();
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <H2>Últimos Lançamentos</H2>
            <P className="max-w-2xl mx-auto">
              Fique por dentro das novidades mais recentes do mundo dos card games
            </P>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <H2>Últimos Lançamentos</H2>
            <p className="text-red-600">Erro: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <H2>Últimos Lançamentos</H2>
          <P className="max-w-2xl mx-auto">
            Fique por dentro das novidades mais recentes do mundo dos card games
          </P>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestReleases.map((card) => (
            <Card
              key={card.id}
              {...card}
              variant="featured"
              onBuyClick={handleBuyClick}
              onFavoriteClick={handleFavoriteClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 