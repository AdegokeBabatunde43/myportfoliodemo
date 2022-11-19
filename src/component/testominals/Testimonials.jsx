import React from 'react'
import './testmonials.css'
import IMG from '../../assest/image2.jpg'
import IMG1 from '../../assest/Wizkid.png'
import IMG2 from '../../assest/olamide.png'
import IMG3 from '../../assest/patoranking.jpg'
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
const data =[
  {
    avatar:IMG,
    name: 'Adegoke Babatunde',
    review: ' Whether you have got one or one thousand videos to collect, we have got you. Simply set your questions, send a single link to all, and watch the authentic video roll in.'
  },
  {
    avatar:IMG1,
    name: 'Adegoke Babatunde',
    review: 'Pre-set ratios and recording durations, then edit your favourite clips in minutes. We have included all the shortcuts you need to create the perfect video.'
  },
  {
    avatar:IMG2,
    name: 'Adegoke Babatunde',
    review: ' For growing companies, getting your business featured in the news (for the right reasons) is a big feat. Nowadays, being on the news means that millions of people can potentially see your product or service, which can significantly improve brand awareness.'
  },
  {
    avatar:IMG3,
    name: 'Adegoke Babatunde',
    review: ' A happy customer can simply take out their phone, write an emotional review, and post it for the world to see — and depending on your customers social following, that review could potentially influence millions of people.'
  }

]


  return (
    <section id="testmonials">
      <h5>Review from Clients</h5>
      <h2>Testominals</h2>
      <Swiper className="container testmonials__container"
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
       {
     data.map(({avatar, name, review},index)=>{
      return(

        <SwiperSlide key={index} className='testmonial'>
       <div className='client__avatar'>
         <img src={avatar} alt="" />
       </div>
       <h4 className='client__name'>{name}</h4>
         <small className='client__review'>{review}</small>
       </SwiperSlide>

      )
       
     })
     }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials