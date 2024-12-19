import React from "react"
import vector from "../assets/images/Vector.jpg"
import arrowforward from "../assets/images/farword-arrow.png"
import orange from "../assets/images/orange.png"
import purplevector from "../assets/images/purple-vector.png"
import enterpreneur from "../assets/images/enterprerur.png"
import vipimgbox2 from "../assets/images/car-vip-img.png"
import cardvipimg2 from "../assets/images/card-vip-img2.png"
import cardvipimg3 from "../assets/images/card-img-3.png"
const TransparentSection = () => {
  return (
    <>
      <div className="transparent-section d-flex flex-column ">
        <div className="box">
          <div className="box-content">
            <div className="box-content-title">
              <img loading="lazy" style={{ width: "18px", height: "16px" }} src={vector} alt="vector" /> <h1>Auto Growth</h1>
            </div>
            <div className="box-content-description ">
              <h2>
                Get more real Instagram followers <br />
                automatically with our AI growth engine
              </h2>
            </div>
            <p>
              Get more real Instagram followers, likes and organic <br />
              engagement from your target audience with cutting-edge <br />
              Artificial Intelligence models. Still think you need Instagram <br />
              bots to get real growth?
            </p>
            <button className="btn-box d-flex items-center justify-center gap-2">
              See how Auto Growth works{" "}
              <img loading="lazy" style={{ width: "12.76px", height: "7.9px", marginTop: "8px" }} src={arrowforward} alt="arrow-up" />
            </button>
          </div>
          <div className="right"></div>
        </div>
        {/* Box 2 */}
        <div className="box">
          <div className="box-content">
            <div className="box-content-title">
              <img loading="lazy" style={{ width: "18px", height: "16px" }} src={orange} alt="orange" />{" "}
              <h1 style={{ color: "#FF6436" }}>Analytics</h1>
            </div>
            <div className="box-content-description ">
              <h2>
                Boost and Optimize results with your <br />
                own team of Instagram growth experts
              </h2>
            </div>
            <p>
              Get your own 24/7 dedicated team of Instagram growth <br />
              experts and let us do all the work for you. Your team will <br />
              monitor and manage your account so you can focus on <br />
              bigger things.
            </p>
            <button className="btn-box d-flex items-center justify-center gap-2">
              Get your own Instagram Expert{" "}
              <img style={{ width: "12.76px", height: "7.9px", marginTop: "8px" }} src={arrowforward} alt="" />
            </button>
          </div>
          <div className="right"></div>
        </div>
        {/* box-3  */}
        <div className="box">
          <div className="box-content">
            <div className="box-content-title">
              <img loading="lazy" style={{ width: "18px", height: "16px" }} src={purplevector} alt="purple-vector" />{" "}
              <h1 style={{ color: "#8455D0" }}>Experts</h1>
            </div>
            <div className="box-content-description ">
              <h2>
                Get more real Instagram followers <br />
                automatically with our AI growth engine
              </h2>
            </div>
            <p>
              Get more real Instagram followers, likes and organic <br />
              engagement from your target audience with cutting-edge <br />
              Artificial Intelligence models. Still think you need Instagram <br />
              bots to get real growth?
            </p>
            <button className="btn-box d-flex items-center justify-center gap-2">
              See how Auto Growth works{" "}
              <img loading="lazy" style={{ width: "12.76px", height: "7.9px", marginTop: "8px" }} src={arrowforward} alt="arrow-farword" />
            </button>
          </div>
          <div className="right"></div>
        </div>
        {/* box 4  */}
        <div className="box">
          <div className="box-content">
            <div className="box-content-title">
              <img loading="lazy" style={{ width: "18px", height: "16px" }} src={purplevector} alt="purple-vector" />{" "}
              <h1 style={{ color: "#8455D0" }}>Cloud</h1>
            </div>
            <div className="box-content-description ">
              <h2>
                Achieve next-level growth with AI- <br />
                Powered Instagram Automation Tools & <br />
                Insights
              </h2>
            </div>
            <p>
              Step up your Instagram success by boosting your Instagram <br />
              growth organically. Access growth hacks, Instagram <br />
              automation tools, statistics and tips, all tailored to your <br />
              page and niche.
            </p>
            <button className="btn-box d-flex items-center justify-center gap-2">
              Get Beta Access to Cloud{" "}
              <img loading="lazy" style={{ width: "12.76px", height: "7.9px", marginTop: "8px" }} src={arrowforward} alt="arrow-farword" />
            </button>
          </div>
          <div className="right"></div>
        </div>

       {/* V.I.P  */}

         
          <div className="vip-section h-auto  ">
            <div className="row gx-0">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div id="box-1" className="card-vip">
                  {/* Card Content */}
                  <img loading="lazy" src={enterpreneur} alt="enterpreneur" />
                  <h1>"Plixi Is The Best Instagram Tool  <br />
                  for Organic Results"</h1>
                  <h5>– Entrepreneur.com</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div id="box-2" className="card-vip">
                  {/* Card Content */}
                  <img loading="lazy" style={{width:"147.35px",height:"147.35px"}} src={vipimgbox2} alt="vip-img-box" />
                  <h5>4.84/5</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  mt-md-5 mt-lg-0">
                <div id="box-3" className="card-vip">
                  {/* Card Content */}
                  <img loading="lazy" style={{width:"147.35px",height:"51.1px"}} src={cardvipimg2} alt="vip-img-2" />
                  <h3>
                  “The Best Instagram Bot and <br />
                  Growth Service in 2023”
                  </h3>
                  <p>– SocialMediaExplorer</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  mt-md-5 mt-xl-0">
                <div id="box-4" className="card-vip">
                  {/* Card Content */}
                  <img loading="lazy" src={cardvipimg3} alt="vip-img-3" />
                  <h3>
                  “Plixi is a must have for any <br />
                  Instagram marketer”
                  </h3>
                  <p>– Influencive</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default TransparentSection
