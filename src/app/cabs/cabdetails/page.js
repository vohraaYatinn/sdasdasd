"use client";
import React from "react";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import Footer from "@/components/footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import car1 from "@/../public/image/car1.png";
import car2 from "@/../public/image/car2.png";
import car3 from "@/../public/image/car3.png";
import Image from "next/image";
import "@/app/cabs/cabdetails/page.css";
import "@/components/stylebook/Footer.css";
import "@/app/activities/activities-details/activity-detail.css";
import SelectComponent from "@/uitils/SelectComponent";

const CabDetail = () => {
  return (
    <div className="cab-details-search">
      <Topbar />
      <Header />
      <Breadcrumb pagename="Cab Detail" pagetitle="Cab Detail" img={"/assets/cabbg.png"} />

      <div className="car-grid container pt-10">
        <Image src={car3} className="big-car car" />
        <Image src={car1} className="car" />
        <Image src={car2} className="yellow car" />
      </div>

      <div className="container">
        <div className="cuscard mt-10">
          <p className="title">Airport Transfers From Dubai to Abu Dhabi</p>
          <p className="review">52 Reviews</p>

          <p className="floater">
            <div className="review">
              from:
              <h5 className="price">AED 474.00</h5>
            </div>
            <button>Book Now</button>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="cuscard mt-10">
        <p className="review"> <img src="/image/icons/image.png" alt="Operating Hours" className="icons"/>Operating Hours</p>
<p className="review"> <img src="/image/icons/image (1).png" alt="Instant Confirmation" className="icons"/>Instant Confirmation</p>
<p className="review"> <img src="/image/icons/image (2).png" alt="Mobile Voucher Accepted" className="icons"/>Mobile Voucher Accepted</p>
<p className="review"> <img src="/image/icons/image (3).png" alt="Free Cancellation 24 hours Prior" className="icons"/>Free Cancellation 24 hours Prior</p>
<p className="review"> <img src="/image/icons/image (4).png" alt="English" className="icons"/>English</p>
<p className="review"> <img src="/image/icons/image (5).png" alt="Transfer Options Available" className="icons"/>Transfer options Available</p>
<p className="review link"> <img src="/image/icons/image (6).png" alt="Google Map" className="icons"/>Google Map</p>

        </div>
      </div>

      <div className="container col-lg-12 mb-5">
        <div className="activities-details-block">
          <div className="act-block-header pt-3">
            <h3>Airport Transfers From Dubai to Abu Dhabi Price & Offers</h3>
          </div>
          <div className="act-dtl-table">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tour Option</th>
                    <th>Extra Services</th>
                    <th>Tour Date</th>
                    <th>Adult</th>
                    <th>Child</th>
                    <th>Infant</th>
                    <th>Total amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="checkbox-wrapper-46">
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["1"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td className="act-dtl-price">AED 99.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox-wrapper-46">
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Abu Dhabi City Hotels to Dubai Airport</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["1"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td className="act-dtl-price">AED 99.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox-wrapper-46">
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["1"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td className="act-dtl-price">AED 99.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox-wrapper-46">
                        <input type="checkbox" id="cbx-46" class="inp-cbx" />
                        <label for="cbx-46" class="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>Dubai Airport To Abu Dhabi City Hotels</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Night Food"]}
                      />
                    </td>
                    <td>
                      <div className="act-date-ui">
                        <input type="date" value="2013-01-08" />
                      </div>
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["1"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td>
                      <SelectComponent
                        options={["1", "2", "3"]}
                        placeholder={["0"]}
                      />
                    </td>
                    <td className="act-dtl-price">AED 99.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="act-table-ftr container mb-4">
              <span>More Activities</span>
              <button style={{margin:"1rem"}}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>Airport Transfers From Dubai to Abu Dhabi Overview</h3>
          </div>
          <div className="act-block-cnt">
            <p>
              It’s totally stress-free to travel between Dubai Airport and Abu
              Dhabi. Simply reserve our roundtrip airport transfers to avoid all
              tensions of hiring a cab! At Rayna Tours, we provide the most
              convenient and cost-effective transport options to and from Dubai
              International Airport to your Abu Dhabi hotel, allowing you to
              start and end your Abu Dhabi trip in the most unworried way. To
              cater to all your airport arrival and departure needs, we have a
              brand new fleet of comfortable, large and luxury vehicles, all
              maneuvered by a team of highly friendly and professional drivers.
              Get in touch with us for more details.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>Airport Transfers From Dubai to Abu Dhabi Inclusions</h3>
          </div>
          <div className="act-block-cnt">
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
              <p>
              Pick up from Dubai Airport and Drop off at Abu Dhabi (If option
              selected)
            </p>
            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
              <p>Transfers in a well-maintained air-conditioned vehicle.</p>

            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>

              <p>
              Pick up from Abu Dubai and Drop off at the Dubai Airport (If
              option selected)
            </p>
            </div>
           
        
          </div>
        </div>
      </div>

      <div className="col-lg-12 mb-5 container">
        <div className="activities-details-block">
          <div className="act-block-header">
            <h3>
              Airport Transfers From Dubai to Abu Dhabi Important Information
            </h3>
          </div>
          <div className="act-block-cnt">
          <div className="flex">
          <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
<p>
              Please carry a valid Id/Passport along with you during the
              transfer.
            </p>
            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
            <p>Please arrive 30 mins prior to the pick up time.</p>
            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
            <p>
            
              Your service will be executed according to your Booking selection.
              You can select both the options if you wish to avail a 2-way
              transfer (Pick up & Drop off)
            </p>
            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
<p>
              Kindly schedule your transfers keeping in mind the traffic
              conditions and your flight timings
            </p>
            </div>
            <div className="flex">
            <svg width="18" height="18" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35984 0.830156C8.51984 0.670156 8.70984 0.590157 8.92984 0.590157C9.14984 0.590157 9.33984 0.670156 9.49984 0.830156C9.65984 0.990156 9.74984 1.19016 9.76984 1.43016C9.78984 1.67016 9.71984 1.87016 9.55984 2.03016L5.05984 7.61016C4.89984 7.81016 4.69984 7.91016 4.45984 7.91016C4.21984 7.91016 4.01984 7.83016 3.85984 7.67016L0.859844 4.67016C0.619844 4.47016 0.539844 4.20016 0.619844 3.86016C0.699844 3.52016 0.899844 3.31016 1.21984 3.23016C1.53984 3.15016 1.81984 3.23016 2.05984 3.47016L4.39984 5.87016L8.35984 0.830156Z" fill="#F1871C"/>
</svg>
            <p>
              Kindly provide detailed information about your flight timings to
              ensure a smooth pickup or drop-off.
            </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default CabDetail;
