import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='news-letter anim-fade'>
        <h1 className='anim-up'>Get Exclusive Offers On Your Email</h1>
        <p className='anim-up'>Susbscribe to our newletter and stay updated</p>
        <div className='anim-up'><input type='email' placeholder='Your Email id'/>
             <button>Susbscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter