import React from 'react'
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useUser } from '../context/UserContext';
import favremove from '../assets/fav-remove.png';
import '../App.css';

export const Favourites = () => {

  const [ userC, setUserC ] = useUser();
  const [ existingData ]    = useLocalStorage('MyUserAppLocalStorage', []);
  
  const isUserAdded = (user) => {
    const { uid } = user;
    return userC.some((addedUser) => addedUser.uid === uid);
  };

  const handleRemoveFavorite = (user) => {
    const { uid } = user;
    const newData = userC.filter((addedUser) => addedUser.uid !== uid);
    setUserC(newData);
  };

  return (
    <>
      <div className="content-wrap">
        <div className="title">
          <h1>List of Favourites</h1>
        </div>
        <div className="left-block">
          <ul className="user-list">
            {
              existingData.map((user) =>
                isUserAdded(user) ? (
                  <li key={user.uid}>
                    <div className="user-list-image">
                      <img src={user.avatar} width="90px" alt="User Avatar" />
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
                      <button onClick={() => handleRemoveFavorite(user)}>
                        <img src={favremove} width="40rem" alt="Remove Favorite" />
                      </button>
                    </div>
                  </li>
                ) : null
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
};