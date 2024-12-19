import React from 'react'
import footerimg from '../assets/images/footer-img.png'

const Footer = () => {
  return (
    <>
      <footer>
          
          <div className="container-box-footer">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-5 row-cols-sm-1">
              <div className="col">
                <div className="footer-box" id="box1">
                  <h5>Got questions?</h5>
                  <a href="#">support@plixi.com</a>
                </div>
              </div>
              <div className="col">
                <div className="footer-box" id="box2">
                  <h5>Platform</h5>
                  <ul>
                    <li>Instagram Bot</li>
                    <li>Instagram Manager</li>
                    <li>Instagram Tools</li>
                    <li>Instagram Analytics</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-box" id="box3">
                  <h5>Compare</h5>
                  <ul>
                       
                        <li>SimplyGram Alternative</li>
                        <li>Nitreo Alternative</li>
                        <li>Ingramer Alternative</li>
                        <li>Path Social Alternative</li>
                        <li>Upleap Alternative</li>
                        <li>Socialmonk Alternative</li>
                        <li>Kicksta Alternative</li>
                        <li>Jarvee Alternative</li>
                        <li>Instagress Alternative</li>
                        <li>Inflact Alternative</li>
                        <li>Social Boost Alternative</li>
                        <li>See All Comparisons</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-box" id="box4">
                  <h5>Company</h5>
                  <ul>
                            
                            <li>Our Ethical Commitment</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Status Page</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-box" id="box5">
                  <h5>Instagram Tools</h5>
                  <ul>
                               
                                <li>Instagram Engagement</li>
                                <li>Calculator</li>
                                <li>Instagram Tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           


           <div className="footer-img-box">
            <img src={footerimg} alt="" />
           </div>
      <div className="footer-bottom">
        <p>©2024 Plixi. Made with ❤️ in San Francisco, CA</p>
        
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        
        <div className="social-media">
          <a style={{color: '#BBCBD8',textDecoration: 'none'}} href="https://twitter.com/Plixi" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
