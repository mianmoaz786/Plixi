import React from 'react'
import ImageGallery from './ImageGallery'
import SliderSection from './SliderSection'
import GrowthSection from './GrowthSection'
import CardSection from './CardSection'
import ClientCarousel from './ClientCarousel'
import RatingCardSection from './RatingCardSection'
import SauceSection from './SauceSection'
import TransparentSection from './TransparentSection'
import GradientSection from './GradientSection'
import ReviewSection from './ReviewSection'
import InstagramSection from './InstagramSection'
import Joiningsection from './Joiningsection'
import LastSection from './LastSection'
import '../assets/styles/sass/main.scss'
const Main = () => {
  return (
    <main  className='main d-flex flex-column ' >
      <ImageGallery/> 
      <SliderSection/>
      <CardSection/>
      <GrowthSection/>
      <ClientCarousel/>
      <RatingCardSection/>
      <SauceSection/>
      <TransparentSection/>
      <GradientSection/>
      <ReviewSection/>
      <InstagramSection/>
      <Joiningsection/>
       <LastSection/>
      
    </main>
  )
}

export default Main
