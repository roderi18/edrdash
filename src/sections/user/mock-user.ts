// --------------------------------------------------------
// MOCK DE MIEMBROS (USER) — Compatible con UserTableRow
// --------------------------------------------------------

export type UserProps = {
  id: string;
  name: string;
  company: string;     // cargo o posición dentro del destacamento
  role: string;        // sección, grupo o categoría
  isVerified: boolean;
  status: string;
  avatarUrl: string;
  destId: string;      // ← Destacamento al que pertenece
};

// ----------------------------------------------------------------------

export const USER_ROWS: UserProps[] = [
  {
    id: 'u-01',
    name: 'Juan Pérez',
    company: 'Explorador',
    role: 'Grupo A',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_1.jpg',
    destId: 'dest-01',
  },
  {
    id: 'u-02',
    name: 'María Gómez',
    company: 'Exploradora',
    role: 'Grupo A',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_2.jpg',
    destId: 'dest-01',
  },
  {
    id: 'u-03',
    name: 'Luis García',
    company: 'Explorador',
    role: 'Grupo B',
    isVerified: false,
    status: 'inactive',
    avatarUrl: '/assets/images/avatar/avatar_3.jpg',
    destId: 'dest-03',
  },
  {
    id: 'u-04',
    name: 'Ana López',
    company: 'Exploradora',
    role: 'Grupo C',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_4.jpg',
    destId: 'dest-04',
  },
  {
    id: 'u-05',
    name: 'Samuel Ortiz',
    company: 'Explorador',
    role: 'Grupo D',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_5.jpg',
    destId: 'dest-06',
  },
  {
    id: 'u-06',
    name: 'Laura Díaz',
    company: 'Exploradora',
    role: 'Grupo D',
    isVerified: true,
    status: 'active',
    avatarUrl: '/assets/images/avatar/avatar_6.jpg',
    destId: 'dest-06',
  },
];
