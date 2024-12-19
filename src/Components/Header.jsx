import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import SecondaryNavbar from './SecondaryNavbar'
import HeaderContent from './HeaderContent'
import bgheader from '../assets/images/header-background.png'
const Header = () => {
  return (
    <>
    <header className='d-flex flex-column relative w-100 h-100 ' style={{position: 'relative', gap: '6rem'}}>
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${bgheader})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.3, zIndex: -1}}></div>
      <div className='navbar p-0 m-0 flex-column gap-4'>
        <PrimaryNavbar/>
        <SecondaryNavbar/>
      </div>
      <HeaderContent />
    </header>
    </>
  )
}

export default Header
