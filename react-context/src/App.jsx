import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { NavBar }   from './components/NavBar';
import { Items }     from './components/Items';
import { Favourites } from './components/Favourites';

function App() {

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
            <Route path='/' element={ <Items />}></Route>
            <Route path='/favs' element={ <Favourites />}></Route>
            <Route path='/*' element={ <Items />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App