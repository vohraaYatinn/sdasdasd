import React from 'react'

const PackageCard = () => {
  return (
    <div className="package-card-cover">
    <div className="options-available">
      1 More &nbsp;&nbsp;Option Available
    </div>
    <div className="package-card-1">
      <div className="package-card-1-content"></div>
    </div>
    <div className="package-card-2">
      <div className="package-card-2-content"></div>
    </div>
    <div className="package-card">
      <div className="package-card-img">
        <img src="https://picsum.photos/500/500" alt="" />
      </div>
      <div className="package-card-title">
        <p className="package-card-title-1">Most Wanted South India Package</p>
        <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
        <div className="duration">5N/6D</div>
      </div>
      <div style={{ padding: "0 10px" }}>
        <hr style={{ color: "gray" }} />
        <br />
      </div>
      <div className="package-card-top-facilities">
        <div className="col-1">
          <li>Round Trip Flights</li>
          <li>3 Star Hotels</li>
          <li>3 4 Activities</li>
        </div>
        <div className="col-1">
          <li>Intercity Car Transfers</li>
          <li>Airport Transfers</li>
          <li>Selected Meals</li>
        </div>
      </div>
      <div className="package-card-text">
        <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
        <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
        <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
      </div>
      <div className="package-card-price-cover">
        <div className="package-card-price">
          <p>This price is lower than the average price in December</p>
          <div>
            <p><strong>₹56,886</strong> /Person</p>
            <p>Total Price ₹1,13,772</p>
          </div>
        </div>
      </div>
      <div className="package-card-offer">
        Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
      </div>
    </div>
  </div>
  )
}

export default PackageCard