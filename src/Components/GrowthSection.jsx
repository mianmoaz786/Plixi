import React from 'react'
import contentImg from '../assets/images/content-img.png'
const GrowthSection = () => {
  return (
    <>
      <section className='growth-section'>
        <h1>GROWTH PREVIEW</h1>
        <h2>Think you need bots to grow? Think again! <br />
        See what Plixi can do:
        </h2>
       <div className='input-container'>
        <div className="input">
          <input type="text" placeholder='Enter Instagram Account' />
         <button>Previous Growth</button>
        </div>
        <div className='content'>
          <p>Used 28,891 times today</p>
          <img loading="lazy" src={contentImg} alt="" />
        </div>
        </div>


      </section>
    </>
  )
}

export default GrowthSection
