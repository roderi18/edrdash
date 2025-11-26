import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Iconify } from 'src/components/iconify';

// Tipado del row
export type NationalRow = {
  id: string;
  name: string;        // Región
  leader: string;      // Lider
  section: string;     // Sección
  status: string;      // Estado
  avatarUrl?: string;  // Opcional
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

  // 💡 Navegar al detalle
  const handleRowClick = () => {
    navigate(`/national/${row.id}`);
  };

  // 💡 Evita que el checkbox active la navegación
  const handleCheckboxClick = (event: MouseEvent<HTMLButtonElement>) => {
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
      {/* Checkbox */}
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={handleCheckboxClick}
        />
      </TableCell>

      {/* Región (con avatar opcional) */}
      <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {row.avatarUrl && (
          <Avatar alt={row.name} src={row.avatarUrl} />
        )}
        {row.name}
      </TableCell>

      {/* Líder */}
      <TableCell>{row.leader}</TableCell>

      {/* Sección */}
      <TableCell>{row.section}</TableCell>

      {/* Estado */}
      <TableCell sx={{ textTransform: 'capitalize' }}>
        {row.status}
      </TableCell>

      {/* Última columna (acciones) */}
      <TableCell align="right">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Acciones para ${row.id}`);
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
