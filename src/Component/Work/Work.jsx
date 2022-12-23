import React, { useState } from 'react'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import "./Work.css";

const Work = () => {

  const [changeSlider, setChangeSlider] = useState(0)

  const workData = [
    {
      id: 1,
      title: 'First Project',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officiis saepe numquam?',
      icon: "https://www.pngkit.com/png/detail/154-1545805_portfolio-icons-code-web-development-logo.png",
      img: "https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?w=1380&t=st=1671619172~exp=1671619772~hmac=d2544173a7f1ff32ef59dcc7f8f0ee62b28b8d415340b1e3564ba91add3d9492",
    },
    {
      id: 2,
      title: 'Second Project',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officiis saepe numquam?',
      icon: "data:image/png;base64,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",
      img: "https://www.syncfusion.com/blogs/wp-content/uploads/2022/09/What-is-a-Front-End-Design-System.png",
    },
    {
      id: 3,
      title: 'Third Project',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officiis saepe numquam?',
      icon: "https://www.nicepng.com/png/detail/337-3379083_google-developer-group-logo.png",
      img: "https://www.startdesigns.com/blog/wp-content/uploads/2021/08/Primary-Front-End-Web-Development-Tools-2.jpg",
    },
    {
      id: 4,
      title: 'Fourth Project',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officiis saepe numquam?',
      icon: "https://www.freepnglogos.com/uploads/logo-website-png/logo-website-update-likable-art-9.png",
      img: "https://wallpapercave.com/wp/wp9641821.jpg",
    },
  ];

  const handleClick = (way) =>{
    way === 'left' ? setChangeSlider(changeSlider > 0 ? changeSlider-1 : 2) :
    setChangeSlider(changeSlider < workData.length - 1 ? changeSlider + 1 : 0);
  }

  return (
    <div className='work' id='work'>
      <div className="slider" style={{transform:`translateX(-${changeSlider * 100}vw)`}}>
        {workData.map((i)=>(
         <div className="itemContainer">
          <div className="secondContainer">
            <div className="leftContainer">
              <div className="leftContain">
                <div className="imgContainer">
                <img src={i.icon} alt="" />
                </div>
                <h2>{i.title}</h2>
                <p>{i.desc}</p>
                <span>Project Work</span>
              </div>
            </div>
            <div className="rightContainer">
              <img src={i.img}alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <ArrowCircleLeftIcon className='arrowLeft' style={{fontSize:'70px'}} onClick={()=>handleClick('left')}/>
      <ArrowCircleRightIcon className='arrowRight' style={{fontSize:'70px'}} onClick={()=>handleClick('')}/>
    </div>
  )
}

export default Work