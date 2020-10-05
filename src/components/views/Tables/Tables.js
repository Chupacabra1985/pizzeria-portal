import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const demoContent = [
  {hour: '12:00', table1: {id: 123, event: false, name: 'Kowalski'}, table2: null, table3: null},
  {hour: '12:30', table1: {id: 123, event: false, name: 'Kowalski'}, table2: null, table3: null},
  {hour: '13:00', table1: null, table2: {id: 234, event: false, name: 'Kowalski'}, table3: null},
  {hour: '13:30', table1: null, table2: null, table3: null},
  {hour: '14:00', table1: null, table2: null, table3: null},
  {hour: '14:30', table1: null, table2: {id: 473, event: true, name: 'PZU'}, table3: null},
  {hour: '15:30', table1: null, table2: {id: 473, event: true, name: 'PZU'}, table3: null},
  {hour: '16:00', table1: null, table2: null, table3: {id: 665, event: false, name: 'Kaczor'}},
  {hour: '16:30', table1: null, table2: null, table3: {id: 665, event: false, name: 'Kaczor'}},
];

const renderActions = status => {
  if (status == null) {
    return (
      <>
        <Button>new event</Button>
        <Button>new order</Button>
      </>
    );
  } else if (status.event === true) {
    return (
      <Button to={`${process.env.PUBLIC_URL}/tables/events/${status.id}`}>
        {status.name}
      </Button>
    );
  } else {
    return (
      <Button to={`${process.env.PUBLIC_URL}/tables/booking/${status.id}`}>
        {status.name}
      </Button>
    );
  }
};


const Tables = () => (
  <Paper className={styles.component}>
    <TextField
      id="datetime-local"
      label="Filter"
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      className={styles.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            <TableCell>
              {renderActions(row.table1)}
            </TableCell>
            <TableCell>
              {renderActions(row.table2)}
            </TableCell>
            <TableCell>
              {renderActions(row.table3)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
