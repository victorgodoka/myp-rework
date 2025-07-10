export default function LatestReleases() {
  const latestReleases = [
    {
      id: 1,
      name: 'Cyber Dragon Infinity',
      game: 'Yu-Gi-Oh!',
      price: 'R$ 180,00',
      image: 'https://placehold.co/300x400/05ccd4/ffffff?text=Cyber+Dragon'
    },
    {
      id: 2,
      name: 'Mewtwo V',
      game: 'Pokémon',
      price: 'R$ 95,00',
      image: 'https://placehold.co/300x400/ffd626/000000?text=Mewtwo'
    },
    {
      id: 3,
      name: 'Force of Will',
      game: 'Magic',
      price: 'R$ 75,00',
      image: 'https://placehold.co/300x400/8b5cf6/ffffff?text=Force+of+Will'
    },
    {
      id: 4,
      name: 'Agumon',
      game: 'Digimon',
      price: 'R$ 45,00',
      image: 'https://placehold.co/300x400/ef4444/ffffff?text=Agumon'
    }
  ];

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