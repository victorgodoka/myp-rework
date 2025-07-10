export default function BannersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Destaques
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://placehold.co/400x250/05ccd4/ffffff?text=Yu-Gi-Oh!+Destaque"
              alt="Yu-Gi-Oh! Destaque"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Yu-Gi-Oh!</h3>
              <p className="text-gray-200">Cartas raras e colecionáveis</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://placehold.co/400x250/ffd626/000000?text=Pokémon+Especial"
              alt="Pokémon Especial"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Pokémon</h3>
              <p className="text-gray-200">Edições limitadas</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://placehold.co/400x250/8b5cf6/ffffff?text=Magic+The+Gathering"
              alt="Magic The Gathering"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Magic</h3>
              <p className="text-gray-200">Cartas lendárias</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://placehold.co/300x200/ef4444/ffffff?text=Digimon"
              alt="Digimon"
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white text-sm font-semibold">Digimon</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://placehold.co/300x200/10b981/ffffff?text=One+Piece"
              alt="One Piece"
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white text-sm font-semibold">One Piece</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://placehold.co/300x200/f59e0b/ffffff?text=Cardfight"
              alt="Cardfight"
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white text-sm font-semibold">Cardfight</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://placehold.co/300x200/8b5cf6/ffffff?text=Outros"
              alt="Outros"
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white text-sm font-semibold">Outros</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 