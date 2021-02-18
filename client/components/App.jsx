import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.css';
import Search from './Search';

const App = () => {
  const [results, setresults] = useState([]);
  const searchEvent = (query) => {
    axios.get(`/events?q=${query}`)
      .then((data) => console.log(data.data));
  };
  return (
    <div className={styles.title}>
      <Search searchEvent={searchEvent} />
    </div>
  );
};

export default App;
