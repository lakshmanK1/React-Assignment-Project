import React,{useState} from 'react';
import User from './components/User';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };


  return (
    <React.Fragment>
      <User onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
