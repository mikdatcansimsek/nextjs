'use client';

import { useEffect, useState } from 'react';
import { userService } from '@/lib/services';
import type { User } from '@/types/api';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await userService.getAll();
      setUsers(response.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    const newUser = await userService.create({
      name: 'New User',
      email: 'new@example.com'
    });
    
    setUsers([...users, newUser.data]);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleCreateUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}