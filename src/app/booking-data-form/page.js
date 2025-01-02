"use client"
import React from "react";
import "./bookingform.css";
import Link from "next/link";
import StepHeader from "@/components/bookingForm/StepHeader";
import PassengerDetails from "@/components/bookingForm/PassengerDetails";
import Image from "next/image";
import { buyFunction } from "@/hooks/CommonFunctions";

const Page = () => {
  return (
    <div className="container">
      <div className="row mt-50">
        <div className="col-md-8 mb-3">
          <div className="bdf-form bdf-left">
            <StepHeader />
            <PassengerDetails />
          </div>
        </div>
        <div className="col-md-4">
          <div className="bdf-table bdf-right">
            <h4>Order Summary</h4>
            <div className="bdf-table-content">
              <div className="bdf-table-row">
                <p>Name</p>
                <p>Description</p>
              </div>
              <div className="bdf-table-row">
                <p>Visa Option</p>
                <p>Single Entry Tourist Visa</p>
              </div>
              <div className="bdf-table-row">
                <p>Travel Date :</p>
                <p>22/12/2024</p>
              </div>
              <div className="bdf-table-row">
                <p>Processing Type</p>
                <p>Normal</p>
              </div>
              <div className="bdf-table-row">
                <p>No.of Visa</p>
                <p>1</p>
              </div>
              <div className="bdf-table-row">
                <p>Lost Date to Cancel</p>
                <p>Non Refundable</p>
              </div>
              <div className="bdf-table-row">
                <p>Availability</p>
                <p>Available</p>
              </div>
              <div className="bdf-table-ftr">
                <p>Total:</p>
                <p>AED 300.00</p>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-method-content">
                <div className="d-flex align-items-center gap-2" onClick={buyFunction}>
                  <svg
                    width="50"
                    height="33"
                    viewBox="0 0 50 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="50"
                      height="32"
                      transform="translate(0 0.469971)"
                      fill="url(#pattern0_3840_3348)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_3840_3348"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_3840_3348"
                          transform="scale(0.02 0.03125)"
                        />
                      </pattern>
                      <image
                        id="image0_3840_3348"
                        width="50"
                        height="32"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>

                  <div className="paymrnt-cntnt">
                    <p>Payment</p>
                    <span>Via MasterCard</span>
                  </div>
                </div>
                <p className="total-price">AED 300.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
