import SelectComponent from "@/uitils/SelectComponent";

const PassengerDetails = () => {
  return (
    <>
      <div className="bdf-block passenger-form mb-4">
        <div className="psngr-form-header">
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5279 12.811H19.6719C19.8659 13.343 19.9649 13.904 19.9649 14.47V21.483C19.9649 21.719 19.9239 21.954 19.8459 22.176H22.9139C24.0609 22.175 24.9909 21.245 24.9919 20.098V16.275C24.9899 14.362 23.4399 12.813 21.5279 12.811Z"
                fill="#F36911"
              />
              <path
                d="M6.026 14.471C6.026 13.905 6.124 13.343 6.318 12.811H4.463C2.551 12.813 1.002 14.362 1 16.273V20.097C1.001 21.243 1.931 22.173 3.078 22.174H6.146C6.067 21.953 6.027 21.719 6.027 21.482L6.026 14.471Z"
                fill="#F36911"
              />
              <path
                d="M15.1191 11.0059H10.8771C8.96506 11.0079 7.41606 12.5569 7.41406 14.4689V21.4829C7.41406 21.8659 7.72406 22.1749 8.10706 22.1749H17.8851C18.2681 22.1749 18.5781 21.8649 18.5781 21.4829V14.4689C18.5761 12.5589 17.0291 11.0099 15.1191 11.0059Z"
                fill="#F36911"
              />
              <path
                d="M12.9931 1.823C10.6931 1.823 8.82812 3.688 8.82812 5.988C8.82812 8.288 10.6931 10.153 12.9931 10.153C15.2931 10.153 17.1581 8.288 17.1581 5.988C17.1581 3.688 15.2931 1.823 12.9931 1.823Z"
                fill="#F36911"
              />
              <path
                d="M5.68131 5.70508C3.96231 5.70608 2.56931 7.10108 2.57031 8.82008C2.57131 10.5391 3.96631 11.9321 5.68531 11.9311C7.40331 11.9301 8.79531 10.5371 8.79631 8.81908C8.79731 7.10008 7.40331 5.70608 5.68431 5.70508H5.68131Z"
                fill="#F36911"
              />
              <path
                d="M20.3103 5.70508C18.5903 5.70508 17.1953 7.10008 17.1953 8.82008C17.1953 10.5411 18.5903 11.9351 20.3103 11.9351C22.0303 11.9351 23.4253 10.5411 23.4253 8.82008C23.4253 7.10008 22.0303 5.70508 20.3103 5.70508Z"
                fill="#F36911"
              />
            </svg>
          </span>
          <h4>Lead Passenger Details</h4>
        </div>
        <div>
          <form className="row m-0">
            <div className="form-inner mb-20 col-md-2">
              <SelectComponent
                options={["Mr.", "Ms.", "Mcs"]}
                placeholder={["Mr."]}
              />
            </div>
            <div className="form-inner mb-20 col-md-5">
              <input type="text" placeholder="First Name *" />
            </div>
            <div className="form-inner mb-20 col-md-5">
              <input type="text" placeholder="Last Name *" />
            </div>
            <div className="form-inner mb-20 col-md-4">
              <input type="email" placeholder="Email Address *" />
            </div>
            <div className="form-inner mb-20 col-md-4">
              <SelectComponent
                options={["Indian", "Us", "Bangladesh"]}
                placeholder={["Nationality"]}
              />
            </div>
            <div className="form-inner mb-20 col-md-4">
              <div className="d-flex align-items-center gap-1 ">
                <div className="form-inner p-0">
                  <input type="number" placeholder="ISD Code" />
                </div>
                <div className="form-inner p-0">
                  <input type="number" placeholder="Phone Number *" />
                </div>
              </div>
            </div>
            <div className="form-inner mb-10">
              <textarea placeholder="Special Request" defaultValue={""} />
            </div>
            <div className="form-inner">
              <div class="checkbox-wrapper-46">
                <input type="checkbox" id="cbx-46" class="inp-cbx" />
                <label for="cbx-46" class="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>Update booking information in your account</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bdf-block passenger-form">
        <div className="psngr-form-header">
          <span>
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00226 11.6691C9.47826 10.7871 9.72325 9.8001 9.71525 8.7981H8.28925C8.28125 9.8001 8.52626 10.7871 9.00226 11.6691Z"
                fill="#F36911"
              />
              <path
                d="M5.40625 8.79907C5.62325 9.85007 6.28525 10.7521 7.22225 11.2741C6.98925 10.4691 6.85425 9.63707 6.82225 8.79907H5.40625Z"
                fill="#F36911"
              />
              <path
                d="M7.22225 4.86108C6.28525 5.38208 5.62225 6.28608 5.40625 7.33608H6.82025C6.85325 6.49808 6.98825 5.66608 7.22225 4.86108Z"
                fill="#F36911"
              />
              <path
                d="M10.7812 11.2731C11.7182 10.7521 12.3802 9.8481 12.5962 8.7981H11.1823C11.1493 9.6371 11.0142 10.4691 10.7812 11.2731Z"
                fill="#F36911"
              />
              <path
                d="M8.28925 7.33706H9.71525C9.72325 6.33506 9.47826 5.34806 9.00226 4.46606C8.52626 5.34806 8.28125 6.33506 8.28925 7.33706Z"
                fill="#F36911"
              />
              <path
                d="M14.8705 0H3.1375C1.9225 0 0.9375 0.984 0.9375 2.2V19.8C0.9375 21.016 1.9225 22 3.1375 22H14.8705C16.0855 22 17.0705 21.016 17.0705 19.8V2.2C17.0705 0.984 16.0855 0 14.8705 0ZM11.2045 19.066H6.8045V17.599H11.2045V19.066ZM12.6715 16.134H5.3375V14.667H12.6705L12.6715 16.134ZM9.0045 13.2C6.1695 13.2 3.8715 10.902 3.8715 8.066C3.8715 5.232 6.1695 2.933 9.0045 2.933C11.8395 2.933 14.1375 5.232 14.1375 8.066C14.1345 10.9 11.8385 13.197 9.0045 13.2Z"
                fill="#F36911"
              />
              <path
                d="M10.7812 4.86108C11.0142 5.66708 11.1493 6.49808 11.1813 7.33608H12.5962C12.3802 6.28608 11.7172 5.38308 10.7812 4.86108Z"
                fill="#F36911"
              />
            </svg>
          </span>
          <h4>Single Entry Tourist Visa</h4>
        </div>
        <h6>Passenger 1</h6>

        <div>
          <form className="row m-0">
            <div className="form-inner mb-20 col-md-2">
              <SelectComponent
                options={["Mr.", "Ms.", "Mcs"]}
                placeholder={["Mr."]}
              />
            </div>
            <div className="form-inner mb-20 col-md-5">
              <input type="text" placeholder="First Name *" />
            </div>
            <div className="form-inner mb-20 col-md-5">
              <input type="text" placeholder="Last Name *" />
            </div>

            <div className="form-inner mb-20 col-md-4">
              <SelectComponent
                options={["Male", "Female", "Transgender"]}
                placeholder={["Male"]}
              />
            </div>
            <div className="form-inner mb-20 col-md-4">
              <input type="text" placeholder="Passport No *" />
            </div>
            <div className="form-inner mb-20 col-md-4">
              <SelectComponent
                options={["Emirati", "New", "Option"]}
                placeholder={["Emirati"]}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default PassengerDetails;
