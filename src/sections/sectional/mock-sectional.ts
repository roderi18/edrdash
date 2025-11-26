export type SectionalDest = {
  id: string;
  name: string;
  sectionId: string; // ← A qué seccional pertenece
  leader: string;
  status: string;
  members: string[]; // ← IDs de miembros
};

export const SECTIONAL_ROWS: SectionalDest[] = [
  { id: 'dest-01', name: 'Destacamento Esperanza', sectionId: 'sec-01', leader: 'José Piña', status: 'active', members: ['m-01','m-02'] },
  { id: 'dest-02', name: 'Destacamento Fe', sectionId: 'sec-01', leader: 'Samuel Diaz', status: 'inactive', members: [] },
  { id: 'dest-03', name: 'Destacamento Luz', sectionId: 'sec-02', leader: 'Raquel Gómez', status: 'active', members: ['m-03'] },
  { id: 'dest-04', name: 'Destacamento Norte 1', sectionId: 'sec-04', leader: 'Carlos Reyes', status: 'active', members: ['m-04'] },
  { id: 'dest-05', name: 'Destacamento Norte 2', sectionId: 'sec-05', leader: 'Ana Pérez', status: 'active', members: [] },
  { id: 'dest-06', name: 'Destacamento Norte 3', sectionId: 'sec-05', leader: 'Marcos de León', status: 'active', members: ['m-05','m-06'] },
];
