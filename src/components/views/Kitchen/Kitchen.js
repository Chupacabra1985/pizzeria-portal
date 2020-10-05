import React from 'react';
import styles from './Kitchen.module.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const demoContent = [
  {id: 543, tableNr: 2, summary: 'pizza, cola', status: 'new', order: null},
  {id: 889, tableNr: 1, summary: 'oscypek, cola', status: 'ready', order: null},
  {id: 231, tableNr: 3, summary: 'woda, cola', status: 'cancelled', order: 123},
];

const renderActions = status => {
  if (status !== 'cancelled' && status !== 'done') {
    return (
      <Button>done</Button>
    );
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order id</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Summary</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.tableNr}
            </TableCell>
            <TableCell>
              {row.summary}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
