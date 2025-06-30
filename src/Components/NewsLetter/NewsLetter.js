import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Susbscribe to our newletter and stay updated</p>
        <div><input type='email' placeholder='Your Email id'/>
             <button>Susbscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter