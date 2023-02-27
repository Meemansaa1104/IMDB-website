import React from 'react';

import { Link } from 'react-router-dom';

import './MenuList.css'

const MenuList = () => {
  return (
    <div className='movies'>
     <Link to = '/movies/popular' style={{textDecoration:'none', color:'white'}}>
       <div className='movies_list'>
            <p>Popular</p>
       </div>
       </Link>
       <hr/>
       <Link to = '/movies/top_rated' style={{textDecoration:'none', color:'white'}}>
       <div className='movies_list'>
            <p>Top Box Office</p>
       </div>
       </Link>
       <hr/>
       <Link to = '/movies/upcoming' style={{textDecoration:'none', color:'white'}}>
       <div className='movies_list'>
            <p>Upcoming</p>
       </div>
       </Link>
       <hr/>
       <Link to = '/movies/latest' style={{textDecoration:'none', color:'white'}}>
       <div className='movies_list'>
            <p>Latest Movie</p>
       </div>
       </Link>
     </div>

  )
}

export default MenuList;