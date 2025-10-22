export function NavBar(){
  return (
    <header>
      <div className="logo"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
        <div className="icon">
          <i className="bi bi-car-front-fill"></i>
        </div>
        <h1 className="webname">TAKASGARAGE</h1>
      </div>
      <nav>
        <ul className="navbar">
          <li className="active"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400"
          >Home</li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >Browse</li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
          >Featured</li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >Dashboard</li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >About</li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="900"
          >Contact</li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="sign-in"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <i className="bi bi-person"></i>
          Sign In
        </button>
        <button className="cart"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1100"
        >
          <i className="bi bi-cart"></i>
        </button>
      </div>
    </header>
  );
}