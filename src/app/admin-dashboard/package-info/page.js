"use client";
import Header from "@/components/header/HeaderForDashboard";
import Link from "next/link";
import React from "react";
import "../../customer-dashboard/rakshit.css";
import SelectComponent from "@/uitils/SelectComponent";
import "./packageinfo.css";
import DragAndDrop from "@/components/dragdrop/dragdrop";
import AdminSideBar from "@/components/sidebarAdmin/admin-sidebar";

const Page = () => {
  return (
    <>
      <Header />
      <div className="dashboard-wrapper rakshit-font bg-white">
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
                    <span className="headingRakshit">Package</span>
                    <div className="rakshit-author-content mt-2">
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
                        Package
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row package-info-form-ui">
            <div className="col-md-8">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Package Title</label>
                      <input
                        type="text"
                        placeholder="E.g. Google Pixel 7 Pro"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Price</label>
                      <input type="text" placeholder="AED 27000" />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="form-inner">
                      <label>Days</label>
                      <SelectComponent
                        options={["5", "7", "10"]}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="form-inner">
                      <label>Maximum People</label>
                      <SelectComponent
                        options={["5", "7", "10"]}
                        placeholder="Maximum People"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="form-inner">
                      <label>Location</label>
                      <SelectComponent
                        options={["Dubai", "US", "UAE"]}
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-30">
                      <label>Package Description</label>
                      <textarea placeholder="Type description here..." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Highlights of the Tour</label>
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="text"
                          placeholder="Visit the iconic Blue Mosque"
                        />
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99992 1.66992C5.39867 1.66992 1.66992 5.39867 1.66992 9.99992C1.66992 14.6012 5.39867 18.3299 9.99992 18.3299C14.6012 18.3299 18.3299 14.6012 18.3299 9.99992C18.3299 5.39867 14.6012 1.66992 9.99992 1.66992ZM9.99992 17.6637C5.7743 17.6637 2.33617 14.2255 2.33617 9.99992C2.33617 5.7743 5.7743 2.33617 9.99992 2.33617C14.2255 2.33617 17.6637 5.7743 17.6637 9.99992C17.6637 14.2255 14.2255 17.6637 9.99992 17.6637Z"
                              fill="black"
                            />
                            <path
                              d="M10.3322 5.00195H9.66594V9.66695H5.02344V10.3332H9.66594V14.9757H10.3322V10.3332H14.9972V9.66695H10.3322V5.00195Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Included And Excluded</label>
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="text"
                          placeholder="Clean And Air-Cooled Vehicle"
                        />
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99992 1.66992C5.39867 1.66992 1.66992 5.39867 1.66992 9.99992C1.66992 14.6012 5.39867 18.3299 9.99992 18.3299C14.6012 18.3299 18.3299 14.6012 18.3299 9.99992C18.3299 5.39867 14.6012 1.66992 9.99992 1.66992ZM9.99992 17.6637C5.7743 17.6637 2.33617 14.2255 2.33617 9.99992C2.33617 5.7743 5.7743 2.33617 9.99992 2.33617C14.2255 2.33617 17.6637 5.7743 17.6637 9.99992C17.6637 14.2255 14.2255 17.6637 9.99992 17.6637Z"
                              fill="black"
                            />
                            <path
                              d="M10.3322 5.00195H9.66594V9.66695H5.02344V10.3332H9.66594V14.9757H10.3322V10.3332H14.9972V9.66695H10.3322V5.00195Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-30">
                      <label>Good To Know</label>
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="text"
                          placeholder="Visit the iconic Blue Mosque"
                        />
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99992 1.66992C5.39867 1.66992 1.66992 5.39867 1.66992 9.99992C1.66992 14.6012 5.39867 18.3299 9.99992 18.3299C14.6012 18.3299 18.3299 14.6012 18.3299 9.99992C18.3299 5.39867 14.6012 1.66992 9.99992 1.66992ZM9.99992 17.6637C5.7743 17.6637 2.33617 14.2255 2.33617 9.99992C2.33617 5.7743 5.7743 2.33617 9.99992 2.33617C14.2255 2.33617 17.6637 5.7743 17.6637 9.99992C17.6637 14.2255 14.2255 17.6637 9.99992 17.6637Z"
                              fill="black"
                            />
                            <path
                              d="M10.3322 5.00195H9.66594V9.66695H5.02344V10.3332H9.66594V14.9757H10.3322V10.3332H14.9972V9.66695H10.3322V5.00195Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-30">
                      <label>Upload Packages Images</label>
                      <DragAndDrop />
                    </div>
                  </div>
                </div>

                <div className="form-inner d-flex align-items-center gap-2 packge-btn-ui">
                  <button type="submit" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="create-package-btn">
                    + Create Packages
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="product-ctgry-ui">
                <h5>Product Category & Tags</h5>
                <div className="product-ctgry-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-30">
                        <div className="form-inner">
                          <label>Category</label>
                          <SelectComponent
                            options={["Dubai", "US", "UAE"]}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-30">
                        <div className="form-inner">
                          <label>Vendor</label>
                          <SelectComponent
                            options={["Dubai", "US", "UAE"]}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-30">
                        <div className="form-inner">
                          <label>Collection</label>
                          <SelectComponent
                            options={["Dubai", "US", "UAE"]}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Tags</label>
                          <SelectComponent
                            options={["Dubai", "US", "UAE"]}
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="product-ctgry-ui mt-0 mb-3">
                <h5>Other Options</h5>
                <div className="product-ctgry-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Title</label>
                          <input
                            type="text"
                            placeholder="E.g. Google Pixel 7 Pro"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-30">
                          <label>Description</label>
                          <textarea placeholder="Type here...." />
                        </div>
                      </div>
                    </div>
                  </form>
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
