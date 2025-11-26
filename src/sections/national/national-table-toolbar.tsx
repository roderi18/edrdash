import { Toolbar, OutlinedInput, InputAdornment } from '@mui/material';

import { Iconify } from 'src/components/iconify';

type Props = {
  filterName: string;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function NationalTableToolbar({ filterName, onFilterName }: Props) {
  return (
    <Toolbar sx={{ px: 2 }}>
      <OutlinedInput
        value={filterName}
        onChange={onFilterName}
        placeholder="Buscar región..."
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" />
          </InputAdornment>
        }
      />
    </Toolbar>
  );
}
