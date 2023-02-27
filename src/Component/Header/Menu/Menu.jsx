import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';

import 'tippy.js/dist/tippy.css';

import Tippy from '@tippyjs/react';

import MenuList from './MenuList/MenuList';

const Menu = () => {
  return (
    <div className='menuBar'>
    <div className='menuItem'>
    <Tippy theme = 'dark' content = { < MenuList /> } interactive = {true} offset = {[6,35]}>
        < MenuIcon style = {{color : 'white', cursor: 'pointer', fontSize : '24px'}}/>
    </Tippy>
    </div>
    <span>Menu</span>
    </div>
  )
}

export default Menu