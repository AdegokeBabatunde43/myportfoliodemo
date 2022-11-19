import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
  <footer>
    <h1><a href="footer__logo">ADEGOKE</a></h1>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#bout">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://facebook.com/"><AiFillFacebook/></a>
      <a href="https://instagram.com/"><FiInstagram/></a>
      <a href="https://twitter.com/"><GrTwitter/></a>
    </div>
 <div className="footer__copyright">
    <small>
      &copy;Adegoke Babatunde Olusola Tech. All right reserver
    </small>
 </div>


  </footer>
  )
}

export default Footer