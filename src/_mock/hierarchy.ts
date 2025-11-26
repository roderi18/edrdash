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
    regionals: ['regional-1', 'regional-2'],
    contacts: [
      { id: 'n1-c1', userId: 'user-1', role: 'Coordinador nacional', phone: '+1 (809) 000-0001', order: 1 },
      { id: 'n1-c2', userId: 'user-2', role: 'Subcoordinador nacional', phone: '+1 (809) 000-0002', order: 2 },
      { id: 'n1-c3', userId: 'user-3', role: 'Secretario nacional',   phone: '+1 (809) 000-0003', order: 3 },
      { id: 'n1-c4', userId: 'user-4', role: 'Tesorero nacional',     phone: '+1 (809) 000-0004', order: 4 },
      { id: 'n1-c5', userId: 'user-5', role: 'Vocal nacional',        phone: '+1 (809) 000-0005', order: 5 },
    ] as NationalContact[],
  },
  {
    id: 'national-2',
    name: 'Nivel Nacional Este',
    regionals: ['regional-3'],
    contacts: [
      { id: 'n2-c1', userId: 'user-6',  role: 'Coordinador nacional', phone: '+1 (809) 000-0011', order: 1 },
      { id: 'n2-c2', userId: 'user-7',  role: 'Subcoordinador nacional', phone: '+1 (809) 000-0012', order: 2 },
      { id: 'n2-c3', userId: 'user-8',  role: 'Secretario nacional',   phone: '+1 (809) 000-0013', order: 3 },
      { id: 'n2-c4', userId: 'user-9',  role: 'Tesorero nacional',     phone: '+1 (809) 000-0014', order: 4 },
      { id: 'n2-c5', userId: 'user-10', role: 'Vocal nacional',        phone: '+1 (809) 000-0015', order: 5 },
    ] as NationalContact[],
  },
  {
    id: 'national-3',
    name: 'Nivel Nacional Norte',
    regionals: ['regional-4', 'regional-5'],
    contacts: [
      { id: 'n3-c1', userId: 'user-3',  role: 'Coordinador nacional',     phone: '+1 (809) 000-0021', order: 1 },
      { id: 'n3-c2', userId: 'user-11', role: 'Subcoordinador nacional',  phone: '+1 (809) 000-0022', order: 2 },
      { id: 'n3-c3', userId: 'user-4',  role: 'Secretario nacional',      phone: '+1 (809) 000-0023', order: 3 },
      { id: 'n3-c4', userId: 'user-6',  role: 'Tesorero nacional',        phone: '+1 (809) 000-0024', order: 4 },
      { id: 'n3-c5', userId: 'user-12', role: 'Vocal nacional',           phone: '+1 (809) 000-0025', order: 5 },
    ] as NationalContact[],
  },
  {
    id: 'national-4',
    name: 'Nivel Nacional Oeste',
    regionals: ['regional-6'],
    contacts: [
      { id: 'n4-c1', userId: 'user-8',  role: 'Coordinador nacional',    phone: '+1 (809) 000-0031', order: 1 },
      { id: 'n4-c2', userId: 'user-9',  role: 'Subcoordinador nacional', phone: '+1 (809) 000-0032', order: 2 },
      { id: 'n4-c3', userId: 'user-10', role: 'Secretario nacional',     phone: '+1 (809) 000-0033', order: 3 },
      { id: 'n4-c4', userId: 'user-11', role: 'Tesorero nacional',       phone: '+1 (809) 000-0034', order: 4 },
      { id: 'n4-c5', userId: 'user-12', role: 'Vocal nacional',          phone: '+1 (809) 000-0035', order: 5 },
    ] as NationalContact[],
  },
];

export const REGIONAL = [
  {
    id: 'regional-1',
    name: 'Región Central A',
    sectionals: ['sec-1', 'sec-2'],
  },
  {
    id: 'regional-2',
    name: 'Región Central B',
    sectionals: ['sec-3'],
  },
  {
    id: 'regional-3',
    name: 'Región Este A',
    sectionals: ['sec-4'],
  },
  {
    id: 'regional-4',
    name: 'Región Norte A',
    sectionals: ['sec-5', 'sec-6'],
  },
  {
    id: 'regional-5',
    name: 'Región Norte B',
    sectionals: ['sec-7'],
  },
  {
    id: 'regional-6',
    name: 'Región Oeste A',
    sectionals: ['sec-8'],
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
