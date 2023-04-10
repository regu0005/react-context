import React from 'react'
import { Link } from 'react-router-dom'
import favadd from '../assets/fav-add.png'

// CONTEXT AND LOCAL STORAGE
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useUser } from '../context/UserContext';


export const Items = ( { users } ) => {

  const [ userC, setUserC ] = useUser();

  const handleAddFavorite = (user) => {

    const { uid, first_name, last_name, avatar, email } = user;
    const newUser = { uid, first_name, last_name, avatar, email };

    const existingData = JSON.parse(localStorage.getItem('MyUserAppLocalStorage')) || [];

    const userExists = existingData.findIndex((existingUser) => existingUser.uid === newUser.uid);
    
    // User doesn't exist then add to localstorage
    if (userExists == -1)
    {
        // Append the new user to the existing data
        const newData = Array.isArray(existingData) && existingData.length > 0
        ? [...existingData, newUser]
        : [newUser];

        setUserC(newData);
    }
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

        </div>
    </div>
    </>
  )
}