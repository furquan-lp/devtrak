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
import ErrorIcon from '@mui/icons-material/Error';

import utils from '../utils/dtutils';

const columns = [
  { id: 'number', label: '#', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 },
  {
    id: 'project',
    label: 'Project',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'title',
    label: 'Title',
    minWidth: 170,
    align: 'left'
  }
];

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
                const value = row[column.id];
                const closed = row['closed'] === undefined ?
                  false : row['closed'];
                const priority = row['priority'];
                if (showClosed || !closed)
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'number' ?
                        <Checkbox disabled={closed} checked={closed} /> : undefined}
                      {column.id === 'title' ?
                        <ErrorIcon sx={{ color: utils.getPriorityColor(priority) }} />
                        : undefined}
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
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