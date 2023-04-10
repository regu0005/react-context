import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { NavBar }   from './components/NavBar';
import { Items }     from './components/Items';
import { Favourites } from './components/Favourites';
import { NotFound } from './components/NotFound';

// LOCAL STORAGE
// import { useLocalStorage } from './hooks/UseLocalStorage';

function App() {

  // USERS DATA
  const USERS_URL = 'https://random-data-api.com/api/v2/users?size=20';
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

  return (    
    <div className="App">
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React Context</h1>
      </header>
      <NavBar/>
      <div className='container'>
        <Routes>
            <Route path='/' element={ <Items users={users} />}></Route>
            <Route path='/favs' element={ <Favourites />}></Route>
            <Route path='/*' element={ <Items users={users} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
//
{/* <div className="App">
      Vite app
      <Routes>
          <Route path='/' element={ <Home />}></Route>
      </Routes>
    </div> */}


// <header className="App-header">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         <h1>React Context</h1>
//       </header>
//       <NavBar/>
//       <Routes>
//           <Route path='/' element={ <Home />}></Route>
//           <Route path='/users' element={ <Users />}></Route>
//           <Route path='/beers' element={ <Beers />}></Route>
//           <Route path='*' element={ <NotFound />}></Route>
//       </Routes>
