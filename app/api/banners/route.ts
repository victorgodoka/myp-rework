import { NextResponse } from 'next/server';

export async function GET() {
  const banners = {
    featured: [
      {
        id: 1,
        title: 'Yu-Gi-Oh!',
        description: 'Cartas raras e colecionáveis',
        image: '/images/Yugihocollection2.jpg',
        alt: 'Yu-Gi-Oh! Destaque'
      },
      {
        id: 2,
        title: 'Pokémon',
        description: 'Edições limitadas',
        image: '/images/pokemontcg.webp',
        alt: 'Pokémon Especial'
      },
      {
        id: 3,
        title: 'Magic',
        description: 'Cartas lendárias',
        image: '/images/mtg.png',
        alt: 'Magic The Gathering'
      }
    ],
    categories: [
      {
        id: 1,
        title: 'Digimon',
        image: '/images/digimon.jpg',
        alt: 'Digimon'
      },
      {
        id: 2,
        title: 'One Piece',
        image: '/images/onepiece.png',
        alt: 'One Piece'
      },
      {
        id: 3,
        title: 'Cardfight!! Vanguard',
        image: '/images/vanguard.png',
        alt: 'Cardfight'
      },
      {
        id: 4,
        title: 'Outros',
        image: '/images/outros.jpg',
        alt: 'Outros'
      }
    ]
  };

  return NextResponse.json(banners);
} 