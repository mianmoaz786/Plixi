import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const clients = [
    { id: 1, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 2, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 3, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 4, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 5, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 6, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 7, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 8, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
    { id: 9, name: 'E-commerce', handle: 'Away', memberSince: 'Apr 2020', followers: '563K', growth: '+78k' },
  ];

  return (
    <>
      <section className='client-carousel'>
        <h1>Happy clients results:</h1>
        
        <div 
          id="carouselExample" 
          className="carousel slide" 
          data-ride="carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Slider-1 */}
          
          {/* Slider 1 */}
          <div className="carousel-inner">
            <div className="caro d-flex align-items-center">
              {clients.map(client => (
                <div key={client.id} id={`box-${client.id}`} className="box d-flex flex-column gap-4 ">
                  <div className='d-flex flex-column gap-0 '>
                    <h1 id={`client-name-${client.id}`}>{client.name}</h1>
                    <h2 id={`client-handle-${client.id}`}>{client.handle}</h2>
                  </div>
                  <div className="d-flex  align-items-center justify-content-left gap-5">
                    <div className="d-flex flex-column gap-1 ">
                      <p id={`client-memberSince-${client.id}`}>Member Since</p>
                      <p id={`client-memberSince-value-${client.id}`}>{client.memberSince}</p>
                    </div>
                    <div className="d-flex  align-items-center gap-2">
                      <div className='d-flex flex-column gap-1 mt-1'>
                        <p id={`client-followers-${client.id}`}>Followers</p>
                        <p id={`client-followers-value-${client.id}`}>{client.followers}</p>
                      </div>
                      <div className='d-flex flex-column gap-1 mt-1'>
                        <p id={`client-growth-${client.id}`}>Growth</p>
                        <p id={`client-growth-value-${client.id}`}>{client.growth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .carousel-inner {
            display: flex;
            overflow: hidden;
            width: 1260px;
            height: 215px;
          }
          .caro {
            display: flex;
            width: calc(9 * 392px); /* Adjusted to accommodate nine boxes */
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
            height: 100%;
            animation: scroll 30s linear infinite;
            animation-play-state: ${isHovered ? 'paused' : 'running'};
          }
          .box {
            width: 392px;
            height: 215px;
            padding: 28px 32px;
            border-radius: 10px;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-1664px); /* Move by one full slider width */
            }
          }
        `}</style>


        <div  className='moaz d-flex align-items-center '>
          <div className='d-flex '>
            <span id="check-clients">
              Check 15,000+ more successful clients results or 
            </span>
            <span  id="start-growing" className='text-left '>
             <span style={{paddingLeft: '1rem'}} className='start-growing-text '> Start Growing Your</span>  <br />Instagram
            </span>
          </div>
            <span id="now"> Now</span>
        </div>
      </section>
    </>
  );
}

export default ClientCarousel;
