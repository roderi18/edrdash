export type RegionalSection = {
  id: string;
  name: string;
  regionId: string; // ← A qué región pertenece
  leader: string;
  status: string;
  destacamentos: string[]; // ← IDs de destacamentos
};

export const REGIONAL_ROWS: RegionalSection[] = [
  { id: 'sec-01', name: 'Seccional A', regionId: 'central', leader: 'Pedro López', status: 'active', destacamentos: ['dest-01', 'dest-02'] },
  { id: 'sec-02', name: 'Seccional B', regionId: 'central', leader: 'Diana Cruz', status: 'active', destacamentos: ['dest-03'] },
  { id: 'sec-03', name: 'Seccional Este 1', regionId: 'este', leader: 'Santiago Pérez', status: 'inactive', destacamentos: [] },
  { id: 'sec-04', name: 'Seccional Norte A', regionId: 'norte', leader: 'Miguel Santos', status: 'active', destacamentos: ['dest-04'] },
  { id: 'sec-05', name: 'Seccional Norte B', regionId: 'norte', leader: 'Marta Jiménez', status: 'active', destacamentos: ['dest-05', 'dest-06'] },
  { id: 'sec-06', name: 'Seccional Oeste A', regionId: 'oeste', leader: 'Wilmer Castillo', status: 'active', destacamentos: [] },
];
