import React from 'react'

import './Header.css';

import { Link } from 'react-router-dom';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import TurnedInIcon from '@mui/icons-material/TurnedIn';

import Menu from './Menu/Menu';

import SearchBar from './SearchBar/SearchBar';

const Header = (movies) => {
  
  return (
    <div className='header'>
      <div className='headerList'>
        <Link to = '/'><img className='headerIcon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
        <div className='menuBar'>
          <Menu/>
        </div>
        <>
        <div className ='SearchBar'>
            <SearchBar/>
        </div>
        </>
        <div><img className='proIcon' src="https://m.media-amazon.com/images/G/01/imdbpro/logos/IMDbPro-logo-primary-reversed._CB1513032401_.png" alt="" /></div>
        <div className='space_Line'>
           < HorizontalRuleIcon style={{transform:'rotate(90deg)',fontSize:'40px'}}/>
        </div>
        <div className='watch_list'>
          <div className='watch'>
            < TurnedInIcon style = {{color : 'white', cursor: 'pointer', fontSize : '22px', paddingRight : '4px' }}/>
          </div>
          <span>Watchlist</span>
        </div>
        <div className='sign_in'><span>Sign In</span></div>
        <div className='language'></div>
      </div>
    </div>
  )
}

export default Header;