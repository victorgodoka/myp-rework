import { NextResponse } from 'next/server';

export async function GET() {
  const banners = {
    featured: [
      {
        id: 1,
        title: 'Yu-Gi-Oh!',
        description: 'Cartas raras e colecionáveis',
        image: 'https://placehold.co/400x250/05ccd4/ffffff?text=Yu-Gi-Oh!+Destaque',
        alt: 'Yu-Gi-Oh! Destaque'
      },
      {
        id: 2,
        title: 'Pokémon',
        description: 'Edições limitadas',
        image: 'https://placehold.co/400x250/ffd626/000000?text=Pokémon+Especial',
        alt: 'Pokémon Especial'
      },
      {
        id: 3,
        title: 'Magic',
        description: 'Cartas lendárias',
        image: 'https://placehold.co/400x250/8b5cf6/ffffff?text=Magic+The+Gathering',
        alt: 'Magic The Gathering'
      }
    ],
    categories: [
      {
        id: 1,
        title: 'Digimon',
        image: 'https://placehold.co/300x200/ef4444/ffffff?text=Digimon',
        alt: 'Digimon'
      },
      {
        id: 2,
        title: 'One Piece',
        image: 'https://placehold.co/300x200/10b981/ffffff?text=One+Piece',
        alt: 'One Piece'
      },
      {
        id: 3,
        title: 'Cardfight',
        image: 'https://placehold.co/300x200/f59e0b/ffffff?text=Cardfight',
        alt: 'Cardfight'
      },
      {
        id: 4,
        title: 'Outros',
        image: 'https://placehold.co/300x200/8b5cf6/ffffff?text=Outros',
        alt: 'Outros'
      }
    ]
  };

  return NextResponse.json(banners);
} 