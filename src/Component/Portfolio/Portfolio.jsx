import React, { useEffect } from 'react';
import "./Portfolio.css";
import PortfolioMenu from './PortfolioMenu';
import { useState } from "react";
import { portfolioData, 
         portfolioWeb, 
         portfolioMobile, 
         portfolioDesign, 
         portfolioBrand } from './Data';

const Portfolio = () => {
const [choose,setChoose] = useState('Feature');
const [data, setData] = useState([]);

useEffect(() => {
   switch(choose){
    case 'Feature':
      setData(portfolioData);
      break;
      case 'Mobile App':
      setData(portfolioMobile);
      break;
      case 'Web App':
      setData(portfolioWeb);
      break;
      case 'Designing':
      setData(portfolioDesign);
      break;
      case 'Branding':
      setData(portfolioBrand);
      break;
    default:
      setData(portfolioData)
   }
},[choose]);

  const list =[
    {
      id: 'Feature',
      title: 'Feature',
    },
    {
      id: 'Mobile App',
      title: 'Mobile App',
    },
    {
      id: 'Web App',
      title: 'Web App',
    },
    {
      id: 'Designing',
      title: 'Designing',
    },
    {
      id: 'Branding',
      title: 'Branding',
    }
  ]
 
  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='heading'>Portfolio</h1>
      <ul className='listItem'>  
         {list.map((item) => (
          <PortfolioMenu 
          title = {item.title} 
          active={choose === item.id} 
          setChoose = { setChoose }
          id={item.id}/>
         ))}     
      </ul>
      <div className="portfolioItem">
        
        {data.map((d) =>(
          <div className="items">
          <img src={d.img} alt=''></img>
          <h3>{d.title}</h3>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Portfolio