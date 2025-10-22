export function HomePage(){
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
