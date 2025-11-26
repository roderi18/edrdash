import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import { NATIONAL } from 'src/_mock/hierarchy';
import type { UserProps } from '../user-table-row';

// ----------------------------------------------------------------------

export function NationalView() {
  const table = useTable();
  const navigate = useNavigate();

  const [filterName, setFilterName] = useState('');

  //--------------------------------------------
  // MAPEO DE NATIONAL → UserProps (datos dummy)
  //--------------------------------------------
  const nationalRows: UserProps[] = NATIONAL.map((item) => {
    const regionalCount = item.regionals?.length ?? 0;

    return {
      id: item.id,
      name: item.name, // Columna "Región / Nivel Nacional"
      avatarUrl: item.avatarUrl || '/assets/images/avatar/avatar_1.jpg',
      company: `Regionales: ${regionalCount}`, // Columna "Líder / Conteo"
      role: '—', // Columna "Sección"
      isVerified: true, // Columna "¿?"
      status: 'active', // Columna "Estado"
    };
  });

  //--------------------------------------------
  // FILTRO Y ORDENAMIENTO
  //--------------------------------------------
  const dataFiltered: UserProps[] = applyFilter({
    inputData: nationalRows,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  //--------------------------------------------
  // CLICK PARA IR A REGIONAL (columna "Regionales: ...")
  //--------------------------------------------
  const handleGoToRegional = (nationalId: string) => {
    navigate(`/regional/${nationalId}`);
  };

  //--------------------------------------------
  // CLICK PARA IR A NATIONAL INFO (columna "Región / Nivel Nacional...")
  //--------------------------------------------
  const handleGoToNationalInfo = (nationalId: string) => {
    navigate(`/nationalinfo/${nationalId}`);
  };

  //--------------------------------------------

  return (
    <DashboardContent>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Nivel Nacional
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          Nueva región
        </Button>
      </Box>

      <Card>
        <UserTableToolbar
          numSelected={table.selected.length}
          filterName={filterName}
          onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterName(event.target.value);
            table.onResetPage();
          }}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={table.order}
                orderBy={table.orderBy}
                rowCount={nationalRows.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    nationalRows.map((row) => row.id)
                  )
                }
                headLabel={[
                  { id: 'name', label: 'Región / Nivel Nacional' },
                  { id: 'company', label: 'Líder / Regionales' },
                  { id: 'role', label: 'Sección' },
                  { id: 'isVerified', label: '¿?', align: 'center' },
                  { id: 'status', label: 'Estado' },
                  { id: '' },
                ]}
              />

              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      // 🔹 Primera columna: nombre → /nationalinfo/:id
                      onNameClick={() => handleGoToNationalInfo(row.id)}
                      // 🔹 Segunda columna: "Regionales: X" → /regional/:id
                      onCompanyClick={() => handleGoToRegional(row.id)}
                    />
                  ))}

                <TableEmptyRows
                  height={68}
                  emptyRows={emptyRows(
                    table.page,
                    table.rowsPerPage,
                    nationalRows.length
                  )}
                />

                {notFound && <TableNoData searchQuery={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          page={table.page}
          count={nationalRows.length}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) setSelected(newSelecteds);
    else setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = () => setPage(0);

  const onChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    onResetPage();
  };

  return {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,
    onSort,
    onSelectRow,
    onResetPage,
    onSelectAllRows,
    onChangePage,
    onChangeRowsPerPage,
  };
}
