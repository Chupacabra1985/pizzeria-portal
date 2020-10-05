import React from 'react';
import styles from './BookTable.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BookTable = () => (
  <div className={styles.component}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {/* eslint-disable-next-line react/prop-types */}
        <Paper className={styles.paper}>new</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <InputLabel id="demo-simple-select-label">Start Hour</InputLabel>
          <FormControl className={styles.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={styles.select}
              value={'10:30'}
            >
              <MenuItem value={'12:00'}>12:00</MenuItem>
              <MenuItem value={'12:30'}>12:30</MenuItem>
              <MenuItem value={'13:00'}>13:00</MenuItem>
              <MenuItem value={'13:30'}>13:30</MenuItem>
              <MenuItem value={'14:00'}>14:00</MenuItem>
              <MenuItem value={'14:30'}>14:30</MenuItem>
              <MenuItem value={'15:00'}>15:00</MenuItem>
              <MenuItem value={'15:30'}>15:30</MenuItem>
              <MenuItem value={'16:00'}>16:00</MenuItem>
              <MenuItem value={'16:30'}>16:30</MenuItem>
              <MenuItem value={'17:00'}>17:00</MenuItem>
              <MenuItem value={'17:30'}>17:30</MenuItem>
              <MenuItem value={'18:00'}>18:00</MenuItem>
              <MenuItem value={'18:30'}>18:30</MenuItem>
              <MenuItem value={'19:00'}>19:00</MenuItem>
              <MenuItem value={'19:30'}>19:30</MenuItem>
              <MenuItem value={'20:00'}>20:00</MenuItem>
              <MenuItem value={'20:30'}>20:30</MenuItem>
              <MenuItem value={'21:00'}>21:00</MenuItem>
              <MenuItem value={'21:30'}>21:30</MenuItem>
              <MenuItem value={'22:00'}>22:00</MenuItem>
              <MenuItem value={'22:30'}>22:30</MenuItem>
              <MenuItem value={'23:00'}>23:00</MenuItem>
              <MenuItem value={'23:30'}>23:30</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={styles.paper}>
          <InputLabel id="demo-simple-select-label">Finish Hour</InputLabel>
          <FormControl className={styles.formControl}>
            <Select
              className={styles.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={'10:30'}
            >
              <MenuItem value={'12:00'}>12:00</MenuItem>
              <MenuItem value={'12:30'}>12:30</MenuItem>
              <MenuItem value={'13:00'}>13:00</MenuItem>
              <MenuItem value={'13:30'}>13:30</MenuItem>
              <MenuItem value={'14:00'}>14:00</MenuItem>
              <MenuItem value={'14:30'}>14:30</MenuItem>
              <MenuItem value={'15:00'}>15:00</MenuItem>
              <MenuItem value={'15:30'}>15:30</MenuItem>
              <MenuItem value={'16:00'}>16:00</MenuItem>
              <MenuItem value={'16:30'}>16:30</MenuItem>
              <MenuItem value={'17:00'}>17:00</MenuItem>
              <MenuItem value={'17:30'}>17:30</MenuItem>
              <MenuItem value={'18:00'}>18:00</MenuItem>
              <MenuItem value={'18:30'}>18:30</MenuItem>
              <MenuItem value={'19:00'}>19:00</MenuItem>
              <MenuItem value={'19:30'}>19:30</MenuItem>
              <MenuItem value={'20:00'}>20:00</MenuItem>
              <MenuItem value={'20:30'}>20:30</MenuItem>
              <MenuItem value={'21:00'}>21:00</MenuItem>
              <MenuItem value={'21:30'}>21:30</MenuItem>
              <MenuItem value={'22:00'}>22:00</MenuItem>
              <MenuItem value={'22:30'}>22:30</MenuItem>
              <MenuItem value={'23:00'}>23:00</MenuItem>
              <MenuItem value={'23:30'}>23:30</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={styles.paper}>
          <form className={styles.formControl} noValidate autoComplete="off">
            <TextField className={styles.text} id="standard-basic" label="Summary" />
          </form>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Button className={styles.buttonSave}>
          SAVE
        </Button>
        <Button className={styles.buttonCancel}>
          CANCEL
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default BookTable;
