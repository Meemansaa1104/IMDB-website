import React from 'react';

import './App.css';

import Header from './Component/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home/Home';

import Movies from './Component/Movies/Movies';

import MovieDetail from './Component/MovieDetail/MovieDetail';


const App = () => {
  return (
    <div className='app'>
      <Router>
      < Header />
        <Routes>
          <Route index element = { <Home/> }></Route>
          <Route path = 'movie/:id' element={ < MovieDetail /> }></Route>
          <Route path = 'movies/:type' element={ < Movies /> }></Route>
          <Route path = '/*' element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App