import React from 'react'
import reviewinputbtn from '../assets/images/input-review-img.png'

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h1>Frequently Asked <br />
      Questions</h1>
      <div className="review-section-content">
        <div className="review-section-content-left">

          <p>Can’t find what you are looking for?</p>
          <span>Email us at <a href="mailto:support@plixi.com">support@plixi.com</a></span>

        </div>
        <div className="review-section-content-right">

          <button><img src={reviewinputbtn} alt="" /></button>

          <div className="review-section-content-right-content">
            <h1>Who should use Plixi?</h1>

            <p>
           
Plixi is for anyone who wants to grow their Instagram account organically. <br />
<span style={{fontWeight: 'bold',color: 'black'}}>What is required to use Plixi?</span>
Whether you’re a business, influencer, or just someone who wants to grow their <br />
personal account, Plixi is the best Instagram growth service for you. <br />
All you need is an Instagram account. You can use Plixi on your personal account, <br />
<span style={{fontWeight: 'bold',color: 'black'}}>How many followers can I get with Plixi?</span>
business account, or even an influencer account. You can also use Plixi on <br />
multiple accounts at once. <br />
Plixi is designed to help you grow your account organically. We don’t use bots or <br />
<span style={{fontWeight: 'bold',color: 'black'}}>Can I use Plixi on multiple accounts?</span>
fake accounts to grow your account. Instead, we use a combination of organic <br />
growth strategies to help you grow your account naturally. This means that you <br />
Yes! You can use Plixi on as many accounts as you want. You can even use Plixi on <br />
can expect to grow your account by at least 1000 followers per month. <br />
<span style={{fontWeight: 'bold',color: 'black'}}>Can I use Plixi </span>on my business account?







            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
