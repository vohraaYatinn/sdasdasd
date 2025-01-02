"use client"
import useAxios from "@/network/useAxios";
import { getSinglePackageById, otpEmailValidation, sendEmailValidation, signupFunction } from "@/urls/urls";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ReactFlagsSelect from "react-flags-select";
import { customLabels } from "@/hooks/CommonFunctions";


const LoginModal = () => {
  const router = useRouter();

  const [
    emailOtpResponse,
    emailOtpError,
    emailOtpLoading,
    emailOtpFetch,
  ] = useAxios();
  const [
    emailOtpVerifyResponse,
    emailOtpVerifyError,
    emailOtpVerifyLoading,
    emailOtpVerifyFetch,
  ] = useAxios();
  const [
    signUpFunctionResponse,
    signUpFunctionError,
    signUpFunctionLoading,
    signUpFunctionFetch,
  ] = useAxios();
    const [leadFormDetails, setLeadFormDetails] = useState({
      name: "",
      email: "",
      phone: "",
      countryCode:""
    }); 
      const [selected, setSelected] = useState("AE");
    
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [emailData, setEmail] = useState();
  const [otpScreen, setOtpScreen] = useState(0);
  const [errors, setError] = useState({})
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only numeric input
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input
    if (index < 5 && value) {
      document.getElementsByClassName("otp-box")[index + 1].focus();
    }
  };
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = ["", "", "", "","",""];
      // newOtp[index] = "";
      setOtp(newOtp);

      // Move to the previous input
      if (index > 0) {
        document.getElementsByClassName("otp-box")[0].focus();
      }
    }
  };
  const sendEmailOtp = () => {
    emailOtpFetch(sendEmailValidation({
      email: emailData
    }))
  }
  const verifyEmailOtp = () => {
    emailOtpVerifyFetch(otpEmailValidation({
      email: emailData,
      otp: otp
    }))
  }
  const signUpFunction = () => {
    if (validateForm()) {
      signUpFunctionFetch(signupFunction({
        email: emailData,
        name: leadFormDetails?.name,
        phoneNumber:leadFormDetails?.countryCode + leadFormDetails?.phone
      }))
    
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadFormDetails({
      ...leadFormDetails,
      [name]: value,
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!leadFormDetails?.name.trim()) newErrors.name = "Name is required";
    if (!leadFormDetails?.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    else if (!leadFormDetails.countryCode) {
      newErrors.phone = "Country code is required.";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    if (emailOtpResponse?.status == "success") {
      setOtpScreen(1)
    }
  }, [emailOtpResponse])
  useEffect(() => {
    if (emailOtpVerifyResponse?.status == "success") {
      if (emailOtpVerifyResponse?.userExits) {
        localStorage.setItem("jwtToken", emailOtpVerifyResponse?.data)
        router.push('/customer-dashboard');
      }
      else {
        setOtpScreen(2)
      }
    }
    if (emailOtpVerifyResponse?.status == "failed") {
      setError({ ...errors, "otp": "Invalid or Expired OTP. Please enter a valid OTP." })
    }
  }, [emailOtpVerifyResponse])
  useEffect(() => {
    if (signUpFunctionResponse?.status == "success") {
        localStorage.setItem("jwtToken", signUpFunctionResponse?.data)
        router.push('/customer-dashboard');
      
    }
  }, [signUpFunctionResponse])



  return (
    <>
      <div
        className="modal login-modal"
        id="user-login"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {otpScreen == 0 &&
              <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>Sign in to continue</h2>
                    <p>Enter your email address for Login.</p>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <input type="text" placeholder="User name or Email *"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <a className="login-btn mb-25" id="loginbuttoncheck"
                      onClick={() => {
                        // if(emailData.length > 0){
                        sendEmailOtp()
                        // }
                      }}
                    >
                      Sign In
                    </a>
                    <div className="divider">
                      <span>or</span>
                    </div>
                    <a href="#" className="google-login-btn">
                      <div className="icon">
                        <img src="/assets/img/home1/icon/google-icon.svg" alt="" />
                      </div>
                      Sign in with Google
                    </a>
                  </form>
                </div>
              </div>
            }
            {otpScreen == 1 &&
              <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>Verify Email</h2>
                    <p>Enter the otp send on you email {emailData}</p>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <div className="otp-inputs" style={{
                        display: "flex",
                        gap: "1rem"
                      }}>
                        {[...Array(6)].map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="otp-box"
                            value={otp[index]}
                            onChange={(e) => handleOtpChange(e, index)}
                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                          />
                        ))}
                      </div>
                      {errors?.otp && <p className="mt-2" style={{
                        color: "red"
                      }}>{errors?.otp}</p>}
                    </div>

                    <a className="login-btn mb-25" id="loginbuttoncheck"
                      onClick={() => {
                        // if(emailData.length > 0){
                        verifyEmailOtp()
                        // }
                      }}
                    >
                      Verify
                    </a>

                  </form>
                </div>
              </div>
            }
             {otpScreen == 2 &&
                 <div className="modal-body">
                 <div className="login-registration-form">
                   <div className="form-title">
                     <h2>Enter your details</h2>
                     <p>Enter your details below for signup.</p>
                   </div>
                   <form >
         <div className="form-inner mb-3">
           <input
             type="text"
             name="name"
             placeholder="Full Name *"
             value={leadFormDetails?.name}
             onChange={handleChange}
           />
           {errors?.name && <span className="error-text">{errors?.name}</span>}
         </div>
 
       
 
         <div className="form-inner mb-3"
         
        >
      <div  style={{ display: "flex", gap: "10px" }}>
         <ReactFlagsSelect
                               className="react-select-select-phone"
                               selected={selected}
                               showSelectedLabel={false}
                               optionsSize={13}
                               
                               customLabels={customLabels}
                               countries={Object.keys(customLabels)}
                               placeholder="+"
                               selectedSize={14}
                               onSelect={(code) => {
                                 console.log(code)
                                 setLeadFormDetails({ ...leadFormDetails, countryCode: customLabels[code].secondary })
                                 setSelected(code)
                               }
                               }
 
                             />
           <input
             type="text"
             name="phone"
             placeholder="Phone Number *"
             value={leadFormDetails?.phone}
             onChange={handleChange}
           />
         </div>
 
           {errors?.phone && <span className="error-text">{errors?.phone}</span>}
         </div>
 
     
 
         <button type="button" onClick={()=>{
           signUpFunction()
         }} className="login-btn mb-25 home-button">
           Sign Up
         </button>
       </form>
                 </div>
               </div>
            }
              
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
