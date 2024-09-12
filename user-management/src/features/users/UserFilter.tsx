import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './usersSlice';

const UserFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ field: name, value }));
  };

  return (
    <div className='filter-container'>
      <input name="name" placeholder="Filter by name" onChange={handleFilterChange} />
      <input name="username" placeholder="Filter by username" onChange={handleFilterChange} />
      <input name="email" placeholder="Filter by email" onChange={handleFilterChange} />
      <input name="phone" placeholder="Filter by phone" onChange={handleFilterChange} />
    </div>
  );
};

export default UserFilter;
