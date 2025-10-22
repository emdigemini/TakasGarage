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
        className="car-section"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="car-cards">
          <img src="../images/normal-cars.jpg"/>
          <div className="category-details">
            <p className="category-title">Normal Cars</p>
            <p className="category-description">Premium sedans and SUVs for everyday luxury</p>
            <a href="#">Explore Now →</a>
          </div>
        </div>
        <div className="car-cards">
          <img src="../images/sports-cars.jpg"/>
          <div className="category-details">
            <p className="category-title">Sports Cars</p>
            <p>Premium sedans and SUVs for everyday luxury</p>
            <a href="#">Explore Now →</a>
          </div>
        </div>
        <div className="car-cards">
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
      <h2>Top Picked</h2>
      <p className="top-description">Hand-picked premium vehicles for discerning enthusiasts</p>
      <div className="top-car-section">
        <div className="top-car-cards">
          <img src="../images/featured/porsche911-gt3rs.jpg" />

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
                <p>$250,000</p>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="top-car-cards">
          <img src="../images/featured/gtr-r34.jpg" />

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
                <p>$250,000</p>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="top-car-cards">
          <img src="../images/featured/lambo-aventador.jpg" />

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
          </div>
          <hr />
         <div className="more-details">
            <div className="car-price">
              <p>Starting at</p>
              <p>$250,000</p>
            </div>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExploreCategories() {
  return (
    <>
      <CarCategory />
      <TopPicked />
    </>
  );
}
