import React from 'react'
import primarynavbar from '../assets/images/primary-navbar.png'

const PrimaryNavbar = () => {
  return (
    <>
      <div className='primarynavbar'>
        <img loading="lazy" src={primarynavbar} alt="logo-plixi" />
      </div>
    </>
  )
}

export default PrimaryNavbar
