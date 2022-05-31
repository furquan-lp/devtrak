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
import CircleIcon from '@mui/icons-material/Circle';

import utils from '../utils/dtutils';

const columns = [
  { id: 'number', label: '#', minWidth: 100 },
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
      <CircleIcon sx={{
        color: utils.getPriorityColor(priority),
        marginRight: 1
      }} fontSize="inherit" />);
  else
    return undefined;
};

const handleTableValues = (id, value, width) => {
  if (id === 'title' && value.length > (width - 100)) {
    return value.substring(0, width - 100).trim() + '...';
  } else {
    return value;
  }
};

const Issues = ({ rows, showClosed }) =>
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.id === 'number' ? 'center' : column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
              {columns.map((column) => {
                const value = handleTableValues(column.id, row[column.id], column.minWidth);
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
                        flexWrap: 'wrap',
                      }}>
                        {getTableExtras(column.id, closed, priority)}
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </div>
                    </TableCell>
                  );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>;

export default Issues;