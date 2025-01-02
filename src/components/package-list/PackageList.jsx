import React, { useEffect, useState } from "react";
import './PackageList.css';
import { FaStar } from 'react-icons/fa';
import PackageCard from "./PackageCard";

const PackagesList = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [isActive,setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const packages = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      label: "Featured",
      title: "Pepsi Wonders South India Package",
      duration: "6 Days",
      places: ["Goa", "Chennai", "Ooty"],
      inclusions: ["Stay", "Flights", "Transfers"],
      price: "₹54,568",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      title: "Short Getaway to Rameshwaram, Madurai & Kanyakumari",
      duration: "3 Days",
      places: ["Madurai", "Rameshwaram"],
      inclusions: ["Stay", "Transfers"],
      price: "₹25,999",
    },
    {
      id: 3,
      image: "/path/to/image3.jpg",
      title: "Peaceful Ooty Honeymoon",
      duration: "5 Days",
      places: ["Ooty", "Coonoor"],
      inclusions: ["Stay", "Transfers", "Sightseeing"],
      price: "₹42,568",
    },
    {
      id: 4,
      image: "/path/to/image4.jpg",
      title: "South India Retreat",
      duration: "7 Days",
      places: ["Kodaikanal", "Madurai"],
      inclusions: ["Stay", "Flights", "Transfers"],
      price: "₹50,529",
    },
  ];

  const tabs = [
    { id: "all", label: "All Packages (240)" },
    // { id: "honeymoon", label: "Honeymoon (19)" },
    // { id: "pilgrimage", label: "Pilgrimage (18)" },
    // { id: "homestays", label: "HomeStays & More (6)" },
    // { id: "xpress", label: "Xpress holidays (11)" },
  ];

  useEffect(()=>{
    const rangeInput = document.getElementById("rangeInput");
    const rangeValue = document.getElementById("rangeValue");
    
    // Display initial value
    rangeValue.textContent = rangeInput.value;
    
    // Update value dynamically as the slider moves
    rangeInput.addEventListener("input", function() {
      rangeValue.textContent = rangeInput.value;
    });
  },[])



useEffect(()=>{
  const budgetInput = document.getElementById("budgetInput");
  const budgetValue = document.getElementById("budgetValue");
  
  // Display initial value
  budgetValue.textContent = budgetInput.value;
  
  // Update value dynamically as the slider moves
  budgetInput.addEventListener("input", function() {
    budgetValue.textContent = budgetInput.value;
  });
},[])



  return (
    <div className="page">
      <header className="header">
        <h1>Packages List</h1>
      </header>

      <div className="content-package">
        <aside className="sidebar">
          <h3>Filters</h3>



          <div className="filterGroup">
            {/* Duration Section */}
            <h4 className="filter-title">Duration (in Nights)</h4>
            <div class="rangeSlider">
  <input type="range" min="0" max="100000" id="rangeInput" />
  <span id="rangeValue">0</span>
</div>

            <ul>
              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"< 3N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"3N - 5N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"> 5N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Flights Section */}
            <h4>Flights</h4>
            <div className="flightOptions">
              <div className="row-filter">
                <div className={`box ${isActive ? "" : "active-box"}`} onClick={toggleActive}>
                  <p>With Flight (232)</p>
                </div>
                <div className={`box ${isActive ? "active-box" : ""}`} onClick={toggleActive}>
                  <p>Without Flight (207)</p>
                </div>
              </div>
            </div>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Budget Section */}
            <h4 className="filter-title">Budget (per person)</h4>
            <div class="rangeSlider">
  <input type="range" min="0" max="100000" id="budgetInput" />
  <span id="budgetValue">0</span>
</div>
            <ul>
              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"< ₹35,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"₹35,000 - ₹45,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"₹45,000 - ₹55,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"> ₹55,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Hotel Category Section */}
            <h4 className="filter-title">Hotel Category</h4>
            <div className="hotelOptions">
              <div className="row-filter">
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>&lt; 3 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>
                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>3 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>
                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>4 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>

                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>5 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>

                </div>
              </div>
            </div>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Cities Section */}
            <h4 className="filter-title">Cities</h4>
            <br />
            <div className="citiesInput">
              <input type="text" />
            </div>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"Ooty"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Coorg"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Mysore"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Kodaikanal"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li>
                <button className="showMore">Show More</button>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Themes Section */}
            <h4 className="filter-title">Themes</h4>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Culture"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Pilgrimages"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Advenuture"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Wildlife"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li>
                <button className="showMore">Show More</button>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Package Type Section */}
            <h4 className="filter-title">Package Type</h4>
            <div className="packageOptions">
              <div className="row-filter">
                <div className="box">
                  <p>Customizable (263)</p>
                </div>
                <div className="box">
                  <p>Group Package (6)</p>
                </div>
              </div>
            </div>

            <br /><hr style={{ color: "gray" }} /><br />
            {/* Premium Packages Section */}
            <h4 className="filter-title">Premium Packages</h4>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Premium Packages"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
            </ul>
          </div>




        </aside>

        <main className="main">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={selectedTab === tab.id ? "activeTab" : ""}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="sort-button">
            <label htmlFor="sortOptions"><strong>Sorted By:</strong></label>
            <select id="sortOptions" name="sortOptions">
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>



          <div className="packages">



            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>



          </div>
        </main>
      </div>
    </div>
  );
};

export default PackagesList;
