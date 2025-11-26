import { useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

import { NATIONAL, REGIONAL, SECTIONAL, USERS } from '../../../_mock/hierarchy';
import type { UserProps } from '../user-table-row';

// ----------------------------------------------------------------------

export function RegionalView() {
  const table = useTable();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [filterName, setFilterName] = useState('');
  const [selectedRegionalId, setSelectedRegionalId] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  // 1) Obtener regionales
  let regionalRows = REGIONAL;

  if (id) {
    const national = NATIONAL.find((n) => n.id === id);
    regionalRows = national
      ? REGIONAL.filter((r) => national.regionals.includes(r.id))
      : [];
  }

  // 2) Adaptar a la tabla
  const mappedRows: UserProps[] = useMemo(
    () =>
      regionalRows.map((region, index) => ({
        id: region.id,
        name: region.name,
        avatarUrl: `/assets/images/avatar/avatar_${index + 1}.jpg`,
        company: `Seccionales: ${region.sectionals.length}`,
        role: '—',
        isVerified: true,
        status: 'active',
      })),
    [regionalRows]
  );

  // Filtrar tabla
  const dataFiltered: UserProps[] = applyFilter({
    inputData: mappedRows,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  // ACCIONES --------------------------------------------------------------------

  // Navegar hacia SECTIONAL
  const handleGoToSectional = useCallback(
    (regionalId: string) => {
      navigate(`/sectional/${regionalId}`);
    },
    [navigate]
  );

  // Abrir modal de info
  const handleSelectRegional = useCallback((regionalId: string) => {
    setSelectedRegionalId(regionalId);
    setInfoOpen(true);
  }, []);

  const handleCloseInfo = useCallback(() => {
    setInfoOpen(false);
  }, []);

  // Regional seleccionado para modal
  const selectedRegional = useMemo(
    () => REGIONAL.find((r) => r.id === selectedRegionalId) ?? null,
    [selectedRegionalId]
  );

  // Construir jerarquía desde mock
  const teamFromMock = useMemo(() => {
    if (!selectedRegional || !selectedRegional.contacts) return [];

    return [...selectedRegional.contacts]
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
  }, [selectedRegional]);

  // ----------------------------------------------------------------------

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
          Nivel Regional
          {id && (
            <>
              {' '}– Filtrado por <b>{id}</b>
            </>
          )}
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          Nueva sección
        </Button>
      </Box>

      <Card>
        {/* BARRA DE BÚSQUEDA */}
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
              {/* HEAD */}
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
                  { id: 'company', label: 'Seccionales' },
                  { id: 'role', label: '—' },
                  { id: 'isVerified', label: '¿?', align: 'center' },
                  { id: 'status', label: 'Estado' },
                  { id: '' },
                ]}
              />

              {/* BODY */}
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
                      onCompanyClick={() => handleGoToSectional(row.id)}
                      onNameClick={() => handleSelectRegional(row.id)}
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

      {/* MODAL FLOTANTE */}
      <Dialog
        open={infoOpen && !!selectedRegional}
        onClose={handleCloseInfo}
        maxWidth="sm"
        fullWidth
      >
        {selectedRegional && (
          <DialogContent sx={{ p: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <Avatar
                src="/assets/images/avatar/avatar_1.jpg"
                alt={selectedRegional.name}
                sx={{ width: 72, height: 72 }}
              />
              <Box>
                <Typography variant="h6">{selectedRegional.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ejemplo de jerarquía para esta región.
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
