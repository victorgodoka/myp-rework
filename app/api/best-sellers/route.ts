import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json(bestSellers);
} 