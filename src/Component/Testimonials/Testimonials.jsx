import React from 'react'

import ShortcutIcon from '@mui/icons-material/Shortcut';

import "./Testimonials.css";

const Testimonials = () => {

  const testimonialData = [
    {
      id: 1,
      name: 'Pichai Sundararajan',
      title: 'CEO of Google',
      desc: 'Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google',
      icon: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      img: "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    },
    {
      id: 2,
      name: 'Sonu Sharma',
      title: 'Motivational Speaker',
      desc: 'Young Indian Business consultant, Network Marketer, Motivational Speaker and Corporate Trainer, Sonu is owner and founder of Dynamic India Group. Apart from hosting seminars worldwide, Sharma Ji is very popular on social media. Sonu Sharma Biography, age and other details are discussed this post.',
      icon: "https://cdn-icons-png.flaticon.com/512/71/71886.png",
      img: "https://i.pinimg.com/originals/fa/46/fa/fa46fabeafa02cd231b6c75a0a3a2d11.jpg",
      featured: true,
    },
    {
      id: 3,
      name: 'Mark Zuckerberg',
      title: 'Facebook Founder',
      desc: 'Mark Elliot Zuckerberg (born May 14, 1984) is an American business magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms (formerly Facebook, Inc.), of which he is the chairman, chief executive officer, and controlling shareholder.',
      icon: "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png",
      img: "https://i.ndtvimg.com/i/2015-09/mark-zuckerberg-facebook_650x400_41442303130.jpg",
    },
  ];

  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="cardContainer">
        {testimonialData.map((p)=>(
        <div className={p.featured ? "featured" : "Card" }>
          <div className="top">
            < ShortcutIcon className='sideArrow' style={{fontSize:'35px'}}/>
            <img src={p.img} className='leftImg' alt="" />
            <img src={p.icon} className='rightImg' alt="" />
          </div>
          <div className="center">
             {p.desc}  
          </div>
          <div className="bottom">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Testimonials