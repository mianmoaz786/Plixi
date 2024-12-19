import React, { useState } from 'react'
import sliderImg1 from '../assets/images/slider-img-1.png'
import sliderImg2 from '../assets/images/slider-img-2.png'
import sliderImg3 from '../assets/images/slider-img-3.png'
import sliderImg4 from '../assets/images/slider-img-4.png'
import sliderImg5 from '../assets/images/slider-img-5.png'
import sliderImg6 from '../assets/images/slider-img-6.png'
import sliderImg7 from '../assets/images/slider-img-7.png'
import sliderImg8 from '../assets/images/slider-img-8.png'
import Slider2 from './Slider2'
const SliderSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <section className='slider-section'>
      <h1 className='slider-title'>Trusted by 35,000+ Instagrammers, agencies & businesses</h1>
      
      <div 
        id="carouselExample" 
        className="carousel slide" 
        data-ride="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner">
          <div className="caro d-flex align-items-center">
            {[...Array(3)].flatMap(() => 
              [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5, sliderImg6, sliderImg7, sliderImg8].map((imgSrc, index) => (
                <img key={index} src={imgSrc} className="d-block" alt={`Slide ${index + 1}`} data-cid={`cid-${index + 1}`} />
              ))
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .carousel-inner {
          display: flex;
          overflow: hidden;
          width: 100vw;
          height: 20vh;
         
      
        }
        .caro {
          display: flex;
          width: calc(300vw); /* Triple the width to accommodate three sets of images */
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          height: 100%;
          animation: scroll 30s linear infinite;
          animation-play-state: ${isHovered ? 'paused' : 'running'};
        }
        .caro img {
          width: 12.5%; /* Adjusted to fit 8 images in the viewport */
          height: auto;
          object-fit: cover;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100vw); /* Move by one full viewport width */
          }
        }
      `}</style>


      <Slider2/>
      </section>
    </>
  )
}

export default SliderSection
