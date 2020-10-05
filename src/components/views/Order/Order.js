import React from 'react';
import styles from './Order.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const Order = (props) => (
  <div className={styles.component}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {/* eslint-disable-next-line react/prop-types */}
        <Paper className={styles.paper}><h1>id: {props.match.params.id}</h1></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper className={styles.paper}>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <FormControl className={styles.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={styles.select}
              value={'1'}
            >
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'5'}>5</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={styles.paper}>
          <InputLabel id="demo-simple-select-label">Name:</InputLabel>
          <FormControl className={styles.formControl}>
            <Select
              className={styles.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={'pizza'}
            >
              <MenuItem value={'pizza'}>pizza</MenuItem>
              <MenuItem value={'caffe'}>caffe</MenuItem>
              <MenuItem value={'breakfast'}>breakfast</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={styles.paper}>
          <FormControlLabel control={<Checkbox name="checkedC" />} label="double cheesse" />
          <FormControlLabel control={<Checkbox name="checkedC" />} label="salami" />
          <FormControlLabel control={<Checkbox name="checkedC" />} label="milk" />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Button className={styles.buttonCancel}>
        ADD
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quantity</TableCell>
                <TableCell>Menu</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                2
                </TableCell>
                <TableCell>
                Pizza: double chesse
                </TableCell>
                <TableCell>
                10$
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Order;
