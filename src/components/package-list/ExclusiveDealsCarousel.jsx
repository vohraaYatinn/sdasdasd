// Import necessary dependencies
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './ExclusiveDeals.css';

const ExclusiveDeals = () => {
  const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
      className={`custom-arrow custom-arrow-${direction}`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '-50px',
        right: direction === 'left' ? '50px' : '10px',
        zIndex: 10,
        backgroundColor: direction === 'left' ? '#adaaaa' : 'orange',
        height: '20px',
        width: '20px',
        borderRadius: '100%',
        color: 'white',
        textAlign: 'center',
        lineHeight: '20px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {direction === 'left' ? '❮' : '❯'}
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <CustomArrow direction="right" />, // Right arrow
    prevArrow: <CustomArrow direction="left" />,  // Left arrow
  };

  const slides = [
    {
      image: '/assets/img/activity-details/png1.png',
      title: 'Solo Travellers',
      text: 'Social Travel for 18-35 years old.',
    },
    {
      image: '/assets/img/activity-details/png2.png',
      title: 'Europe Summer 2025',
      text: 'EMI Starting from ₹16,516/- Per Month',
    },
    {
      image: '/assets/img/activity-details/png3.png',
      title: 'Discover Dubai in Cruise Style',
      text: 'EMI Starting from ₹8148/- Per Month',
    },
    {
      image: '/assets/img/activity-details/png4.png',
      title: 'Yas island Tour Packages',
      text: 'Price starting from Rs47,838 PP',
    },
  ];

  return (
    <div className="exclusive-deals-container">
      <div className="exclusive-deals-header">
        <div className='exclusive-deals-title'>
          <h2 className=''>Exclusive <strong>Deals</strong></h2>
          <div className="hot-deal">HOT DEAL </div>
        </div>
      </div>
      <Slider {...settings} className="exclusive-deals-carousel">
        {slides.map((slide, index) => (
          <div className="carousel-cover" key={index}>
            <div className="carousel-slide">
              <div className="slide-content">
                <div className="image-container">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="slide-details">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                  <button className="book-now">Book Now
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.44301 9.42564C0.367811 9.29539 0.347447 9.16604 0.381917 9.0376C0.416386 8.90916 0.498797 8.80731 0.629147 8.73205L11.4319 2.49505L6.88417 1.2784C6.73 1.23716 6.61532 1.15141 6.54012 1.02117C6.46493 0.89092 6.45271 0.756871 6.50347 0.619023C6.55424 0.481174 6.64479 0.374621 6.77514 0.299364C6.90549 0.224105 7.03835 0.190817 7.17371 0.199497L12.9548 1.74609C13.0764 1.80615 13.1747 1.9013 13.2499 2.03155C13.3251 2.16179 13.3584 2.29458 13.3496 2.42989L11.7984 8.20974C11.7383 8.33131 11.643 8.42972 11.5127 8.50498C11.3823 8.58024 11.2448 8.60538 11.1 8.58042C10.9552 8.55546 10.8452 8.47786 10.77 8.34761C10.6949 8.21736 10.6779 8.07517 10.7193 7.92104L11.9395 3.37423L1.13674 9.61123C1.00639 9.68648 0.876978 9.70693 0.74851 9.67256C0.620042 9.63819 0.518208 9.55588 0.44301 9.42564Z" fill="#F1871C" />
                    </svg>
                  </button>
                  <div className="fixed-departure">FIXED DEPARTURE</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExclusiveDeals;
