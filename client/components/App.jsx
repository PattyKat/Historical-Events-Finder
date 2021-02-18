import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.css';
import Search from './Search';
import Display from './Display';

const App = () => {
  const [results, setresults] = useState([]);

  const sort = (array) => {
    const resultArr = [];
    for (let i = 0; i < array.length - 1; i += 1) {
      const current = array[i].split(';');
      resultArr.push(current[0]);
    }
    setresults(resultArr);
  };
  const searchEvent = (query) => {
    axios.get(`/events?_page=7&_limit=10?q=${query}`)
      .then((data) => {
        sort(data.headers.link.split(','));
      })
      .catch((err) => err);
  };

  return (
    <div className={styles.title}>
      <Search searchEvent={searchEvent} />
      <Display events={results} />
    </div>
  );
};

export default App;
