import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='news-letter anim-fade'>
        <h1 className='anim-up'>Get exclusive offers in your inbox</h1>
        <p className='anim-up'>Subscribe to our newsletter and stay updated</p>
        <div className='anim-up'><input type='email' placeholder='Your email address'/>
             <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter