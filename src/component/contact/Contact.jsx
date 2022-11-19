import React from 'react'
import './contact.css'
import {MdOutlineEmail} from  'react-icons/md'
import {SiMessenger, SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wahu3ps', 'template_eowmuek', form.current, 'catmTn31TbHPLZAbe')

    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail class="contact__option-icon"/>
            <h3>Email</h3>
            <h4>ababatunde220@gmail.com</h4>
            <a href="mailto:ababatunde220@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiMessenger class="contact__option-icon"/>
            <h3>Messenger</h3>
            <h4>http://m.me/adegoke.b.olusola</h4>
            <a href="http://m.me/adegoke.b.olusola" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp class="contact__option-icon"/>
            <h3>Whatsapp</h3>
            <h4>ababatunde220@gmail.com</h4>
            <a href="https://api.whatsapp.com/send?phone=2348165717300" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder=' Your Full Name'  required/>
    <input type="email" name="email" placeholder= 'Your Email' required/>
    <textarea name="message" id="" rows="10" placeholder='Your Message' required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>

        </form>
      </div>
    
    </section>
  )
}

export default Contact