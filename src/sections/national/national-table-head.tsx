import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Checkbox,
} from '@mui/material';

type HeadLabel = {
  id: string;
  label: string;
  align?: 'left' | 'center' | 'right';
};

type Props = {
  order: 'asc' | 'desc';
  orderBy: string;
  numSelected: number;
  rowCount: number;
  headLabel: HeadLabel[];
  onSort: (id: string) => void;
  onSelectAllRows: (checked: boolean) => void;
};

export function NationalTableHead({
  order,
  orderBy,
  numSelected,
  rowCount,
  headLabel,
  onSort,
  onSelectAllRows,
}: Props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={rowCount > 0 && numSelected === rowCount}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            onChange={(e) => onSelectAllRows(e.target.checked)}
          />
        </TableCell>

        {headLabel.map((col) => (
          <TableCell
            key={col.id}
            align={col.align || 'left'}
            sortDirection={orderBy === col.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === col.id}
              direction={orderBy === col.id ? order : 'asc'}
              onClick={() => onSort(col.id)}
            >
              {col.label}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell />
      </TableRow>
    </TableHead>
  );
}
