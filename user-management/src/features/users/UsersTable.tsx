import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { RootState, AppDispatch } from '../../app/store';  
import UserFilter from './UserFilter';

const UsersTable = () => {
  const dispatch: AppDispatch = useDispatch();  
  const { users, filters, status, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());  
    }
  }, [status, dispatch]);

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  });

  return (
    <div>
      <UserFilter />
      {status === 'loading' && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
