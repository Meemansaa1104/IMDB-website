import React from 'react';

import './PortfolioMenu.css';

const PortfolioMenu = ({id, title, active, setChoose}) => {
  return (
    <li className = {active ? 'portfolioList new':'portfolioList'} onClick={()=>setChoose(id)}>
      {title}
    </li>
  )
}

export default PortfolioMenu