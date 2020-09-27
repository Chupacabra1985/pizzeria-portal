import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <nav>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Book New Table</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}>Check Table</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`}>Check Event</Link>
    </nav>
  </div>
);

export default Tables;
