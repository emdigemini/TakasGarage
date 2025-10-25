import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export function NavBar(){

  useEffect(() => {
    const scrollHandler = () => {
      const header = document.querySelector('header');

      if(window.scrollY > 100){
        header.classList.remove('inactive-border');
        header.classList.add('active-border');
      } else {
        header.classList.remove('active-border');
        header.classList.add('inactive-border');
      }
    }

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  

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
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/">Home</NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <NavLink to="/browse">Browse</NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <NavLink to="/featured">Featured</NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>
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
