import React from 'react'
import './about.css'
import ME from '../../assest/tunde2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h4>Experience</h4>
        <small>3+ Years Working</small>
        </article>
        <article className='about__card'>
          <FiUser className='about__icon'/>
        <h4>Client</h4>
        <small>200+ Years Working</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
        <h4>Projects</h4>
        <small>80+ Years Working</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error numquam iure quidem repellat, nulla perferendis porro aspernatur ipsa aliquid pariatur minus eaque consectetur tempore obcaecati facere assumenda doloremque. Cupiditate, minus.</p>
      <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About