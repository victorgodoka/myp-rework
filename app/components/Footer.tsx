export default function Footer() {
  const cardGames = [
    'Yu-Gi-Oh!',
    'Pokémon',
    'Magic: The Gathering',
    'Digimon',
    'One Piece',
    'Cardfight!! Vanguard',
    'Dragon Ball Super'
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'i-mdi-instagram', url: '#' },
    { name: 'Facebook', icon: 'i-mdi-facebook', url: '#' },
    { name: 'Twitter', icon: 'i-mdi-twitter', url: '#' },
    { name: 'YouTube', icon: 'i-mdi-youtube', url: '#' }
  ];

  const contactLinks = [
    'Nossos Planos',
    'Conheça nossos Lojistas',
    'Não achou uma carta, clique aqui',
    'Quero ser parceiro MYP',
    'Material Promocional'
  ];

  const partners = [
    'Wizards of the Coast Inc ©',
    'Konami Digital Entertainment ©',
    'Pokémon Company International ©',
    'Copag ©',
    'Fantasy Flight Publishing ©',
    'Bushiroad ©',
    'Disney ©',
    'Lucasfilm Ltd. ©'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-myp-secondary">Marketplace</h3>
            <ul className="space-y-2">
              {cardGames.map((game) => (
                <li key={game}>
                  <a href="#" className="text-gray-300 hover:text-myp-primary transition-colors">
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-myp-secondary">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-300 hover:text-myp-primary transition-colors"
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-myp-secondary">Contato</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-myp-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-myp-secondary">Parceiros</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <ul className="space-y-1 text-xs text-gray-400">
                {partners.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="/logo-mypcards.webp"
                alt="MYP Cards"
                className="h-8 w-auto"
              />
              <span className="text-gray-400">© 2024 MYP Cards. Todos os direitos reservados.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-myp-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-myp-primary transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 