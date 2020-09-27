import React from 'react';
import styles from './Event.module.scss';

const Event = (props) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {/* eslint-disable-next-line react/prop-types */}
    <p>{props.match.params.id}</p>
  </div>
);

export default Event;
