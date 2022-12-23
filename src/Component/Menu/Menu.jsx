import React from 'react';

import './Menu.css';

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'menuBar ' + (menuOpen && 'active')}>
        <ul className='list' onClick={()=>setMenuOpen(false)}>
            <li>
               <a className='menuList' href='#intro'>Home</a>
            </li>
            <li>
               <a className='menuList' href='#portfolio'>Portfolio</a>
            </li>
            <li>
               <a className='menuList' href='#testimonial'>Testimonial</a>
            </li>
            <li>
               <a className='menuList' href='#work'>Work</a>
            </li>
            <li>
               <a className='menuList' href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu