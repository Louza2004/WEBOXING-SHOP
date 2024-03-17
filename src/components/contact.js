import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_07wd6ad', 'template_yz5cnpe', form.current, 'F-qE228V3Stitc9iu')
      .then((result) => {
          console.log(result.text);
          console.log("message envoyé")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <label className='label'>Nom :</label>
      <input type="text" name="user_name" className='user-name'/>
      <label className='label'>Email :</label>
      <input type="email" name="user_email" className='user-email'/>
      <label className='label'>Message :</label>
      <textarea name="message" className='message'/>
      <input type="submit" value="Send" className='submit' />
    </form>
  );
};





export default ContactUs;
