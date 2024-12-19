    import React, { useState, useEffect } from 'react'
    import plixiLogo from '../assets/images/plixi logo.png'
    
    const SecondaryNavbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }
    
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])
    
      return (
        <>
          <nav className='secondarynavbar'>
            <div className="nav-left">
              <img src={plixiLogo} alt="Plixi Logo" />
              <input className='nav-input' type="text" placeholder='Your Instagram Username' />
              {windowWidth <= 1199 && windowWidth >= 320 && (
                <button 
                  style={{
                    position: 'absolute',
                    top: '69%',
                    right: '6%',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                    width: '50px',
                    height: '30px',
                    background: 'transparent'
                  }}
                  className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <span 
                    style={{
                      backgroundColor: 'purple',
                      width: '100%',
                      height: '4px',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
                    }} 
                    className="burger-bar"
                  ></span>
                  <span 
                    style={{
                      backgroundColor: 'purple',
                      width: '100%',
                      height: '4px',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      opacity: isMenuOpen ? '0' : '1',
                    }} 
                    className="burger-bar"
                  ></span>
                  <span 
                    style={{
                      backgroundColor: 'purple',
                      width: '100%',
                      height: '4px',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)',
                    }} 
                    className="burger-bar"
                  ></span>
                </button>
              )}
            </div>
            {windowWidth >= 1200 && (
              <div className="right-nav">
                <ul>
                  <li>
                    <a href="/">PRODUCTS</a>
                  </li>
                  <li>
                    <a href="/">PRICING</a>
                  </li>
                  <li>
                    <a href="/">TOOLS</a>
                  </li>
                  <li>
                    <a href="/">ABOUT</a>
                  </li>
                </ul>
                <div className='nav-btn'>
                  <button className='nav-btn-signup'>
                    SIGN UP
                  </button>
                  <button className='get-started'>
                    GET STARTED
                  </button>
                </div>
              </div>
            )}
            {windowWidth <= 1199 && windowWidth >= 320 && (
              <div 
                className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
                style={{
                  
                  right: isMenuOpen ? '0' : '-100%',
                  
                  transition: 'right 0.3s ease-in-out',
                  boxShadow: isMenuOpen ? '-2px 0 5px rgba(0,0,0,0.3)' : 'none',
                 
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center',display:'flex',flexDirection:"column",gap:"2rem" }}>
                  <li style={{ margin: '1rem 0' }}>
                    <a href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1.2rem' }}>PRODUCTS</a>
                  </li>
                  <li style={{ margin: '1rem 0' }}>
                    <a href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1.2rem' }}>PRICING</a>
                  </li>
                  <li style={{ margin: '1rem 0' }}>
                    <a href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1.2rem' }}>TOOLS</a>
                  </li>
                  <li style={{ margin: '1rem 0' }}>
                    <a href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1.2rem' }}>ABOUT</a>
                  </li>
                </ul>
                <div className='nav-btn' style={{ display: 'flex', flexDirection: 'column', gap: '2rem',marginTop:"1rem" }}>
                  <button className='nav-btn-signup' style={{ width: '150px', padding: '0.5rem', borderRadius: '5px', border: '1px solid #000' }}>
                    SIGN UP
                  </button>
                  <button className='get-started' style={{ width: '150px', padding: '0.5rem', borderRadius: '5px', backgroundColor: '#000', color: '#fff', border: 'none' }}>
                    GET STARTED
                  </button>
                </div>
              </div>
            )}
          </nav> 
        </>
      )
    }
    
    export default SecondaryNavbar
