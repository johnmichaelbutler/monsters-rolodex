import React from 'react';
import './search-box.styles.css';

// We are passing placeholder in as a prop then we are destructuring it
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder} // Then we use brackets to declare our placeholder variable
    onChange={handleChange}
  />
)