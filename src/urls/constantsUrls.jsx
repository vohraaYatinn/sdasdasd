/* eslint-disable */
export class Urls {
    static API_PREFIX = 'api/';
    //packages
    static GET_SINGLE_PACKAGES_BY_ID = Urls.API_PREFIX + 'packages/';



    //activites
    static GET_SINGLE_ACTIVITES_BY_ID = Urls.API_PREFIX + 'activities/';


    

    //user
    static VERIFY_EMAIL_OTP = Urls.API_PREFIX + 'auth/verify-otp/';
    static OTP_SEND_EMAIL = Urls.API_PREFIX + 'auth/sign-in-email-otp/';
    static SIGN_UP_FUNCTION = Urls.API_PREFIX + 'auth/sign-up/';
}
