

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import ReactPaginate from 'react-paginate';
// import axios from 'axios';
// import EventList from './EventList';

// const Display = (props) => {
//    //["<http://localhost:3000/events?_page=1&_limit=10?q=arrow>", " <http://localhost:3000/events?_page=6&_limit=10?q=arrow>", " <http://localhost:3000/events?_page=8&_limit=10?q=arrow>"]
//   const link = props.events;
//   const [pageCount, setPageCount] = useState(link.length);
//   const [eventList, setEventList] = useState([]);

//   useEffect(() => {
//     axios.get('/events?_page=1&_limit=10?q=arrow')
//     .then((data) => setEventList(data.data))
//     .catch((err) => console.log(err))
//   }, []);

//   const handlePageClick = () => {
//     console.log('hi');
//   };

//   return (
//     <div>
//       <p>{link}</p>
//       <EventList data={eventList} />
//       <ReactPaginate
//         previousLabel="previous"
//         nextLabel="next"
//         breakLabel="..."
//         breakClassName="break-me"
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName="pagination"
//         subContainerClassName="pages pagination"
//         activeClassName="active"
//       />
//     </div>
//   );
// };

// export default Display;

// Display.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
