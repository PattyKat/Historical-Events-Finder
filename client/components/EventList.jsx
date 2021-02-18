/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const EventList = (props) => {
  const link = props.data;
  const listItems = link.map(({ date, description }, idx) => (
    <div key={idx}>
      <p>
        Date:
        {date}
      </p>
      <p>{description}</p>
    </div>
  ));

  return (
    <div>
      {listItems}
    </div>
  );
};

export default EventList;

EventList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
