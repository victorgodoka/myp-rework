'use client';

import { useEffect, useState } from 'react';

interface Card {
  id: number;
  name: string;
  game: string;
  price: string;
  image: string;
}

export default function LatestReleases() {
  const [latestReleases, setLatestReleases] = useState<Card[]>([]);
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

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Últimos Lançamentos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das novidades mais recentes do mundo dos card games
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-80 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="flex space-x-3">
                    <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Últimos Lançamentos
            </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Últimos Lançamentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades mais recentes do mundo dos card games
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestReleases.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-myp-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Novo
                </div>
                <div className="absolute top-4 right-4 bg-myp-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {card.game}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {card.name}
                </h3>
                <p className="text-myp-primary font-bold text-2xl mb-4">
                  {card.price}
                </p>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-myp-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Comprar
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <i className="icon-[lucide--heart] text-gray-600"></i>
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