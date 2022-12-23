import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Hamburger from 'hamburger-react';
import "./Header.css";

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'header ' + (menuOpen && 'active')}>
      <div className={'wrap'}>
        <div className='left'>
          <a className={'head '+ (menuOpen && 'activeColor')} href='intro'>Meemansaa Dewangan</a>
          <div className='item'>
            < PersonIcon className={'icon '+ (menuOpen && 'activeColor')}style={{fontSize:'18px'}}/>
            <span className={'detail '+ (menuOpen && 'activeColor')}>+919993011904</span>
            <div className='item'>
            < EmailIcon className={'icon '+ (menuOpen && 'activeColor')}style={{fontSize:'18px'}}/>
            <span className={'detail '+ (menuOpen && 'activeColor')}>meemansaa11900@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={'right'} onClick={()=>setMenuOpen(!menuOpen)}>
          <Hamburger size={30} color={menuOpen ? 'rgb(16, 1, 31)' : 'white'} duration={0.8} toggled={menuOpen} toggle={setMenuOpen(menuOpen)} />
        </div>
      </div>
    </div>
  )
}

export default Header