import React from 'react';

const CardSection = () => {
  return (
    <>
      <section className='card-section'>
        <div className="card-header">
          <h1 className='card-header-title'>
            The #1 Rated Instagram Growth Service
          </h1>
          <p>Plixi helps you get more Instagram followers, likes and comments (and a bunch of other stuff) 10x faster.</p>
        </div>

        <div className="container">
          <div className="row">
            {[...Array(4)].map((_, index) => (
                  // Start of Selection
                  <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 pl-sm-5">
                <div className="card">
                  {index === 0 && (
                    <>
                      {/* Card 0: id="card-0-div-1", id="card-0-div-2", id="card-0-div-3", id="card-0-div-4" */}
                      <div id={`card-${index}-div-1`}>
                        <h1>Auto Grow <span className="icon">🌟</span></h1>
                      </div>
                      <p id="para">Just 5 minutes of setup gets <br />  your 730 hours  of growth each <br /> month All automatic</p>
                      <div id={`card-${index}-div-2`}>
                        
                        <p>24/7 Growth Engine</p>
                      </div>
                      <div id={`card-${index}-div-3`}>
                        <p className='icon-para d-flex gap-2'><span className="icon">✔️</span>Ai Match1 </p>
                      </div>
                      <div id={`card-${index}-div-4`}>
                        <p className='icon-para d-flex gap-2'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <button>Get Started</button>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      {/* Card 1: id="card-1-div-1", id="card-1-div-2", id="card-1-div-3", id="card-1-div-4" */}
                      <div id={`card-${index}-div-1`}>
                        <h1>Auto Target <span className="icon">🎯</span></h1>
                      </div>
                      <p id="para">Just 5 minutes of setup gets <br />  your 730 hours  of growth each <br /> month All automatic</p>
                      <div id={`card-${index}-div-2`}>
                        <span className="icon">✔️</span>
                        <p>Ai Targeting</p>
                      </div>
                      <div id={`card-${index}-div-3`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <div id={`card-${index}-div-4`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <button>Get Started</button>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      {/* Card 2: id="card-2-div-1", id="card-2-div-2", id="card-2-div-3", id="card-2-div-4" */}
                      <div id={`card-${index}-div-1`}>
                        <h1>Live Reports <span className="icon">📊</span></h1>
                      </div>
                      <p id="para">Just 5 minutes of setup gets <br />  your 730 hours  of growth each <br /> month All automatic</p>
                      <div id={`card-${index}-div-2`}>
                        <span className="icon">✔️</span>
                        <p>Auto Targeting</p>
                      </div>
                      <div id={`card-${index}-div-3`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <div id={`card-${index}-div-4`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <button>Get Started</button>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      {/* Card 3: id="card-3-div-1", id="card-3-div-2", id="card-3-div-3", id="card-3-div-4" */}
                      <div id={`card-${index}-div-1`}>
                        <h1>Ai Match <span className="icon">🤖</span></h1>
                      </div>
                      <p id="para">Just 5 minutes of setup gets <br />  your 730 hours  of growth each <br /> month All automatic</p>
                      <div id={`card-${index}-div-2`}>
                        <span className="icon">✔️</span>
                        <p>Auto Targeting</p>
                      </div>
                      <div id={`card-${index}-div-3`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <div id={`card-${index}-div-4`}>
                        <p className='icon-para d-flex gap-3'> <span className="icon">✔️</span>Ai Match1</p>
                      </div>
                      <button>Try Ai Match</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardSection;
