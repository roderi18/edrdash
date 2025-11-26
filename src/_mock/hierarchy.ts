// src/_mock/hierarchy.ts

// Puedes usar este tipo si quieres, si no igual funciona sin él.
export type NationalContact = {
  id: string;
  userId: string;
  role: string;
  phone: string;
  order: number; // 1 = mayor jerarquía
};

export const NATIONAL = [
  {
    id: 'national-1',
    name: 'Nivel Nacional Central',
    avatarUrl: '/assets/logos/logonacional.png',
    regionals: ['regional-1', 'regional-2'],

    leader: {
      userId: 'user-1',
      name: 'Juan Pérez',
      avatarUrl: '/assets/images/avatar/avatar_1.jpg',
      role: 'Coordinador Nacional',
      phone: '809-555-9001',
      email: 'juan.perez@exploradores.do',
    },

    contacts: [
      { id: 'n1-c1', userId: 'user-2', role: 'Subcoordinador Nacional', phone: '809-555-0002', order: 2 },
      { id: 'n1-c2', userId: 'user-3', role: 'Secretario Nacional', phone: '809-555-0003', order: 3 },
      { id: 'n1-c3', userId: 'user-4', role: 'Tesorero Nacional', phone: '809-555-0004', order: 4 },
      { id: 'n1-c4', userId: 'user-5', role: 'Vocal Nacional', phone: '809-555-0005', order: 5 },
    ],
  },

  {
    id: 'national-2',
    name: 'Nivel Nacional Este',
    avatarUrl: '/assets/logos/logonacional.png',
    regionals: ['regional-3'],

    leader: {
      userId: 'user-6',
      name: 'Luisa Ramírez',
      avatarUrl: '/assets/images/avatar/avatar_6.jpg',
      role: 'Coordinadora Nacional',
      phone: '809-555-9002',
      email: 'luisa.ramirez@exploradores.do',
    },

    contacts: [
      { id: 'n2-c1', userId: 'user-7', role: 'Subcoordinador Nacional', phone: '809-555-0012', order: 2 },
      { id: 'n2-c2', userId: 'user-8', role: 'Secretaria Nacional', phone: '809-555-0013', order: 3 },
      { id: 'n2-c3', userId: 'user-9', role: 'Tesorera Nacional', phone: '809-555-0014', order: 4 },
      { id: 'n2-c4', userId: 'user-10', role: 'Vocal Nacional', phone: '809-555-0015', order: 5 },
    ],
  },

  {
    id: 'national-3',
    name: 'Nivel Nacional Norte',
    avatarUrl: '/assets/logos/logonacional.png',
    regionals: ['regional-4', 'regional-5'],

    leader: {
      userId: 'user-3',
      name: 'Carlos Díaz',
      avatarUrl: '/assets/images/avatar/avatar_3.jpg',
      role: 'Coordinador Nacional',
      phone: '809-555-9003',
      email: 'carlos.diaz@exploradores.do',
    },

    contacts: [
      { id: 'n3-c2', userId: 'user-11', role: 'Subcoordinador Nacional', phone: '809-555-0022', order: 2 },
      { id: 'n3-c3', userId: 'user-4', role: 'Secretario Nacional', phone: '809-555-0023', order: 3 },
      { id: 'n3-c4', userId: 'user-6', role: 'Tesorero Nacional', phone: '809-555-0024', order: 4 },
      { id: 'n3-c5', userId: 'user-12', role: 'Vocal Nacional', phone: '809-555-0025', order: 5 },
    ],
  },

  {
    id: 'national-4',
    name: 'Nivel Nacional Oeste',
    avatarUrl: '/assets/logos/logonacional.png',
    regionals: ['regional-6'],

    leader: {
      userId: 'user-8',
      name: 'David Hernández',
      avatarUrl: '/assets/images/avatar/avatar_8.jpg',
      role: 'Coordinador Nacional',
      phone: '809-555-9004',
      email: 'david.hernandez@exploradores.do',
    },

    contacts: [
      { id: 'n4-c2', userId: 'user-9', role: 'Subcoordinador Nacional', phone: '809-555-0032', order: 2 },
      { id: 'n4-c3', userId: 'user-10', role: 'Secretaria Nacional', phone: '809-555-0033', order: 3 },
      { id: 'n4-c4', userId: 'user-11', role: 'Tesorero Nacional', phone: '809-555-0034', order: 4 },
      { id: 'n4-c5', userId: 'user-12', role: 'Vocal Nacional', phone: '809-555-0035', order: 5 },
    ],
  },
];


export const REGIONAL = [
  {
    id: 'regional-1',
    name: 'Región Central A',
    sectionals: ['sec-1', 'sec-2'],
    contacts: [
      { id: 'r1-c1', userId: 'user-1', order: 1, role: 'Director Regional', phone: '809-555-1111' },
      { id: 'r1-c2', userId: 'user-2', order: 2, role: 'Subdirector Regional', phone: '809-555-2222' },
      { id: 'r1-c3', userId: 'user-3', order: 3, role: 'Secretario', phone: '809-555-3333' },
      { id: 'r1-c4', userId: 'user-4', order: 4, role: 'Tesorero', phone: '809-555-4444' },
      { id: 'r1-c5', userId: 'user-5', order: 5, role: 'Asistente', phone: '809-555-5555' },
    ],
  },
  {
    id: 'regional-2',
    name: 'Región Central B',
    sectionals: ['sec-3'],
    contacts: [
      { id: 'r2-c1', userId: 'user-6', order: 1, role: 'Director Regional', phone: '809-555-1112' },
      { id: 'r2-c2', userId: 'user-7', order: 2, role: 'Subdirector Regional', phone: '809-555-2223' },
      { id: 'r2-c3', userId: 'user-8', order: 3, role: 'Secretario', phone: '809-555-3334' },
      { id: 'r2-c4', userId: 'user-9', order: 4, role: 'Tesorero', phone: '809-555-4445' },
      { id: 'r2-c5', userId: 'user-10', order: 5, role: 'Asistente', phone: '809-555-5556' },
    ],
  },
  {
    id: 'regional-3',
    name: 'Región Este A',
    sectionals: ['sec-4'],
    contacts: [
      { id: 'r3-c1', userId: 'user-11', order: 1, role: 'Director Regional', phone: '809-555-1113' },
      { id: 'r3-c2', userId: 'user-12', order: 2, role: 'Subdirector Regional', phone: '809-555-2224' },
    ],
  },
  {
    id: 'regional-4',
    name: 'Región Norte A',
    sectionals: ['sec-5', 'sec-6'],
    contacts: [],
  },
  {
    id: 'regional-5',
    name: 'Región Norte B',
    sectionals: ['sec-7'],
    contacts: [],
  },
  {
    id: 'regional-6',
    name: 'Región Oeste A',
    sectionals: ['sec-8'],
    contacts: [],
  },
];


export const SECTIONAL = [
  {
    id: 'sec-1',
    name: 'Seccional 1',
    dests: ['dest-1', 'dest-2'],
  },
  {
    id: 'sec-2',
    name: 'Seccional 2',
    dests: ['dest-3'],
  },
  {
    id: 'sec-3',
    name: 'Seccional 3',
    dests: ['dest-4'],
  },
  {
    id: 'sec-4',
    name: 'Seccional 4',
    dests: ['dest-5'],
  },
  {
    id: 'sec-5',
    name: 'Seccional 5',
    dests: ['dest-6', 'dest-7'],
  },
  {
    id: 'sec-6',
    name: 'Seccional 6',
    dests: ['dest-8'],
  },
  {
    id: 'sec-7',
    name: 'Seccional 7',
    dests: ['dest-9'],
  },
  {
    id: 'sec-8',
    name: 'Seccional 8',
    dests: ['dest-10'],
  },
];

export const DESTS = [
  {
    id: 'dest-1',
    name: 'Destacamento Alfa',
    users: ['user-1', 'user-2'],
  },
  {
    id: 'dest-2',
    name: 'Destacamento Beta',
    users: ['user-3'],
  },
  {
    id: 'dest-3',
    name: 'Destacamento Gamma',
    users: ['user-4'],
  },
  {
    id: 'dest-4',
    name: 'Destacamento Delta',
    users: ['user-5'],
  },
  {
    id: 'dest-5',
    name: 'Destacamento Omega',
    users: ['user-6', 'user-7'],
  },
  {
    id: 'dest-6',
    name: 'Destacamento Sigma',
    users: ['user-8'],
  },
  {
    id: 'dest-7',
    name: 'Destacamento Lambda',
    users: ['user-9'],
  },
  {
    id: 'dest-8',
    name: 'Destacamento Kappa',
    users: ['user-10'],
  },
  {
    id: 'dest-9',
    name: 'Destacamento Zeta',
    users: ['user-11'],
  },
  {
    id: 'dest-10',
    name: 'Destacamento Rho',
    users: ['user-12'],
  },
];

export const USERS = [
  {
    id: 'user-1',
    name: 'Juan Pérez',
    avatarUrl: '/assets/images/avatar/avatar_1.jpg',
  },
  {
    id: 'user-2',
    name: 'María Gómez',
    avatarUrl: '/assets/images/avatar/avatar_2.jpg',
  },
  {
    id: 'user-3',
    name: 'Carlos Díaz',
    avatarUrl: '/assets/images/avatar/avatar_3.jpg',
  },
  {
    id: 'user-4',
    name: 'Ana López',
    avatarUrl: '/assets/images/avatar/avatar_4.jpg',
  },
  {
    id: 'user-5',
    name: 'Pedro Ruiz',
    avatarUrl: '/assets/images/avatar/avatar_5.jpg',
  },
  {
    id: 'user-6',
    name: 'Luisa Ramírez',
    avatarUrl: '/assets/images/avatar/avatar_6.jpg',
  },
  {
    id: 'user-7',
    name: 'Rafael Torres',
    avatarUrl: '/assets/images/avatar/avatar_7.jpg',
  },
  {
    id: 'user-8',
    name: 'David Hernández',
    avatarUrl: '/assets/images/avatar/avatar_8.jpg',
  },
  {
    id: 'user-9',
    name: 'Diana Castillo',
    avatarUrl: '/assets/images/avatar/avatar_9.jpg',
  },
  {
    id: 'user-10',
    name: 'Paola Peña',
    avatarUrl: '/assets/images/avatar/avatar_10.jpg',
  },
  {
    id: 'user-11',
    name: 'José Núñez',
    avatarUrl: '/assets/images/avatar/avatar_11.jpg',
  },
  {
    id: 'user-12',
    name: 'Sofía Vargas',
    avatarUrl: '/assets/images/avatar/avatar_12.jpg',
  },
];
