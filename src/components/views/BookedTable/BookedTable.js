import React from 'react';
import styles from './BookedTable.module.scss';


const BookedTable = (props) => (
  <div className={styles.component}>
    <h2>Booked Table view</h2>
    {/* eslint-disable-next-line react/prop-types */}
    <p>{props.match.params.id}</p>
  </div>
);

export default BookedTable;
