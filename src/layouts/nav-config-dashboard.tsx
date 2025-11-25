import React from 'react';

import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} />
);

// Tipo opcional para los hijos del menú
export type NavItemChild = {
  title: string;
  path: string;
};

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  children?: NavItemChild[]; // 👈 aquí está la magia del desplegable
};

export const navData: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
    children: [
      { title: 'Nacional', path: '/national' },
      { title: 'Regional', path: '/regional' },
      { title: 'Seccional', path: '/sectional' },
      { title: 'Destacamentos', path: '/dest' },
      { title: 'Miembros', path: '/user' }, // usa la misma ruta actual de User
    ],
  },
  {
    title: 'Product',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: icon('ic-blog'),
  },
];
