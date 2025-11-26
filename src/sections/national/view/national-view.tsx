// src/sections/national/view/national-view.tsx

import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import { NATIONAL, USERS } from '../../../_mock/hierarchy';
import type { UserProps } from '../user-table-row';

// ----------------------------------------------------------------------

export function NationalView() {
  const table = useTable();
  const navigate = useNavigate();

  const [filterName, setFilterName] = useState('');
  const [selectedNationalId, setSelectedNationalId] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  // Mapeamos NATIONAL al formato de la tabla
  const mappedRows: UserProps[] = useMemo(
    () =>
      NATIONAL.map((national, index) => ({
        id: national.id,
        name: national.name,
        avatarUrl: `/assets/images/avatar/avatar_${index + 1}.jpg`,
        company: `Regionales: ${national.regionals.length}`,
        role: '—',
        isVerified: true,
        status: 'active',
      })),
    []
  );

  const dataFiltered: UserProps[] = applyFilter({
    inputData: mappedRows,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  // Navegar a regional filtrado por national
  const handleGoToRegional = useCallback(
    (nationalId: string) => {
      navigate(`/regional/${nationalId}`);
    },
    [navigate]
  );

  // Abrir diálogo de info
  const handleSelectNational = useCallback((nationalId: string) => {
    setSelectedNationalId(nationalId);
    setInfoOpen(true);
  }, []);

  const handleCloseInfo = useCallback(() => {
    setInfoOpen(false);
  }, []);

  const selectedNational = useMemo(
    () => NATIONAL.find((n) => n.id === selectedNationalId) ?? null,
    [selectedNationalId]
  );

  // Armamos el equipo desde el mock: contacts + USERS
  const teamFromMock = useMemo(() => {
    if (!selectedNational || !selectedNational.contacts) return [];

    return [...selectedNational.contacts]
      .sort((a, b) => a.order - b.order)
      .map((contact) => {
        const user = USERS.find((u) => u.id === contact.userId);
        return {
          id: contact.id,
          order: contact.order,
          name: user?.name ?? 'Sin nombre',
          role: contact.role,
          phone: contact.phone,
          avatarUrl: user?.avatarUrl,
        };
      });
  }, [selectedNational]);

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
                rowCount={mappedRows.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    mappedRows.map((row) => row.id)
                  )
                }
                headLabel={[
                  { id: 'name', label: 'Región' },
                  { id: 'company', label: 'Líder' },
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
                      onCompanyClick={() => handleGoToRegional(row.id)}
                      onNameClick={() => handleSelectNational(row.id)}
                    />
                  ))}

                <TableEmptyRows
                  height={68}
                  emptyRows={emptyRows(
                    table.page,
                    table.rowsPerPage,
                    mappedRows.length
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
          count={mappedRows.length}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>

      {/* Dialog flotante centrado */}
      <Dialog
        open={infoOpen && !!selectedNational}
        onClose={handleCloseInfo}
        maxWidth="sm"
        fullWidth
      >
        {selectedNational && (
          <DialogContent sx={{ p: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <Avatar
                src="/assets/images/avatar/avatar_1.jpg"
                alt={selectedNational.name}
                sx={{ width: 72, height: 72 }}
              />
              <Box>
                <Typography variant="h6">{selectedNational.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ejemplo de jerarquía de liderazgo para este nivel nacional.
                </Typography>
              </Box>
            </Stack>

            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Equipo de ejemplo
            </Typography>

            <List disablePadding>
              {teamFromMock.map((member) => (
                <ListItem key={member.id} sx={{ px: 0, py: 0.75 }}>
                  <ListItemAvatar>
                    <Avatar
                      src={member.avatarUrl}
                      sx={{ width: 32, height: 32 }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${member.order}. ${member.name} · ${member.role}`}
                    secondary={member.phone}
                    primaryTypographyProps={{ variant: 'body2' }}
                    secondaryTypographyProps={{
                      variant: 'caption',
                      sx: { color: 'text.secondary' },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        )}
      </Dialog>
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
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
