    import React, { useState, useEffect } from 'react';
    import Carousel from 'react-bootstrap/Carousel';
    import testimonialImg from '../assets/images/testimonial-img.jpeg';
    
    function Slider2() {
      const [cardsPerSlide, setCardsPerSlide] = useState(3);
    
      useEffect(() => {
        const updateCardsPerSlide = () => {
          const width = window.innerWidth;
          if (width < 576) {
            setCardsPerSlide(1);
          } else if (width >= 576 && width <= 768) {
            setCardsPerSlide(2);
          }
          
           else if (width > 768 && width <= 1000) {
            setCardsPerSlide(2);
          } else {
            setCardsPerSlide(4);
          }
        };
    
        updateCardsPerSlide();
        window.addEventListener('resize', updateCardsPerSlide);
        return () => window.removeEventListener('resize', updateCardsPerSlide);
      }, []);
    
      const testimonials = Array.from({ length: 12 }, (_, index) => (
        <div className="cardo" key={index}>
          <img loading="lazy" src={testimonialImg} alt={`Testimonial ${index + 1}`} />
        </div>
      ));
    
      const groupedTestimonials = [];
      for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
        groupedTestimonials.push(testimonials.slice(i, i + cardsPerSlide));
      }
    
      return (
        <div id="slider2-container">
          <h1 id="video-testimonial-title">Video Testimonial</h1>
          <Carousel id="testimonial-carousel" interval={null} slide>
            {groupedTestimonials.map((group, idx) => (
              <Carousel.Item key={idx}>
                <div className="cardo-container ">
                  {group}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <style jsx>{`
            #slider2-container {
              padding: 2rem;
            }
            #video-testimonial-title {
              text-align: center;
              margin-bottom: 1.5rem;
              font-size: 2rem;
            }
            .cardo-container {
              display: flex;
              justify-content: ${cardsPerSlide === 2 ? 'space-between' : 'center'};
              align-items: center;
              gap: 1rem;
            }
            .cardo {
              flex: 1;
              max-width: ${cardsPerSlide === 1
                ? '90%'
                : cardsPerSlide === 2
                ? '45%'
                : '30%'};
              border-radius: 13px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .cardo img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }
            @media (max-width: 575.98px) {
              .cardo-container {
                flex-direction: column;
              }
              .cardo {
                max-width: 90%;
              }
            }
            @media (min-width: 576px) and (max-width: 767.98px) {
              .cardo-container {
                flex-direction: row;
              }
              .cardo {
                max-width: 45%;
              }
            }
            @media (min-width: 768px) {
              .cardo-container {
                flex-direction: row;
              }
              .cardo {
                max-width: 30%;
              }
            }
               @media (min-width: 1000px) {
              .cardo-container {
              justify-content: space-between;
                flex-direction: row;
              }
              .cardo {
                max-width: 30%;
              }
            }
          `}</style>
        </div>
      );
    }
    
    export default Slider2;