import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import favadd from '../assets/fav-add.png'

// CONTEXT AND LOCAL STORAGE
import { Component , useEffect } from "react"
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useUser } from '../context/UserContext';

const person = {
  id: crypto.randomUUID(),
  name: '1 Harry Potter',
  email: '1harry@hogwarts.org'
}
const person2 = [
  {
    id: crypto.randomUUID(),
    name: '2 Harry Potter',
    email: '2harry@hogwarts.org'
  },
  {
    id: crypto.randomUUID(),
    name: '3 Harry Potter',
    email: '3harry@hogwarts.org'
  }
];
// END CONTEXT AND LOCAL STORAGE

export const Items = ( { users } ) => {
  //
  const [ userC, setUserC ] = useUser();

  // useEffect( () => {
  //   setUserC(person2);
  // }, []);
  //

  const handleAddFavorite = (user) => {
  // Update the userC state with the newly added user
  setUserC(user);
  };

  return (
    <>
    <div className='content-wrap'>
        <div className='title'>
          <h1>List of Current Users</h1>
        </div>

        <div className='left-block'>
            <ul className="user-list">
              {
                users.map((user) => (
                  <Link key={user.id} to={`/items/${user.id}`} className="user-list-link">
                    <div className="user-list-image">
                      <img src={user.avatar} width="90px" />
                    </div>
                    <div className="user-list-name">
                        <div>
                          {user.name} {user.first_name} {user.last_name}
                        </div>
                        <div>
                          {user.email}
                        </div>
                    </div>
                    <div>
                    <button onClick={() => handleAddFavorite(user)}>
                      <img src={favadd} width="40rem"/>
                    </button>
                    </div>
                  </Link>
                ))
              }
            </ul>

            <p>
              {userC && userC.name} 
              {userC && userC.email} 
              {userC && userC.id}
            </p>

        </div>
    </div>
    </>
  )
}