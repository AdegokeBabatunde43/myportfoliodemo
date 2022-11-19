import React from 'react'
import LEARN from '../../assest/learnfastng.png'
import LEARN1 from '../../assest/logo-designer-in-nigeria.jpg'
import LEARN2 from '../../assest/female.png'
import LEARN3 from '../../assest/female.jpg'
import LEARN4 from '../../assest/rapid-swift.png'
import LEARN5 from '../../assest/Tiwa.png'
import './portfolio.css'

const data=[
  {
    id:1,
    image:LEARN,
    title: 'Social Media',
    github: 'https://github.com/AdegokeBabatunde43/djangomysocial',
    demo: 'https://tundetechhtmlcsssocial1.netlify.app/'
  },
  {
    id:2,
    image:LEARN1,
    title: 'Review',
    github: 'https://githubhttps://github.com/AdegokeBabatunde43/react-facebook.com',
    demo: 'https://tiny-starship-0ac823.netlify.app/'
  },
  {
    id:3,
    image:LEARN5,
    title: 'Social Media',
    github: 'https://github.com',
    demo: 'https://whimsical-pavlova-392619.netlify.app/'
  },
  {
    id:4,
    image:LEARN3,
    title: 'Caculator',
    github: 'https://github.com/AdegokeBabatunde43/react-facebook',
    demo: 'https://lucent-otter-12b8ee.netlify.app/'
  },
  {
    id:5,
    image:LEARN2,
    title: 'Social Media',
    github: 'https://github.com/AdegokeBabatunde43/my-movie-Api-1',
    demo: 'https://lucent-otter-12b8ee.netlify.app/'
  },
  {
    id:6,
    image:LEARN4,
    title: 'Social Media',
    github: 'https://github.com/AdegokeBabatunde43/quiz-app',
    demo: 'https://dreamy-rabanadas-67958e.netlify.app/'
  }, 
  {
    id:7,
    image:LEARN4,
    title: 'Shopping Cart',
    github: 'https://github.com/AdegokeBabatunde43/quiz-app',
    demo: 'https://javascriptsshoppingcartapp.netlify.app/'
  },
  {
    id:8,
    image:LEARN4,
    title: 'Blog',
    github: 'https://github.com/AdegokeBabatunde43/',
    demo: 'https://ttechblogg.herokuapp.com/'
  }


]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {data.map(({id, image, title, github, demo})=>(
                  <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='-blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='-blank'>Live Demo</a>
                  </div>
                  </article>
      ) )}

        


        

      </div>
    </section>
  )
}

export default Portfolio