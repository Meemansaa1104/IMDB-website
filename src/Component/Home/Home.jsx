import React from 'react'

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';




import "./Home.css";

const Home = () => {
 
  return (
    <div className='home' id='intro'>
      <div className='leftHome'>
      <div className='imageContainer'>
        <img src="https://i.pinimg.com/originals/9a/68/71/9a68716efc331fcc84e3a4ce5f23d18d.png" alt="" />
      </div>
      </div>
      <div className="rightHome">
        <div className="wrapper">
        <h3>Hey There! This is</h3>
        <h1>Meemansaa Dewangan</h1>
        <h2>Front-End <span> Developer</span>
        </h2>
        </div>
        <a href="#portfolio" className='bottomArrow'>
          < ExpandCircleDownIcon style={{fontSize:'70px'}} />
        </a>
      </div>
    </div>
  )
}

export default Home