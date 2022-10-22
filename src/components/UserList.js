import React from 'react'
import Card from './Card/Card'
import './UserList.css';

function UserList(props) {
  return (
    <Card>
        <div className='users'>
        <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old) (College: {user.collegename})
          </li>
        ))}
      </ul>
      </div>
    </Card>
  );
}

export default UserList