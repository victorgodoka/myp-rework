import { NextResponse } from 'next/server';

export async function GET() {
  const bestSellers = [
    {
      id: 1,
      name: 'Blue-Eyes White Dragon',
      collection: '',
      tags: ['Arte Alternativa', 'Secret Rare'],
      game: 'Yu-Gi-Oh!',
      price: 'R$ 150,00',
      image: '/images/blueyes.png'
    },
    {
      id: 2,
      name: 'Charizard GX',
      collection: '',
      tags: ['Full Art'],
      game: 'Pokémon',
      price: 'R$ 200,00',
      image: '/images/charizard-gx-sm111.jpg'
    },
    {
      id: 3,
      name: 'Black Lotus',
      collection: '',
      tags: [],
      game: 'Magic',
      price: 'R$ 500,00',
      image: '/images/blacklotus.jpg'
    },
    {
      id: 4,
      name: 'Dark Magician',
      collection: '',
      tags: [],
      game: 'Yu-Gi-Oh!',
      price: 'R$ 80,00',
      image: '/images/darkmagician.jpg'
    },
    {
      id: 5,
      name: 'Pikachu VMAX',
      collection: '',
      tags: ['Full Art'],
      game: 'Pokémon',
      price: 'R$ 120,00',
      image: '/images/pokemon_viv_044_pt.webp'
    },
    {
      id: 6,
      name: 'Lightning Bolt',
      collection: '',
      tags: ['Foil'],
      game: 'Magic',
      price: 'R$ 45,00',
      image: '/images/LightningBolt.jpg'
    }
  ];

  return NextResponse.json(bestSellers);
} 