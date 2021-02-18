import React from 'react';
import styles from './styles.css';

const App = () => {
  const id = 'hello, from App.jsx!';
  return (
    <div className={styles.title}>
      <p>{id}</p>
    </div>
  );
};

export default App;
