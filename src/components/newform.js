import '../components/contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './news.css';


function News(props){
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
    <div>
 <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
   
   

    
<div className={props.cName}>
        
<img src={props.newsImg} alt="" srcset="" />
<div className="text">
  <h1 className={props.cName1}>{props.title}</h1>
<p className={props.cName2}>{props.text}</p>
</div>

</div> 
</div>

  );
};





export default ContactUs;




        <div className={props.cName}>
        
          <img src={props.newsImg} alt="" srcset="" />
          <div className="text">
            <h1 className={props.cName1}>{props.title}</h1>
          <p className={props.cName2}>{props.text}</p>
          </div>
          
        </div>
       
