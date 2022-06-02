import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import CircleIcon from '@mui/icons-material/Circle';

import utils from '../utils/dtutils';

const columns = [
  { id: 'number', label: '#', minWidth: 80 },
  { id: 'type', label: 'Type', minWidth: 100 },
  {
    id: 'project',
    label: 'Project',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'title',
    label: 'Title',
    minWidth: 170,
    align: 'left'
  }
];

const getTableExtras = (id, closed, priority) => {
  if (id === 'number')
    return (<Checkbox disabled={closed} checked={closed} />);
  else if (id === 'title')
    return (
      <Tooltip title="Priority" arrow>
        <CircleIcon sx={{
          color: utils.getPriorityColor(priority),
          marginRight: 1
        }} fontSize="inherit" />
      </Tooltip>
    );
  else
    return undefined;
};

const handleTableValues = (id, value, width) => {
  if (id === 'title' && value.length > (width - 100)) {
    return value.substring(0, width - 100).trim() + '...';
  } else if (id === 'type') {
    return <div style={{
      border: '2px solid',
      borderColor: utils.getIssueTypeColor(value),
      padding: 3, paddingLeft: 6, paddingRight: 6,
      borderRadius: 8
    }}>{value}</div>;
  } else if (id === 'project') {
    return <a href={utils.getRepositoryLink(value)}
      style={{ color: '#457b9d' }}>{value}</a>;
  } else {
    return value;
  }
};

const IssuesTable = ({ rows, page, rowsPerPage, showClosed }) =>
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.id === 'number' ? 'center' : column.align}
              style={{
                minWidth: column.minWidth,
                backgroundColor: '#1d3557',
                color: 'white'
              }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = handleTableValues(
                    column.id, row[column.id], column.minWidth
                  );
                  const closed = row['closed'] === undefined ?
                    false : row['closed'];
                  const priority = row['priority'];
                  if (showClosed || !closed)
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          flexWrap: 'wrap'
                        }}>
                          {getTableExtras(column.id, closed, priority)}
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </div>
                      </TableCell>
                    );
                  else
                    return undefined;
                })}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </TableContainer>;

const Issues = ({ rows, showClosed }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <IssuesTable
        rows={rows}
        page={page}
        rowsPerPage={rowsPerPage}
        showClosed={showClosed}
      />
      <TablePagination
        rowsPerPageOptions={[5, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Issues;