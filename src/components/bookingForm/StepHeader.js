const StepHeader = () => {
  return (
    <div className="step-header-ui bdf-block mb-4">
      <h4>Booking ID: 000346798254</h4>
      <div className="step-blurb">
        <div className="step-blurb-item">
          <span className="step-blurb-item-icon">01</span>
          <p>Add To Cart</p>
        </div>
        <div className="step-blurb-item">
          <span className="step-blurb-item-icon">02</span>
          <p>Payment</p>
        </div>
        <div className="step-blurb-item">
          <span className="step-blurb-item-icon">03</span>
          <p>Print Voucher</p>
        </div>
      </div>
    </div>
  );
};
export default StepHeader;
