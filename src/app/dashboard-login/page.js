"use client";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import "./dashboard-login.css";
import SIdeImage from "/public/assets/img/side-right.png";
import { useRouter } from 'next/navigation';

const Page = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
    const router = useRouter();
  

  return (
    <div className="login-ui">
      <div>
        <div className="row login-row">
          <div className="col-lg-6">
            <div className="login-ui-left">
              <div className="logo-header">
                <img src="/assets/img/logo.svg" alt="" />
              </div>
              <div className="login-ui-form">
                <h2>Login</h2>
                <form>
                  <div className="form-inner mb-30">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter your email address" />
                  </div>
                  <div className="form-inner mb-30">
                    <label>Password</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        style={{ paddingRight: "40px" }}
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        {passwordVisible ? (
                          <IoEyeOutline />
                        ) : (
                          <IoEyeOffOutline />
                        )}
                      </span>
                    </div>
                    <div className="forgot-password">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <div className="form-inner signin-btn">
                    <button type="button" onClick={()=>{
        router.push('/admin-dashboard');

                    }}>Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 aside-image">
            <img src="/assets/img/side-right.png" alt="" style={{
              maxHeight:"96vh"
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
