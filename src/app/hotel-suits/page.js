"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import Breadcrumb from "@/components/common/Breadcrumb";
import RoomSidebar from "@/components/sidebar/RoomSidebar";
import Link from "next/link";
import "./hotel-suits-breadcum.css"
import "./hotel-suits.css"



const Page = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      loop: true,
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    };
  }, []);
  return (
    <>
      <Breadcrumb pagename="Room & Suits" pagetitle="Room & Suits" />
      <div className="room-suits-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-xl-4 order-lg-1 order-2">
              <RoomSidebar />
            </div>
            <div className="col-xl-8 order-lg-2 order-1">
         <div className="room-suits-card mb-30">
                <div className="row g-0 main-card-for-umrah">
                  <div className="col-md-4">
                    <Swiper {...settings} className="swiper hotel-img-slider">
                      <span className="batch">16 Days</span>
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                             src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                      <div className="swiper-pagination5" />
                    </Swiper>
                  </div>
                  <div className="col-md-8">
                    <div className="room-content">
                      <div className="content-top">
                        <div className="reviews">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>4.5 reviews</span>
                        </div>
                        <h5>
                          <Link href="hotel-suits/hotel-details">
                            Golden Tulip The Grandmark Dhaka
                          </Link>
                        </h5>
                      
                        
                      </div>
                      <div className="content-bottom">
                        <div className="room-type room-card-hotel">
                          <h6>Makkah <span>Nada AI Majd.</span></h6>
                          <h6>Madinah <span>Hayah Grand</span></h6>
                          <div className="list-room-ul mt-3">
                            <div>
                              <img src="\assets\img\umrah\aeroplane.svg" />
                              <p>Direct Flight</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\visa-svg.svg" />
                              <p>Visa</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\hotel-svg.svg" />
                              <p>Hotel</p>
                             
                            </div>
                          </div>
                          <div className="deals">
                            <hr/>
                            <span>
                              <strong>$ 98000/-</strong> Per Person
                             
                            </span>
                            
                          </div>
                        </div>
                        <div className="price-and-book">
                        
                          <div className="book-btn">
                            <Link
                              href="hotel-suits/hotel-details"
                              className="hotel-suits-card-button primary-btn2"
                            >
                              MORE DETAILS{" "}
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         <div className="room-suits-card mb-30">
                <div className="row g-0 main-card-for-umrah">
                  <div className="col-md-4">
                    <Swiper {...settings} className="swiper hotel-img-slider">
                      <span className="batch">16 Days</span>
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                             src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                      <div className="swiper-pagination5" />
                    </Swiper>
                  </div>
                  <div className="col-md-8">
                    <div className="room-content">
                      <div className="content-top">
                        <div className="reviews">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>4.5 reviews</span>
                        </div>
                        <h5>
                          <Link href="hotel-suits/hotel-details">
                            Golden Tulip The Grandmark Dhaka
                          </Link>
                        </h5>
                      
                        
                      </div>
                      <div className="content-bottom">
                        <div className="room-type room-card-hotel">
                          <h6>Makkah <span>Nada AI Majd.</span></h6>
                          <h6>Madinah <span>Hayah Grand</span></h6>
                          <div className="list-room-ul mt-3">
                            <div>
                              <img src="\assets\img\umrah\aeroplane.svg" />
                              <p>Direct Flight</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\visa-svg.svg" />
                              <p>Visa</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\hotel-svg.svg" />
                              <p>Hotel</p>
                             
                            </div>
                          </div>
                          <div className="deals">
                            <hr/>
                            <span>
                              <strong>$ 98000/-</strong> Per Person
                             
                            </span>
                            
                          </div>
                        </div>
                        <div className="price-and-book">
                        
                          <div className="book-btn">
                            <Link
                              href="hotel-suits/hotel-details"
                              className="hotel-suits-card-button primary-btn2"
                            >
                              MORE DETAILS{" "}
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         <div className="room-suits-card mb-30">
                <div className="row g-0 main-card-for-umrah">
                  <div className="col-md-4">
                    <Swiper {...settings} className="swiper hotel-img-slider">
                      <span className="batch">16 Days</span>
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                             src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                      <div className="swiper-pagination5" />
                    </Swiper>
                  </div>
                  <div className="col-md-8">
                    <div className="room-content">
                      <div className="content-top">
                        <div className="reviews">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>4.5 reviews</span>
                        </div>
                        <h5>
                          <Link href="hotel-suits/hotel-details">
                            Golden Tulip The Grandmark Dhaka
                          </Link>
                        </h5>
                      
                        
                      </div>
                      <div className="content-bottom">
                        <div className="room-type room-card-hotel">
                          <h6>Makkah <span>Nada AI Majd.</span></h6>
                          <h6>Madinah <span>Hayah Grand</span></h6>
                          <div className="list-room-ul mt-3">
                            <div>
                              <img src="\assets\img\umrah\aeroplane.svg" />
                              <p>Direct Flight</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\visa-svg.svg" />
                              <p>Visa</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\hotel-svg.svg" />
                              <p>Hotel</p>
                             
                            </div>
                          </div>
                          <div className="deals">
                            <hr/>
                            <span>
                              <strong>$ 98000/-</strong> Per Person
                             
                            </span>
                            
                          </div>
                        </div>
                        <div className="price-and-book">
                        
                          <div className="book-btn">
                            <Link
                              href="hotel-suits/hotel-details"
                              className="hotel-suits-card-button primary-btn2"
                            >
                              MORE DETAILS{" "}
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         <div className="room-suits-card mb-30">
                <div className="row g-0 main-card-for-umrah">
                  <div className="col-md-4">
                    <Swiper {...settings} className="swiper hotel-img-slider">
                      <span className="batch">16 Days</span>
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                             src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                      <div className="swiper-pagination5" />
                    </Swiper>
                  </div>
                  <div className="col-md-8">
                    <div className="room-content">
                      <div className="content-top">
                        <div className="reviews">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>4.5 reviews</span>
                        </div>
                        <h5>
                          <Link href="hotel-suits/hotel-details">
                            Golden Tulip The Grandmark Dhaka
                          </Link>
                        </h5>
                      
                        
                      </div>
                      <div className="content-bottom">
                        <div className="room-type room-card-hotel">
                          <h6>Makkah <span>Nada AI Majd.</span></h6>
                          <h6>Madinah <span>Hayah Grand</span></h6>
                          <div className="list-room-ul mt-3">
                            <div>
                              <img src="\assets\img\umrah\aeroplane.svg" />
                              <p>Direct Flight</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\visa-svg.svg" />
                              <p>Visa</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\hotel-svg.svg" />
                              <p>Hotel</p>
                             
                            </div>
                          </div>
                          <div className="deals">
                            <hr/>
                            <span>
                              <strong>$ 98000/-</strong> Per Person
                             
                            </span>
                            
                          </div>
                        </div>
                        <div className="price-and-book">
                        
                          <div className="book-btn">
                            <Link
                              href="hotel-suits/hotel-details"
                              className="hotel-suits-card-button primary-btn2"
                            >
                              MORE DETAILS{" "}
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         <div className="room-suits-card mb-30">
                <div className="row g-0 main-card-for-umrah">
                  <div className="col-md-4">
                    <Swiper {...settings} className="swiper hotel-img-slider">
                      <span className="batch">16 Days</span>
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                             src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="room-img">
                            <img
                              src="/assets/img/umrahlisting/umrah-listing.png"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                      <div className="swiper-pagination5" />
                    </Swiper>
                  </div>
                  <div className="col-md-8">
                    <div className="room-content">
                      <div className="content-top">
                        <div className="reviews">
                          <ul>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>4.5 reviews</span>
                        </div>
                        <h5>
                          <Link href="hotel-suits/hotel-details">
                            Golden Tulip The Grandmark Dhaka
                          </Link>
                        </h5>
                      
                        
                      </div>
                      <div className="content-bottom">
                        <div className="room-type room-card-hotel">
                          <h6>Makkah <span>Nada AI Majd.</span></h6>
                          <h6>Madinah <span>Hayah Grand</span></h6>
                          <div className="list-room-ul mt-3">
                            <div>
                              <img src="\assets\img\umrah\aeroplane.svg" />
                              <p>Direct Flight</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\visa-svg.svg" />
                              <p>Visa</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6123 8.60024C1.6123 8.46763 1.66498 8.34046 1.75875 8.24669C1.85252 8.15292 1.9797 8.10024 2.1123 8.10024H13.9053L10.7583 4.95424C10.6644 4.86035 10.6117 4.73302 10.6117 4.60024C10.6117 4.46747 10.6644 4.34013 10.7583 4.24624C10.8522 4.15235 10.9795 4.09961 11.1123 4.09961C11.2451 4.09961 11.3724 4.15235 11.4663 4.24624L15.4663 8.24624C15.5129 8.29269 15.5498 8.34786 15.575 8.40861C15.6002 8.46935 15.6132 8.53447 15.6132 8.60024C15.6132 8.66601 15.6002 8.73113 15.575 8.79187C15.5498 8.85262 15.5129 8.90779 15.4663 8.95424L11.4663 12.9542C11.3724 13.0481 11.2451 13.1009 11.1123 13.1009C10.9795 13.1009 10.8522 13.0481 10.7583 12.9542C10.6644 12.8604 10.6117 12.733 10.6117 12.6002C10.6117 12.4675 10.6644 12.3401 10.7583 12.2462L13.9053 9.10024H2.1123C1.9797 9.10024 1.85252 9.04756 1.75875 8.95379C1.66498 8.86003 1.6123 8.73285 1.6123 8.60024Z" fill="#545252"/>
</svg>
                            </div>
                            <div className="room-ul-left">
                              <img src="\assets\img\umrah\hotel-svg.svg" />
                              <p>Hotel</p>
                             
                            </div>
                          </div>
                          <div className="deals">
                            <hr/>
                            <span>
                              <strong>$ 98000/-</strong> Per Person
                             
                            </span>
                            
                          </div>
                        </div>
                        <div className="price-and-book">
                        
                          <div className="book-btn">
                            <Link
                              href="hotel-suits/hotel-details"
                              className="hotel-suits-card-button primary-btn2"
                            >
                              MORE DETAILS{" "}
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
