// src/sections/national/mock-national-sections.ts

export type SectionRow = {
  id: string;
  name: string;        // Sección
  leader: string;      // Líder
  destacamento: string;
  membership2026: boolean; // se mapea a isVerified
  status: 'active' | 'banned';
  avatarUrl: string;
};

// 4 grupos nacionales → cada uno con seccionales dummy
export const SECTION_ROWS_BY_REGION: Record<string, SectionRow[]> = {
  central: [
    {
      id: 'sec-01',
      name: 'Seccional Central 1',
      leader: 'Juan Pérez',
      destacamento: 'UI Designer',
      membership2026: true,
      status: 'active',
      avatarUrl: '/assets/images/avatar/avatar_1.jpg',
    },
    {
      id: 'sec-02',
      name: 'Seccional Central 2',
      leader: 'María López',
      destacamento: 'UI Designer',
      membership2026: false,
      status: 'banned',
      avatarUrl: '/assets/images/avatar/avatar_2.jpg',
    },
  ],
  este: [
    {
      id: 'sec-03',
      name: 'Seccional Este 1',
      leader: 'Carlos Gómez',
      destacamento: 'UI Designer',
      membership2026: true,
      status: 'active',
      avatarUrl: '/assets/images/avatar/avatar_3.jpg',
    },
  ],
  norte: [
    {
      id: 'sec-04',
      name: 'Seccional Norte 1',
      leader: 'Ana Castillo',
      destacamento: 'UI Designer',
      membership2026: true,
      status: 'active',
      avatarUrl: '/assets/images/avatar/avatar_4.jpg',
    },
    {
      id: 'sec-05',
      name: 'Seccional Norte 2',
      leader: 'Pedro Díaz',
      destacamento: 'Leader',
      membership2026: true,
      status: 'banned',
      avatarUrl: '/assets/images/avatar/avatar_5.jpg',
    },
  ],
  oeste: [
    {
      id: 'sec-06',
      name: 'Seccional Oeste 1',
      leader: 'Luis Castillo',
      destacamento: 'UI Designer',
      membership2026: true,
      status: 'active',
      avatarUrl: '/assets/images/avatar/avatar_6.jpg',
    },
  ],
};
