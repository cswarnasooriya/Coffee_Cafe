import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Banner from './Components/Banner';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });


  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
    </div>
  )
}

export default App
