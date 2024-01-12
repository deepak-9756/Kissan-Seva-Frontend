import Marquee from "./components/pages/MarqueeStyle";
import Navbar from "./components/pages/Navbar";
import "./App.css";
import FarmerRegistration from "./components/registration/Farmer/FarmerRegistration";
import SliderPanel from "./components/pages/SliderPanel";

function App() {
  return (
    <>
      <div className="bg-no-repeat   bg-cover bg-center bg-[url('/public/assets/images/background-image.avif')]">
        <div className="pb-[5%] relative z-[12]">
          <Navbar />
        </div>
        <div className="fixed z-[10] mt-[1%]">
          <Marquee />
        </div>
        <div className="z-[10] p-[3%]">
          <SliderPanel />
          <FarmerRegistration />
        </div>
      </div>
    </>
  );
}

export default App;
