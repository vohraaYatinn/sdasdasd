"use client"
import Header from "@/components/header/HeaderForAdminDashboard";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation';
import "../rakshit.css"
import AdminSideBar from "@/components/sidebarAdmin/admin-sidebar";

const page = () => {
    const router = useRouter();
  
  return (
    <>
      <Header />
      <div className="dashboard-wrapper rakshit-font">
        <AdminSideBar/>

        <div className="main-content">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-content-title-profile mb-50">
                <div className="author-area">
                  <div className="author-img">
                    <img src="/assets/img/innerpage/profile-img.png" alt="" />
                  </div>
                  <div className="author-content ">
                    <span className="headingRakshit">Customer Management</span>
                    <div className="rakshit-author-content">
                      <h4 className="rakshit-font">Home</h4>
                      <svg
                        width="8"
                        height="25"
                        viewBox="0 0 8 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.78125 7.31876L7.28125 12.0688C7.42708 12.2146 7.5 12.3917 7.5 12.6C7.5 12.8083 7.42708 12.975 7.28125 13.1L2.78125 17.8813C2.65625 18.0271 2.48958 18.1 2.28125 18.1C2.07292 18.1 1.89062 18.0323 1.73438 17.8969C1.57812 17.7615 1.5 17.5896 1.5 17.3813C1.5 17.1729 1.57292 16.9958 1.71875 16.85L5.71875 12.6L1.71875 8.35001C1.57292 8.20417 1.5 8.02709 1.5 7.81876C1.5 7.61042 1.57812 7.43855 1.73438 7.30313C1.89062 7.16771 2.07292 7.10001 2.28125 7.10001C2.48958 7.10001 2.65625 7.17292 2.78125 7.31876Z"
                          fill="black"
                        />
                      </svg>
                      &nbsp;
                      <h4 className="rakshit-font" id="dashboard-heading">
                      Customer Management
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="counter-area">
                <div className="row row-cols-lg-4 g-3 rakshit-counter-area-row">
                  <div className="col">
                    <div className="counter-single box blue rakshit-counter-single">
                      <div className="counter-icon"></div>
                      <div className="counter-content rakshit-counter-content">
                        <div className=" rakshit-counter-title">
                          <svg
                            width="55"
                            height="58"
                            viewBox="0 0 55 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_2098_1333)">
                              <rect
                                x="10"
                                y="0.600006"
                                width="35"
                                height="35"
                                rx="10"
                                fill="white"
                              />
                              <path
                                d="M32.5 12.1C33.0625 12.1 33.5365 12.2927 33.9219 12.6781C34.3073 13.0635 34.5 13.5375 34.5 14.1V24.1C34.5 24.6625 34.3073 25.1365 33.9219 25.5219C33.5365 25.9073 33.0625 26.1 32.5 26.1H22.5C21.9375 26.1 21.4635 25.9073 21.0781 25.5219C20.6927 25.1365 20.5 24.6625 20.5 24.1V14.1C20.5 13.5375 20.6927 13.0635 21.0781 12.6781C21.4635 12.2927 21.9375 12.1 22.5 12.1H23.5V10.6C23.5 10.4542 23.5469 10.3344 23.6406 10.2406C23.7344 10.1469 23.8542 10.1 24 10.1C24.1458 10.1 24.2656 10.1469 24.3594 10.2406C24.4531 10.3344 24.5 10.4542 24.5 10.6V12.1H30.5V10.6C30.5 10.4542 30.5469 10.3344 30.6406 10.2406C30.7344 10.1469 30.8542 10.1 31 10.1C31.1458 10.1 31.2656 10.1469 31.3594 10.2406C31.4531 10.3344 31.5 10.4542 31.5 10.6V12.1H32.5ZM21.5 17.1V19.1H24.5V17.1H21.5ZM25.5 19.1H29.5V17.1H25.5V19.1ZM29.5 20.1H25.5V22.1H29.5V20.1ZM21.5 20.1V22.1H24.5V20.1H21.5ZM22.5 25.1H24.5V23.1H21.5V24.1C21.5 24.3708 21.599 24.6052 21.7969 24.8031C21.9948 25.001 22.2292 25.1 22.5 25.1ZM25.5 25.1H29.5V23.1H25.5V25.1ZM33.5 24.1V23.1H30.5V25.1H32.5C32.7708 25.1 33.0052 25.001 33.2031 24.8031C33.401 24.6052 33.5 24.3708 33.5 24.1ZM33.5 22.1V20.1H30.5V22.1H33.5ZM33.5 19.1V17.1H30.5V19.1H33.5ZM33.5 16.1V14.1C33.5 13.8292 33.401 13.5948 33.2031 13.3969C33.0052 13.199 32.7708 13.1 32.5 13.1H22.5C22.2292 13.1 21.9948 13.199 21.7969 13.3969C21.599 13.5948 21.5 13.8292 21.5 14.1V16.1H33.5Z"
                                fill="#0068BE"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2098_1333"
                                x="0"
                                y="0.600006"
                                width="55"
                                height="57"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feMorphology
                                  radius="2"
                                  operator="dilate"
                                  in="SourceAlpha"
                                  result="effect1_dropShadow_2098_1333"
                                />
                                <feOffset dy="12" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.0352082 0 0 0 0 0.324287 0 0 0 0 0.563333 0 0 0 0.1 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2098_1333"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2098_1333"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <p className=" title-counter">
                           Total Tour
                          </p>
                        </div>
                        <div className="number rakshit-flex-number">
                          <h3 className="counter rakshit-black-text">19</h3>
                          <span className="rakshit-black-text all-time">
                            All Time
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="counter-single two box rakshit-green rakshit-counter-single">
                      <div className="counter-icon"></div>
                      <div className="counter-content rakshit-counter-content">
                        <div className=" rakshit-counter-title">
                          <svg
                            width="55"
                            height="58"
                            viewBox="0 0 55 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_2098_1370)">
                              <rect
                                x="10"
                                y="0.599976"
                                width="35"
                                height="35"
                                rx="10"
                                fill="white"
                              />
                              <path
                                d="M33.5 13.1C34.0625 13.1 34.5365 13.2927 34.9219 13.6781C35.3073 14.0635 35.5 14.5375 35.5 15.1V23.1C35.5 23.6625 35.3073 24.1364 34.9219 24.5219C34.5365 24.9073 34.0625 25.1 33.5 25.1H22.5C21.6667 25.1 20.9583 24.8083 20.375 24.225C19.7917 23.6416 19.5 22.9333 19.5 22.1V14.1C19.5 13.2666 19.7917 12.5583 20.375 11.975C20.9583 11.3916 21.6667 11.1 22.5 11.1H34C34.1458 11.1 34.2656 11.1469 34.3594 11.2406C34.4531 11.3344 34.5 11.4541 34.5 11.6C34.5 11.7458 34.4531 11.8656 34.3594 11.9594C34.2656 12.0531 34.1458 12.1 34 12.1H22.5C21.9583 12.1 21.4896 12.2979 21.0938 12.6937C20.6979 13.0896 20.5 13.5583 20.5 14.1V22.1C20.5 22.6416 20.6979 23.1104 21.0938 23.5062C21.4896 23.9021 21.9583 24.1 22.5 24.1H33.5C33.7708 24.1 34.0052 24.001 34.2031 23.8031C34.401 23.6052 34.5 23.3708 34.5 23.1V15.1C34.5 14.8291 34.401 14.5948 34.2031 14.3969C34.0052 14.1989 33.7708 14.1 33.5 14.1H23C22.8542 14.1 22.7344 14.0531 22.6406 13.9594C22.5469 13.8656 22.5 13.7458 22.5 13.6C22.5 13.4541 22.5469 13.3344 22.6406 13.2406C22.7344 13.1469 22.8542 13.1 23 13.1H33.5ZM32.0312 18.5687C32.0312 18.5687 32.0677 18.6052 32.1406 18.6781C32.2135 18.751 32.25 18.8916 32.25 19.1C32.25 19.3083 32.1771 19.4854 32.0312 19.6312C31.8854 19.7771 31.7083 19.85 31.5 19.85C31.2917 19.85 31.1146 19.7771 30.9688 19.6312C30.8229 19.4854 30.75 19.3083 30.75 19.1C30.75 18.8916 30.8229 18.7146 30.9688 18.5687C31.1146 18.4229 31.2917 18.35 31.5 18.35C31.7083 18.35 31.8854 18.4229 32.0312 18.5687Z"
                                fill="#00FF00"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2098_1370"
                                x="0"
                                y="0.599976"
                                width="55"
                                height="57"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feMorphology
                                  radius="2"
                                  operator="dilate"
                                  in="SourceAlpha"
                                  result="effect1_dropShadow_2098_1370"
                                />
                                <feOffset dy="12" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0.2 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2098_1370"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2098_1370"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <p className="title-counter">
                       Total Hotel
                          </p>
                        </div>
                        <div className="number rakshit-flex-number">
                          <h3 className="counter rakshit-black-text">
                            $132,134
                          </h3>
                          <span className="rakshit-black-text all-time">
                            All Time
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="counter-single three box light-blue rakshit-counter-single">
                      <div className="counter-icon"></div>
                      <div className="counter-content rakshit-counter-content">
                        <div className=" rakshit-counter-title">
                          <svg
                            width="55"
                            height="57"
                            viewBox="0 0 55 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_2098_1350)">
                              <rect
                                x="10"
                                width="35"
                                height="35"
                                rx="10"
                                fill="white"
                              />
                              <path
                                d="M25.375 15.0312C25.375 15.0312 25.5208 14.8594 25.8125 14.5156C26.1042 14.1719 26.6667 14 27.5 14C28.3333 14 29.0417 14.3438 29.625 15.0312C30.2083 15.7188 30.5 16.5417 30.5 17.5C30.5 18.4583 30.2083 19.2812 29.625 19.9688C29.0417 20.6562 28.3333 21 27.5 21C26.6667 21 25.9583 20.6562 25.375 19.9688C24.7917 19.2812 24.5 18.4583 24.5 17.5C24.5 16.5417 24.7917 15.7188 25.375 15.0312ZM26.0938 19.2656C26.0938 19.2656 26.1927 19.388 26.3906 19.6328C26.5885 19.8776 26.9583 20 27.5 20C28.0417 20 28.5104 19.7552 28.9062 19.2656C29.3021 18.776 29.5 18.1875 29.5 17.5C29.5 16.8125 29.3021 16.224 28.9062 15.7344C28.5104 15.2448 28.0417 15 27.5 15C26.9583 15 26.4896 15.2448 26.0938 15.7344C25.6979 16.224 25.5 16.8125 25.5 17.5C25.5 18.1875 25.6979 18.776 26.0938 19.2656ZM34.5 11.5C35.0625 11.5 35.5365 11.6927 35.9219 12.0781C36.3073 12.4635 36.5 12.9375 36.5 13.5V21.5C36.5 22.0625 36.3073 22.5365 35.9219 22.9219C35.5365 23.3073 35.0625 23.5 34.5 23.5H20.5C19.9375 23.5 19.4635 23.3073 19.0781 22.9219C18.6927 22.5365 18.5 22.0625 18.5 21.5V13.5C18.5 12.9375 18.6927 12.4635 19.0781 12.0781C19.4635 11.6927 19.9375 11.5 20.5 11.5H34.5ZM19.5 13.5V14.5C20.0417 14.5 20.5104 14.3021 20.9062 13.9062C21.3021 13.5104 21.5 13.0417 21.5 12.5H20.5C20.2292 12.5 19.9948 12.599 19.7969 12.7969C19.599 12.9948 19.5 13.2292 19.5 13.5ZM20.5 22.5H21.5C21.5 21.9583 21.3021 21.4896 20.9062 21.0938C20.5104 20.6979 20.0417 20.5 19.5 20.5V21.5C19.5 21.7708 19.599 22.0052 19.7969 22.2031C19.9948 22.401 20.2292 22.5 20.5 22.5ZM35.5 21.5V20.5C34.9583 20.5 34.4896 20.6979 34.0938 21.0938C33.6979 21.4896 33.5 21.9583 33.5 22.5H34.5C34.7708 22.5 35.0052 22.401 35.2031 22.2031C35.401 22.0052 35.5 21.7708 35.5 21.5ZM35.5 19.5V15.5C34.6667 15.5 33.9583 15.2083 33.375 14.625C32.7917 14.0417 32.5 13.3333 32.5 12.5H22.5C22.5 13.3333 22.2083 14.0417 21.625 14.625C21.0417 15.2083 20.3333 15.5 19.5 15.5V19.5C20.3333 19.5 21.0417 19.7917 21.625 20.375C22.2083 20.9583 22.5 21.6667 22.5 22.5H32.5C32.5 21.6667 32.7917 20.9583 33.375 20.375C33.9583 19.7917 34.6667 19.5 35.5 19.5ZM35.5 14.5V13.5C35.5 13.2292 35.401 12.9948 35.2031 12.7969C35.0052 12.599 34.7708 12.5 34.5 12.5H33.5C33.5 13.0417 33.6979 13.5104 34.0938 13.9062C34.4896 14.3021 34.9583 14.5 35.5 14.5Z"
                                fill="#029CAB"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2098_1350"
                                x="0"
                                y="0"
                                width="55"
                                height="57"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feMorphology
                                  radius="2"
                                  operator="dilate"
                                  in="SourceAlpha"
                                  result="effect1_dropShadow_2098_1350"
                                />
                                <feOffset dy="12" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.158708 0 0 0 0 0.906556 0 0 0 0 0.976667 0 0 0 0.2 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2098_1350"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2098_1350"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <p className="title-counter">
                         Total Transport
                          </p>
                        </div>
                        <div className="number rakshit-flex-number">
                          <h3 className="counter rakshit-black-text">5</h3>
                          <span className="rakshit-black-text all-time">
                            All Time
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="counter-single four box yellow rakshit-counter-single">
                      <div className="counter-icon"></div>
                      <div className="counter-content rakshit-counter-content">
                        <div className=" rakshit-counter-title">
                          <svg
                            width="56"
                            height="57"
                            viewBox="0 0 56 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_2098_1360)">
                              <rect
                                x="10.7988"
                                width="35"
                                height="35"
                                rx="10"
                                fill="white"
                              />
                              <path
                                d="M35.4395 11.6406C35.4395 11.6406 35.4629 11.6172 35.5098 11.5703C35.5566 11.5234 35.653 11.5 35.7988 11.5C35.9447 11.5 36.0645 11.5469 36.1582 11.6406C36.252 11.7344 36.2988 11.8542 36.2988 12V18.5C36.2988 19.0417 36.1009 19.5104 35.7051 19.9062C35.3092 20.3021 34.8405 20.5 34.2988 20.5H28.7988V21.7812L31.6426 24.6562C31.8926 24.8854 31.8926 25.1146 31.6426 25.3437C31.5592 25.4479 31.4447 25.5 31.2988 25.5C31.153 25.5 31.0384 25.4479 30.9551 25.3437L28.2988 22.7187L25.6426 25.3437C25.4134 25.5937 25.179 25.599 24.9395 25.3594C24.6999 25.1198 24.7051 24.8854 24.9551 24.6562L27.7988 21.7812V20.5H22.2988C21.7572 20.5 21.2884 20.3021 20.8926 19.9062C20.4967 19.5104 20.2988 19.0417 20.2988 18.5V12C20.2988 11.8542 20.3457 11.7344 20.4395 11.6406C20.5332 11.5469 20.653 11.5 20.7988 11.5C20.9447 11.5 21.0645 11.5469 21.1582 11.6406C21.252 11.7344 21.2988 11.8542 21.2988 12V18.5C21.2988 18.7708 21.3978 19.0052 21.5957 19.2031C21.7936 19.401 22.028 19.5 22.2988 19.5H34.2988C34.5697 19.5 34.804 19.401 35.002 19.2031C35.1999 19.0052 35.2988 18.7708 35.2988 18.5V12C35.2988 11.8542 35.3457 11.7344 35.4395 11.6406ZM36.7988 9.49999C36.9447 9.49999 37.0645 9.54687 37.1582 9.64062C37.252 9.73437 37.2988 9.85416 37.2988 9.99999C37.2988 10.1458 37.252 10.2656 37.1582 10.3594C37.0645 10.4531 36.9447 10.5 36.7988 10.5H19.7988C19.653 10.5 19.5332 10.4531 19.4395 10.3594C19.3457 10.2656 19.2988 10.1458 19.2988 9.99999C19.2988 9.85416 19.3457 9.73437 19.4395 9.64062C19.5332 9.54687 19.653 9.49999 19.7988 9.49999H36.7988Z"
                                fill="#F9BD01"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2098_1360"
                                x="0.798828"
                                y="0"
                                width="55"
                                height="57"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feMorphology
                                  radius="2"
                                  operator="dilate"
                                  in="SourceAlpha"
                                  result="effect1_dropShadow_2098_1360"
                                />
                                <feOffset dy="12" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.8 0 0 0 0 0.625351 0 0 0 0 0.0819997 0 0 0 0.2 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2098_1360"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2098_1360"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>

                          <p className="title-counter">
                         Total Visa
                          </p>
                        </div>
                        <div className="number rakshit-flex-number">
                          <h3 className="counter rakshit-black-text">25</h3>
                          <span className="rakshit-black-text all-time">
                            All Time
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rakshit-table-heading">
                <h6>Customer</h6>
 


              </div>
              <div className="rakshit-flex-div check0div-get">
              <div className="check-ras-sk-dlex">
                <span style={{
                    marginRight:"1rem"
                  }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
<path d="M16.3333 20L11.0833 14.75C10.6667 15.0833 10.1875 15.3472 9.64583 15.5417C9.10417 15.7361 8.52778 15.8333 7.91667 15.8333C6.40278 15.8333 5.12153 15.309 4.07292 14.2604C3.02431 13.2118 2.5 11.9306 2.5 10.4167C2.5 8.90278 3.02431 7.62153 4.07292 6.57292C5.12153 5.52431 6.40278 5 7.91667 5C9.43056 5 10.7118 5.52431 11.7604 6.57292C12.809 7.62153 13.3333 8.90278 13.3333 10.4167C13.3333 11.0278 13.2361 11.6042 13.0417 12.1458C12.8472 12.6875 12.5833 13.1667 12.25 13.5833L17.5 18.8333L16.3333 20ZM7.91667 14.1667C8.95833 14.1667 9.84375 13.8021 10.5729 13.0729C11.3021 12.3438 11.6667 11.4583 11.6667 10.4167C11.6667 9.375 11.3021 8.48958 10.5729 7.76042C9.84375 7.03125 8.95833 6.66667 7.91667 6.66667C6.875 6.66667 5.98958 7.03125 5.26042 7.76042C4.53125 8.48958 4.16667 9.375 4.16667 10.4167C4.16667 11.4583 4.53125 12.3438 5.26042 13.0729C5.98958 13.8021 6.875 14.1667 7.91667 14.1667Z" fill="#64748B"/>
</svg>
</span>
                <input placeholder="search here"/>
             </div>

              </div>
              <div className="recent-listing-area rakshit-recent-listing-area">
                <div className="recent-listing-table">
                  <table className="eg-table2 rakshit-eg-table2">
                    <thead>
                      <tr className="table-head-color">
                        <th style={{
                          padding:"1.5rem 0rem",
                        }} id="serial_number" className="table-header-serial" >Sl No.</th>
                        <th style={{
                          padding:"1.5rem 0rem"
                        }} id="" className="table-header-product">Package</th>
                        <th style={{
                          padding:"1.5rem 0rem"
                        }} id="price">Price</th>
                        <th style={{
                          padding:"1.5rem 0rem"
                        }} id="timeline">Booked At</th>
                        <th style={{
                          padding:"1.5rem 0rem"
                        }} id="action">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Sl No">01</td>
                        <td data-label="Package">
                          <div className="product-name ">
                            <div className="rakshit-table-img">
                              <img
                                src="https://picsum.photos/80/80"
                                alt=""
                              />
                            </div>
                            <div className="product-content">
                              <h6>
                                <a href="#">
                                  Saint Martin: Tour Package
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td data-label="Price">$720</td>
                        <td data-label="Added At">
                          30/10/24
                        </td>
                        <td data-label="Action">
                          <span className="">Details</span>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Sl No.">02</td>
                        <td data-label="Package">
                          <div className="product-name ">
                            <div className="rakshit-table-img">
                              <img
                                src="/assets/img/home1/package-card-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="product-content">
                              <h6>
                                <a href="#">
                                  Saint Martin: Tour Package
                                </a>
                              </h6>
          
                            </div>
                          </div>
                        </td>
                        <td data-label="Price">$720</td>
                        <td data-label="Added At">
                          30/10/24
                        </td>
                        <td data-label="Action">
                          <span className="">Details</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pagination-area">
                    <ul className="paginations">
                      <li className="page-item active">
                        <a href="#">1</a>
                      </li>
                      <li className="page-item">
                        <a href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a href="#">3</a>
                      </li>
                    </ul>
                    <ul className="paginations-buttons">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={7}
                            height={14}
                            viewBox="0 0 7 14"
                          >
                            <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                          </svg>
                          Prev
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Next
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={7}
                            height={14}
                            viewBox="0 0 7 14"
                            fill="none"
                          >
                            <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <div className="copyright-area">
          <p>
              Copyright 2024 -<a href="#">ATS</a> | Tour & Travel
            </p>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default page;
