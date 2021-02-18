import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const onSubmit = (string) => {
    props.searchEvent(string);
  };
  const keyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSubmit(query);
      setQuery('');
    }
  };
  return (
    <div id={styles.title}>
      <label htmlFor="query">
        Search Events:
        <input id="query" type="text" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={keyDown} />
      </label>
    </div>

  );
};

export default Search;

Search.propTypes = {
  searchEvent: PropTypes.func.isRequired,
};
