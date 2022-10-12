import './contact.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_e20ce7m', 'template_9f3hyvu', form.current, 'AeZYOy5LDn-1_AE3l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact' id='contact'>
       <div className="left">
        <img src="assets/001-agreement.png" alt="" />
       </div>
       <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" placeholder='Name' name="from_name" />
          
          <input type="email" placeholder='Email' name="user_email" />
          
          <textarea placeholder='Message' name="message" />
          <button type="submit">Send</button>
          {message && <span>Thank you for your message! I will get back to you shortly.</span>}
        </form>
       </div>
    </div>
  )
}
