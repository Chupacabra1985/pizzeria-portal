import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <nav>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>Check Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order</Link>
    </nav>
  </div>
);

export default Waiter;