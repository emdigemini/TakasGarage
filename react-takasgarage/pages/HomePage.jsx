function HomeStart(){
  return (
    <div className="home">
      <div className="home-content" 
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <p className="welcome-text">
          <i className="bi bi-stars"></i>
          WELCOME TO TAKASGARAGE
        </p>
        <h1 className="main-heading">Find and Customize 
          <br />
        <span>Your Dream Car</span></h1>
        <p className="sub-text">
          Browse premium vehicles, buy with confidence, and transform sports and JDM cars into custom masterpieces.
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Search for cars, brands, or models..." />
          <button>Search →</button>
        </div>
      </div>
    </div>
  );
}

function CarCategory(){
  return (
    <div className="explore">
      <h2 
        data-aos="fade-up" 
        data-aos-duration="1200"
      >
        Explore Categories
      </h2>

      <p className="explore-description"
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        Choose your perfect ride from our showcased collection
      </p>

      <div 
        className="car-section">
        <div className="car-cards" 
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src="../images/normal-cars.jpg"/>
          <div className="category-details">
            <p className="category-title">Normal Cars</p>
            <p className="category-description">Premium sedans and SUVs for everyday luxury</p>
            <a href="#">Explore Now →</a>
          </div>
        </div>
        <div className="car-cards"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src="../images/sports-cars.jpg"/>
          <div className="category-details">
            <p className="category-title">Sports Cars</p>
            <p>Premium sedans and SUVs for everyday luxury</p>
            <a href="#">Explore Now →</a>
          </div>
        </div>
        <div className="car-cards"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img src="../images/jdm-cars.jpg"/>
          <div className="category-details">
            <p className="category-title">JDM Cars</p>
            <p className="category-description">Premium sedans and SUVs for everyday luxury</p>
            <a href="#">Explore Now →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopPicked(){
  return (
    <div className="top-picked">
      <h2 data-aos="fade-right"
      >Top Picked</h2>
      <p className="top-description"
        data-aos="fade-right"
      >Hand-picked premium vehicles for discerning enthusiasts</p>
      <br />
      <div className="top-car-section">
        <div className="top-car-cards" data-aos="fade-right">
          <div className="car-img">
            <img src="../images/featured/porsche911-gt3rs.jpg" />
          </div>
          <div className="top-car-details">
            <p className="top-car-name">Porsche 911 GT3RS</p>
            <p className="car-type">Porsche • Sports</p>
            <div className="car-specs">
              <div className="car-power">
                <p>Power</p>
                <p>518 HP</p>
              </div>
              <div className="car-accel">
                <p>0-60</p>
                <p>0-60 in 3.0 seconds</p>
              </div>
            </div>
            <hr />
            <div className="more-details">
              <div className="car-price">
                <p>Starting at</p>
                <p>₱14,500,000</p>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="top-car-cards"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="20"
          data-aos-offset="0"
        >
          <div className="car-img">
            <img src="../images/featured/gtr-r34.jpg" />
          </div>
          <div className="top-car-details">
            <p className="top-car-name">Nissan GT-R R34</p>
            <p className="car-type">Nissan • JDM</p>
            <div className="car-specs">
              <div className="car-power">
                <p>Power</p>
                <p>550 HP</p>
              </div>
              <div className="car-accel">
                <p>0-60</p>
                <p>0-60 in 3.5 seconds</p>
              </div>
            </div>
            <hr />
            <div className="more-details">
              <div className="car-price">
                <p>Starting at</p>
                <p>₱10,600,000</p>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="top-car-cards" data-aos="fade-left">
          <div className="car-img">
            <img src="../images/featured/lambo-aventador.jpg" />
          </div>
          <div className="top-car-details">
            <p className="top-car-name">Lamborghini Aventador LP 780-4 Ultimae</p>
            <p className="car-type">Lamborghini • Sports</p>
            <div className="car-specs">
              <div className="car-power">
                <p>Power</p>
                <p>769 HP</p>
              </div>
              <div className="car-accel">
                <p>0-60</p>
                <p>0-60 in 2.8 seconds</p>
              </div>
            </div>
            <hr />
            <div className="more-details">
              <div className="car-price">
                <p>Starting at</p>
                <p>₱29,000,000</p>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomizeLink(){
  return (
    <>
      <div className="customize-your-car" data-aos="fade-up">
        <div className="customize-text">
          <div className="thunder-icon">
            <i className="bi bi-lightning-charge"></i>
          </div>
          <p>Ready to Build Your Dream?</p>
          <p>Start customizing your sports or JDM car with our advanced builder</p>
          <button>
            Start Customizing 
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export function HomePage(){
  return (
    <>
      <HomeStart />
      <CarCategory />
      <TopPicked />
      <CustomizeLink />
    </>
  );
}