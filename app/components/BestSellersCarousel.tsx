'use client'

import { useRef } from 'react';

export default function BestSellersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const bestSellers = [
    {
      id: 1,
      name: 'Blue-Eyes White Dragon',
      game: 'Yu-Gi-Oh!',
      price: 'R$ 150,00',
      image: 'https://placehold.co/200x280/05ccd4/ffffff?text=Blue-Eyes'
    },
    {
      id: 2,
      name: 'Charizard GX',
      game: 'Pokémon',
      price: 'R$ 200,00',
      image: 'https://placehold.co/200x280/ffd626/000000?text=Charizard'
    },
    {
      id: 3,
      name: 'Black Lotus',
      game: 'Magic',
      price: 'R$ 500,00',
      image: 'https://placehold.co/200x280/8b5cf6/ffffff?text=Black+Lotus'
    },
    {
      id: 4,
      name: 'Dark Magician',
      game: 'Yu-Gi-Oh!',
      price: 'R$ 80,00',
      image: 'https://placehold.co/200x280/ef4444/ffffff?text=Dark+Magician'
    },
    {
      id: 5,
      name: 'Pikachu VMAX',
      game: 'Pokémon',
      price: 'R$ 120,00',
      image: 'https://placehold.co/200x280/10b981/ffffff?text=Pikachu'
    },
    {
      id: 6,
      name: 'Lightning Bolt',
      game: 'Magic',
      price: 'R$ 45,00',
      image: 'https://placehold.co/200x280/f59e0b/ffffff?text=Lightning'
    }
  ];

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
                    className="w-full h-48 object-contain rounded"
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