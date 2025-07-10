export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            O Maior
            <span className="text-myp-secondary block">Marketplace</span>
            de Card Games
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Encontre as cartas mais raras e desejadas. Conectamos jogadores apaixonados com os melhores vendedores do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-myp-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Explorar Cartas
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Como Funciona
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 