import React from 'react'
import instagramIcon from '../assets/images/instagram-icon.png'
// import headercontentBg from '../assets/images/header-content-bg.png'

const HeaderContent = () => {
  return (
    <>
      <section className='header-content'>
       <div className="header-heading">
        <h1>
        Get Real Instagram Followers
        </h1>
         <h2>
         Using Organic AI-Growth & Automation
         </h2>
       </div>
         <p>
         No bots, no fake followers, no passwords. Gain real targeted followers automatically  <br />
         
         using AI, Instagram Experts and our patent-pending* technology.
         </p>
         <div className="header-content-button">
          <button className='gradient-button'>
          <img loading="lazy" src={instagramIcon} alt="Instagram Icon" style={{ width: '19px', height: '21.71px' }} /> 
          Get Started
          </button>
          <button className='preview'>
            Preview your growth
          </button>
         </div>
         {/* <img src={headercontentBg} alt="" /> */}
         <p className='header-content-features'>
              
                 
                <div className='header-content-features-text d-flex justify-content-center align-items-center gap-3'>  <span>✓ 2-Minutes Setup</span>
                  
                  <span>✓ 100% Growth Guaranteed</span>
                  
                  <span>✓ Rated 4.91/5</span>
                  </div>

                  <div className='header-content-features-box'>
                      
                        <div className="b">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2B11C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <div className="b">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2B11C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <div className="b">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2B11C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <div className="b">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2B11C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <div className="b">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2B11C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                  </div>
              </p>
      </section>
    </>
  )
}

export default HeaderContent
