import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json(latestReleases);
} 