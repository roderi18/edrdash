import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';

// Si ya tienes un tipo definido en otro archivo (por ejemplo national-types.ts)
// puedes importar ese en vez de este:
export type NationalRow = {
  id: string;
  name: string;      // Región
  leader: string;
  section: string;
  status: string;
};

type NationalTableRowProps = {
  row: NationalRow;
  selected: boolean;
  onSelectRow: () => void;
};

export function NationalTableRow({
  row,
  selected,
  onSelectRow,
}: NationalTableRowProps) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    // Navega al detalle que ya creamos: /national/:id
    navigate(`/national/${row.id}`);
  };

  const handleCheckboxClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Para que el click del checkbox NO dispare la navegación
    event.stopPropagation();
    onSelectRow();
  };

  return (
    <TableRow
      hover
      onClick={handleRowClick}
      sx={{ cursor: 'pointer' }}
      selected={selected}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={handleCheckboxClick} />
      </TableCell>

      {/* Ajusta estos campos al orden de tus columnas */}
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.leader}</TableCell>
      <TableCell>{row.section}</TableCell>
      <TableCell>{row.status}</TableCell>
    </TableRow>
  );
}
