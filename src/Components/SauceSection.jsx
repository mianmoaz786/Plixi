import React from "react"
import instagramimg from "../assets/images/instagram-icon.png"

const SauceSection = () => {
  return (
    <>
      <div className="sauce-section">
        <div className="sauce-section-title d-flex justify-content-center flex-column align-items-center gap-0">
          <h1>Our Secret Sauce?</h1>
          <h2>
            Patent-pending growth technology <br /> No spam. No bots. No illegal tactics.
          </h2>
        </div>

        <div className="sauce-description d-flex justify-content-center align-items-center flex-column gap-2 text-center">
          <div className="sauce-description-left">
            <p>
              We've developed our growth engine by training ML & deep learning models on 120M+ Instagram data points.{" "}
              <br />
              Our secret sauce is a combination of <span style={{textDecoration: "underline"}}>paid advertising, nano-interactions, niche data clusters and
              real-human activity</span>.
            </p>
          </div>
          <div className="sauce-description-right">
            <p>
              {" "}
              Compared to other growth services, we attract more real Instagram users interested in your account and
              convert them <br />
              to followers, without ever putting your account at any risk of getting banned or flagged.
            </p>
          </div>
        </div>

        <div className="sauce-section-button-cover">
          <button class="sauce-section-button">
            <img loading="lazy" src={instagramimg} alt="Instagram Icon" />Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default SauceSection
