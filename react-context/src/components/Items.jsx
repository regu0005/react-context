import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import favadd from '../assets/fav-add.png'
import favremove from '../assets/fav-remove.png'

// USERS DATA
const USERS_URL = 'https://random-data-api.com/api/v2/users?size=20';

export const Items = ( ) => {
  const [ users, setUsers ] = useState([]);
  useEffect( () => {
    fetch(USERS_URL)
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setUsers(data)
        }
      )
      .catch(function(err){
       
      })
  }, [] );

  const [ userC, setUserC ] = useUser();

  const handleAddFavorite = (user) => {

    const { uid, first_name, last_name, avatar, email } = user;
    const newUser = { uid, first_name, last_name, avatar, email };

    const existingData = JSON.parse(localStorage.getItem('MyUserAppLocalStorage')) || [];

    const userExists = existingData.findIndex((existingUser) => existingUser.uid === newUser.uid);
    
    // If User doesn't exist then add to localstorage
    if (userExists == -1)
    {
        // Append the new user to the existing data and validate 
        const newData = Array.isArray(existingData) && existingData.length > 0
        ? [...existingData, newUser]
        : [newUser];

        setUserC(newData);
    }
  };

  const isUserAdded = (user) => {
    const { uid } = user;
    return userC && userC.some((addedUser) => addedUser.uid === uid);
  };


  const handleRemoveFavorite = (user) => {
    const { uid } = user;
    const newData = userC.filter((addedUser) => addedUser.uid !== uid);
    setUserC(newData);
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
                  <li key={user.id} >
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
                      { isUserAdded(user)
                        ?
                          <button onClick={() => handleRemoveFavorite(user)}>
                            <img src={favremove} width="40rem"/>
                          </button>
                        :
                          <button onClick={() => handleAddFavorite(user)}>
                            <img src={favadd} width="40rem"/>
                          </button>
                      }
                    </div>
                  </li>
                ))
              }
            </ul>

        </div>
    </div>
    </>
  )
}