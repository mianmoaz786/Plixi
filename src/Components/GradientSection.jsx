import React from "react"
import gradientsectionimg from "../assets/images/gradient-section-img.png"

const GradientSection = () => {
  return (
    <>
      <div className="gradient-section">
        <h1>
          Powerfully-simple unfair advantage in your <br />
          Instagram growth strategy
        </h1>

        <div className="gradient-section-content">
          <div className="gradient-content-box" id="box1">
            <p>
              "Plixi can help you identify and grow <br />
              your followers based on their AI <br />
              engine. Their growth service and <br />
              analytics tools may be the most <br />
              disruptive and far-reaching <br />
              innovation to come out of Instagram <br />
              marketing services in 2023.”
            </p>
          </div>
          <div className="gradient-content-box" id="box2">
            <p>
              “Instagram growth can be a huge <br />
              benefit for your business, but with <br />
              millions of pages competing for likes <br />
              and followers, it’s incredibly difficult <br />
              to stand out. That’s where Instagram <br />
              growth tools like Plixi are innovating <br />
              to level the playing field.”
            </p>
          </div>
          <div className="gradient-content-box" id="box3">
            <p>
              “The best Instagram growth strategy <br />
              is all about creating micro- <br />
              connections that gradually build into <br />
              an active and engaged community of <br />
              followers. Finding and engaging with <br />
              these connections is the key to <br />
              creating organic growth on <br />
              Instagram.”
            </p>
          </div>
        </div>


        <p className="sign-up-btn">Sign Up For Plixi</p>

        <img src={gradientsectionimg} alt="" />
        <h2>Trusted by the top marketers.</h2>
      </div>
    </>
  )
}

export default GradientSection
