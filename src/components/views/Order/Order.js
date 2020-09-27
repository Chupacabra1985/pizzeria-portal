import React from 'react';
import styles from './Order.module.scss';

const Order = (props) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {/* eslint-disable-next-line react/prop-types */}
    <p>{props.match.params.id}</p>
  </div>
);

export default Order;
