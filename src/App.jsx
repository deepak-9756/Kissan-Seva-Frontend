import Marquee from "./components/pages/MarqueeStyle";
import Navbar from "./components/pages/Navbar";
import "./App.css";
import FarmerRegistration from "./components/registration/Farmer/FarmerRegistration";
import SliderPanel from "./components/pages/SliderPanel";

function App() {
  return (
    <>
      <div className="bg-no-repeat  bg-cover bg-center bg-[url('/public/assets/images/background-image.avif')]">
        <div className="pb-[6%] relative z-[12]">
          <Navbar />

          <div className="fixed z-[5]  max-[480px]:mt-[20%] max-[600px]:mt-[14%] max-[1048px]:mt-[8%] mt-[7%]">
            <Marquee />
          </div>
        </div>

        <div className="z-[10] max-[480px]:p-[25%] max-[480px]:px-[10%] max-[600px]:p-[14%] max-[1048px]:p-[8%] p-[3%]">
          <SliderPanel />
          <FarmerRegistration />
        </div>
      </div>
    </>
  );
}

export default App;
