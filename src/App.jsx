import Marquee from "./components/pages/MarqueeStyle";
import Navbar from "./components/pages/Navbar";
import './App.css'
import FarmerRegistration from "./components/registration/Farmer/FarmerRegistration";
import SliderPanel from "./components/pages/SliderPanel";

function App() {
  return (
    <>
      <div className="bg-no-repeat h-screen bg-cover bg-center bg-[url('public/assets/images/background-image.avif')]">
        <Navbar></Navbar>
        <Marquee />
        {/* <FarmerRegistration/> */}
       
          <SliderPanel />
       
      </div>
    </>
  );
}  

export default App;
