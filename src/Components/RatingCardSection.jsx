import React from "react"

const RatingCardSection = () => {
  return (
    <div className="rating-card-section">
      <h1 className="rating-card-section-title">
        Trusted and used for organic Instagram Growth <br />
        by leading brands, businesses, and influencers:
      </h1>
      <div className="row">
        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
          <div className="card  ml-md-5 " >
            <h1>55,000+</h1>
            <p>Happy Users</p>
          </div>
        </div>
        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6">
          <div className="card " >
            <h1>~4,500</h1>
            <p>New Followers per  <br />Month on Average</p>
          </div>
        </div>
        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 ml-md-5">
          <div className="card  " >
            <h1>7M+</h1>
            <p>Total Hours Saved</p>
          </div>
        </div>
        <div className="col-lg-4 col-xl-3 col-md-4 col-sm-6 ">
          <div className="card mt-lg-5 mt-md-5 mt-xl-0 " >
            <h1>9.8/10</h1>
            <p>Net Promoter® Score</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingCardSection
