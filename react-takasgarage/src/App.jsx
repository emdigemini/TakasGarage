import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { NavBar } from "../components/Navbar"
import { HomePage } from "../pages/HomePage"
import { ExploreCategories } from "../pages/ExploreCategories";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <HomePage />
      <ExploreCategories />
    </>
  )
}

export default App
