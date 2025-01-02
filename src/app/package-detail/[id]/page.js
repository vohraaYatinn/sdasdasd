

"use client"
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from '@/components/common/Breadcrumb'
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Topbar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer3";
import '@/components/stylebook/Footer.css'
import "./package-details-page.css"
import Newslatter from "@/components/common/Newslatter";
import "./activites-breadcrum.css"
import StarRating from "@/components/common/StarRating";
import { buyFunction, countryCodes, customLabels, sendEmail } from "@/hooks/CommonFunctions";
import ThankYouModal from "@/components/common/ThankYouModal";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import useAxios from "@/network/useAxios";
import { getSinglePackageById } from "@/urls/urls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState("AE");
  const route = useRouter()
// localhost:3000/package-detail/10?category=electronics&price=1000
  // const searchParams = useSearchParams();
  // const category = searchParams.get('category');
  // const price = searchParams.get('price');
  // const showToasts = () => {
  //   toast.info('Info: Lorem ipsum dolor', {
  //     className: 'toast-info',
  //   });

  //   toast.warning('Warning: Lorem ipsum dolor', {
  //     className: 'toast-warning',
  //   });
  //   toast.success('Success: Lorem ipsum dolor', {
  //     className: 'toast-success',
  //   });
  // };
  const [
    appointmentsCancelResponse,
    appointmentsCancelError,
    appointmentsCancelLoading,
    appointmentsCancelFetch,
  ] = useAxios();
  const pathname = usePathname();

  const id = pathname.split('/').pop(); // Assuming `/package-detail/[id]`

  const [data, setData] = useState()
  const fetchActivityByIdfunction = () => {
    appointmentsCancelFetch(getSinglePackageById({},id ));
  };
  useEffect(()=>{
    fetchActivityByIdfunction()
  },[id])
  useEffect(()=>{
    setData(appointmentsCancelResponse?.data)
    console.log(appointmentsCancelResponse?.data)
  },[appointmentsCancelResponse])
  useEffect(()=>{
    if(appointmentsCancelError){

    }
  },[appointmentsCancelError])


  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerMode: true, // Enable center mode
    centerPadding: "0px", 
    arrows: false,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginRight: '-10px',
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '-10px',
        
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    responsive: [

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px", 

        }}
  
  
    ],
  };
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/activities/banner.png",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "", // Default country code
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.phone.trim() || !/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number (7-15 digits) is required.";
    }
    else if (!formData.countryCode) {
      newErrors.phone = "Country code is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log(selected)
      sendEmail(formData?.fullName, formData?.email, formData?.countryCode + formData?.phone, data?.name, formData?.message)
      console.log("Form submitted successfully:", formData);
      setShowModal(true)

      // Reset form or handle the successful form submission
      setFormData({ fullName: "", email: "", countryCode: "+1", phone: "", message: "" });
      setErrors({});

    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Package Details" pagetitle="Package Details" />
      <div className="package-details-area mb-120">
        <div className="container">
          <div className="row">
          <div className="co-lg-12">
              <div className="package-img-group" style={{
                marginBottom: "35px"
              }}>
                                     <Slider {...sliderSettings}  className="package-page-img-crousel">
        
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-1.png" alt="" />
                        </div>
                      </div>
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-2.png" alt="" />
                        </div>
                      </div>
                                     <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-3.png" alt="" />
                        </div>
                      </div>



</Slider>
                <div className="row align-items-center g-3 package-page-img-crousel-on-large">
                  <div className="col-lg-9" style={{
                    marginTop: "0rem",
                    padding: "0rem"

                  }}>
                    <div className="gallery-img-wrap first-wrap-image flip-image-check" style={{
                      marginTop: "0rem",
                      padding: "0rem"
                    }}>
                      <img src="/assets/img/activities/inner-banner-1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 h-100" style={{
                    marginTop: "0rem"
                  }}>
                    <div className="row g-3 h-100 ">
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/activities/inner-banner-3.png" alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="others-image-wrap d-none">
            <a href="assets/img/innerpage/ski-touring-01.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-01.jpg" alt="" /></a>
            <a href="assets/img/innerpage/ski-touring-02.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-02.jpg" alt="" /></a>
            <a href="assets/img/innerpage/ski-touring-03.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-03.jpg" alt="" /></a>
            <a href="assets/img/innerpage/ski-touring-04.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-04.jpg" alt="" /></a>
            <a href="assets/img/innerpage/ski-touring-05.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" /></a>
          </div>
          <div className="row g-xl-4 gy-5 main-package-details-div">
            <div className="col-xl-8">

              <h2>{data?.name}


              </h2>

              <ul className="tour-info-metalist">
                <li>
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                    </path>
                  </svg>
                  {data?.duration}{" "}{data?.durationType}
                </li>

              </ul>
              <p className="para-activity">{data?.description}





              </p>

              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                {data?.Highlights.map((item, index) => {
  return (
    <li key={index}>
      <span className="activity-back-icon">
        <i className="bi bi-check" />
      </span>
      {item}
    </li>
  );
})}


                
                </ul>
              </div>
              <h4 className="para-highlight">Good To Know </h4>
              <div className="includ-and-exclud-area mb-20 good-to-know">
                <ul>
                {data?.goodToKnow.map((item, index) => {
  return (
    <>
    <li><b className="bold-activity">{item?.label}:</b> {item?.answer}
                  </li>
                 {index != (data?.goodToKnow?.length -1) && 
                  <br />
                }
                  </>
  );
})}

              
                </ul>

              </div>
              <h4 className="para-highlight">Included and Excluded </h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                {data?.included.map((item, index) => {
  return (
    <li key={index+100}><i className="bi bi-check-lg" />{item}
                  </li>
  );
})}
                {data?.excluded.map((item, index) => {
  return (
    <li key={index+100}><i className="bi bi-x-lg" /> {item}
                  </li>
  );
})}

        
                </ul>

              </div>

              <h4>Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                <li><b className="bold-activity">Pick-Up From Hotel Or Accommodation:</b> Begin your journey with a convenient pick-up from your hotel or accommodation. Our comfortable, air-conditioned vehicle and friendly driver are ready to transport you to an exciting day of exploration.
                </li>

                <div className="accordion" id="tourPlan">
                  {/* 1st Activity */}
                  {data?.Itinerary?.map((item, index) => (
  <div className="accordion-item" key={index}>
    <h2 className="accordion-header" id={`heading${index}`}>
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${index}`}
        aria-expanded={index === 0} // Open the first item by default
        aria-controls={`collapse${index}`}
      >
        <span style={{ minWidth: "180px" }}>{item.label}</span> {item.heading}:
      </button>
    </h2>
    <div
      id={`collapse${index}`}
      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
      aria-labelledby={`heading${index}`}
      data-bs-parent="#tourPlan"
    >
      <div className="accordion-body">
        <ul>
          <li>{item.answer}</li>
        </ul>
      </div>
    </div>
  </div>
))}

                </div>

              </div>

              <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked &amp; Question</h4>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
  
                  {data?.faqs.map((faq, index) => (
  <div className="accordion-item" key={faq._id}>
    <h2 className="accordion-header" id={`heading${index}`}>
      <button
        className="accordion-button btn-col-pop"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${index}`}
        aria-expanded={index === 0 ? "true" : "false"}
        aria-controls={`collapse${index}`}
      >
        {`${index + 1}. ${faq.question}`}
      </button>
    </h2>
    <div
      id={`collapse${index}`}
      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
      aria-labelledby={`heading${index}`}
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        {faq.answer}
      </div>
    </div>
  </div>
))}

                  </div>
                </div>
              </div>
              <div className="review-section">
                <p className="first-ppreview">There are no reviews yet.</p>
                <h3>Be the first to review “{data?.name}

                  ”</h3>
                <p>Your email address will not be published.</p>
                <div className="rating-stars-on-page">
                  <div>
                    <p>Overall</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Transport</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Food</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Destination</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />
                  </div>
                  <div>
                    <p>Hospitality</p>
                    <StarRating totalStars={5} onRatingChange={() => { }} />

                  </div>
                </div>
              </div>
              <div className="review-form"


              >
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Review Title" />
                <textarea placeholder="Describe your review"></textarea>
                <div>
                  <p>recommendation: </p>
                  <div className="recommendation">
                    <img src="/assets/img/activities/icons/happy.svg" />
                    <img src="/assets/img/activities/icons/happy-2.svg" />
                    <img src="/assets/img/activities/icons/happy-3.svg" />
                  </div>
                </div>
                <button className="primary-btn1 two book-now-activity submit-review-buttom">SUBMIT REVIEW</button>

              </div>
            </div>
            <div className="col-xl-4">
              <div className="banner2-card  mb-30" onClick={()=>{
          window.location.href = "tel:+971529745592"
        }}>
                <img src="/assets/img/activities/tele-cal.jpg" alt="" />

              </div>
              <div className="booking-form-wrap">
                <h4>Book Your Tour</h4>
                <p>Reserve your ideal Room early for a hassle-free
                  trip secure comfort and convenience!</p>
                <div className="nav nav-pills mb-40" role="tablist">
                <button className="nav-link show active" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" type="button" role="tab" aria-controls="v-pills-booking" aria-selected="true">Online Booking</button>
                <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Inquiry Form</button>
              </div>
                <div className="tab-content" id="v-pills-tabContent2">
                  <div className="tab-pane fade show active" id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your Booking Date:</h6>
                          <div className="form-inner mb-20">
                            <div className="form-group">
                              <input type="date" name="inOut" placeholder="5 Jan, 2024" />

                            </div>
                          </div>
                        </div>
                        <div className="booking-form-item-type mb-45">
                          <div className="number-input-item adults">
                            <label className="number-input-lable">Adult:<span>
                            </span>
                            
                            </label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                          <div className="number-input-item children">
                            <label className="number-input-lable">Children:<span>
                            </span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <h5>Other Extra Services</h5>
                          <div className="checkbox-container">
                            <label className="check-container">Home Pickup
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={0} />
                              <span className="checkmark" />
                              <span className="price">$10 </span>
                            </label>
                            <label className="check-container">Night Food
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={1} />
                              <span className="checkmark" />
                              <span className="price">$15 </span>
                            </label>
                            <label className="check-container">Seaplane Fyling
                              <input type="checkbox" className="services_check" name="services_list[]" defaultValue={2} />
                              <span className="checkmark" />
                              <span className="price">$20 </span>
                            </label>
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                          <div className="single-total mb-30">
                            <span>Children</span>
                            <ul>
                              <li><strong>$195</strong> PRICE</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>02</strong> QTY</li>
                              <li><i className="bi bi-x-lg" /></li>
                              <li><strong>04</strong> DAYS</li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                        </div>
                        <div className="total-price"><span>Total Price:</span> $470</div>
                        <button type="button" className="primary-btn1 two book-now-activity" onClick={()=>{
                          route.push("/booking-data-form")
                          
                        }}>Book Now</button>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                    <div className="sidebar-booking-form">
                      <form onSubmit={handleSubmit}>
                        <div className="form-inner mb-20">
                          <label>
                            Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                          {errors.fullName && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.fullName}</small>}
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.email}</small>}
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Phone Number <span>*</span>
                          </label>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <ReactFlagsSelect
                            style={{
                              border:"0rem",
                              background:"white"
                            }}
                              className="phone-react-thing"
                              selected={selected}
                              showSelectedLabel={false}
                              optionsSize={17}
                              customLabels={customLabels}
                              countries={Object.keys(customLabels)}
                              placeholder="+"
                              selectedSize={24}
                              onSelect={(code) => {
                                setFormData({ ...formData, countryCode: customLabels[code].secondary })
                                setSelected(code)
                              }
                              }

                            />

                            <input
                              type="text"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              style={{ flex: 1 }}
                            />
                          </div>
                          {errors.phone && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.phone}</small>}
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Write Your Message <span>*</span>
                          </label>
                          <textarea
                            name="message"
                            placeholder="Write your query"
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {errors.message && <small style={{ color: "red", marginLeft: "0.7rem", marginTop: "0.4rem" }}>{errors.message}</small>}
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two book-now-activity">Submit Now</button>
                        </div>                      </form>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpenModalVideo(true)}
            isOpen={isOpenModalVideo}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpenModalVideo(false)}
          />
        </React.Fragment>
        <ThankYouModal showModal={showModal} setShowModal={setShowModal} />

        {/* <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      /> */}
      </div>
      <hr />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default Page
