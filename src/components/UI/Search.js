import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      borderRadius: '20px',
      background: '#F8F9FA',
      padding: '5px 10px',
      color: '#9FA2AB',
      height: '36px',
      width: '400px'
    }}>
      <FaSearch style={{ marginRight: '10px' }} />
      <input type="search" placeholder={placeholder} style={{
        border: 'none',
        background: 'transparent',
        width: '100%'
      }} />
    </div>
  );
};

export default SearchBar;