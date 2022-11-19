import React from 'react'
import './service.css'
import {FaCheck} from 'react-icons/fa'

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer </h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Bootstrap</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Tailwind</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>JavaScripts&React </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Python & Django</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Writing an efficient code</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Deployment of softwares</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Testing and evaluating new programs</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Creation of API for Database</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Use of Hyper Text Mark Language</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>General Programming Skills</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Software Documentation</p>
            </li>
            <li>
              <FaCheck className='sercice__list-icon'/>
              <p>Software Debugging</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service