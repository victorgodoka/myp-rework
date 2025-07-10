'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SearchInput, Button } from './ui';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const cardGames = [
    'Yu-Gi-Oh!',
    'Pokémon',
    'Magic',
    'Digimon',
    'One Piece'
  ];

  const handleSearch = (value: string) => {
    console.log('Searching for:', value);
    // Implement search functionality
  };

  return (
    <header className="bg-white shadow-sm border-b relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-myp-primary transition-colors p-2"
              >
                <i className={`icon-[lucide--menu] text-xl ${isMenuOpen ? 'hidden' : 'block'}`}></i>
                <i className={`icon-[lucide--x] text-xl ${isMenuOpen ? 'block' : 'hidden'}`}></i>
              </button>
            </div>
            <Image
              src="/logo-mypcards.webp"
              alt="MYP Cards"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <SearchInput onSearch={handleSearch} />
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              Entrar
            </Button>
            <Button>
              Cadastrar
            </Button>
          </div>
        </div>
        
        <div className="hidden md:block border-t border-gray-200">
          <div className="flex items-center justify-between py-4">
            <div className="hidden md:flex items-center space-x-8">
              {cardGames.map((game) => (
                <a
                  key={game}
                  href="#"
                  className="text-gray-700 hover:text-myp-primary transition-colors font-medium"
                >
                  {game}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'left-0' : '-left-[100vw]'} transition-all duration-200 z-50 h-screen absolute top-16 w-full bg-white border-t border-gray-200`}>
        <div className="py-4 space-y-3">
          {cardGames.map((game) => (
            <a
              key={game}
              href="#"
              className="block text-gray-700 hover:text-myp-primary transition-colors font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {game}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
} 