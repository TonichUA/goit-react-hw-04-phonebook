import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
