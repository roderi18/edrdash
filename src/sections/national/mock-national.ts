export type NationalRegion = {
  id: string;
  name: string;
  leader: string;
  section: string;
  isVerified: boolean;
  status: string;
  avatarUrl: string;
  seccionales: string[]; // ← IDs de seccionales
};

export const NATIONAL_ROWS: NationalRegion[] = [
  {
    id: 'central',
    name: 'Región Central',
    leader: 'Luis Moreno',
    section: 'Sección Norte',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_1.jpg',
    seccionales: ['sec-01', 'sec-02'],
  },
  {
    id: 'este',
    name: 'Región Este',
    leader: 'Marcos Jiménez',
    section: 'Sección 2',
    isVerified: false,
    status: 'inactive',
    avatarUrl: '/assets/images/avatar/avatar_2.jpg',
    seccionales: ['sec-03'],
  },
  {
    id: 'norte',
    name: 'Región Norte',
    leader: 'Ana Castillo',
    section: 'Sección Principal',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_3.jpg',
    seccionales: ['sec-04', 'sec-05'],
  },
  {
    id: 'oeste',
    name: 'Región Oeste',
    leader: 'Luis Castillo',
    section: 'Sección Principal',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_4.jpg',
    seccionales: ['sec-06'],
  },
];
