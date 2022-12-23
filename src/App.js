import React, { useState } from 'react';
import Contact from './Component/contact/Contact';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonials from './Component/Testimonials/Testimonials';
import Work from './Component/Work/Work';
import './App.css';
import Menu from './Component/Menu/Menu';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      < Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'  >
        < Home />
        < Portfolio />
        < Work />
        < Testimonials />
        < Contact />
      </div>
    </div>
  )
}

export default App