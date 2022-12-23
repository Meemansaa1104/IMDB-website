
import React, { useState } from 'react'

import "./Contact.css";

const Contact = () => {

  const [massage, setMassage] = useState(false);

const handleSubmitting = (e) => {
  e.preventDefault();
  setMassage(true);
}

  return (
    <div className='contact' id='contact'>
      <div className="contactLeft">
        <img src="https://www.careerinnovation.com/wp-content/uploads/2020/02/Solutions-Career-Development-Workshops.png" alt="" />
      </div>
      <div className="contactRight">
        <h2>Contact</h2>
        <form onSubmit={handleSubmitting}>
          <input type="text" className='contactInput' placeholder='Name' />
          <input type="text" className='contactInput' placeholder='Email or contact Number'/>
          <textarea className='massage' placeholder='Massage'></textarea>
          <button className='submit' type='Submit'>Send</button>
          {massage && alert('Thanks For Submitting !')}
        </form>
      </div>
    </div>
  )
}

export default Contact
