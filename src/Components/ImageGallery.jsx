import React from 'react';
import heroimg from '../assets/images/image-hero-1.png'

const ImageGallery = () => {
  return (
    <>
      <section className='image-gallery '>

        <img loading="lazy" className='hero-img' src={heroimg} alt="" />
      

        
      </section>

    </>
  );
};

export default ImageGallery;
