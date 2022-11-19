import React from 'react'
import {AiFillLinkedin, AiFillFacebook, AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:linkedin.com" target="_blank"><AiFillLinkedin/></a>
        <a href="https:facebook.com" target="_blank"><AiFillFacebook/></a>
        <a href="https:github.com" target="_blank"><AiFillGithub /></a>
        
    </div>
  )
}

export default HeaderSocials