/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls.jsx';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);


//activities
export const getSinglePackageById = (payload_data, id) => {
  return project.get(Urls.GET_SINGLE_PACKAGES_BY_ID+id, payload_data);
};
export const getSingleActivityById = (payload_data, id) => {
  return project.get(Urls.GET_SINGLE_ACTIVITES_BY_ID+id, payload_data);
};


//email otp validation
export const sendEmailValidation = (payload_data) => {
  return project.post(Urls.OTP_SEND_EMAIL, payload_data);
};
export const otpEmailValidation = (payload_data) => {
  return project.post(Urls.VERIFY_EMAIL_OTP, payload_data);
};
export const signupFunction = (payload_data) => {
  return project.post(Urls.SIGN_UP_FUNCTION, payload_data);
};
