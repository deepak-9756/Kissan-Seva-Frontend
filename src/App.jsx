import Marquee from "./components/pages/MarqueeStyle";
import Navbar from "./components/pages/Navbar";
import FarmerRegistration from "./components/registration/Farmer/FarmerRegistration";

function App() {
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('/public/assets/images/about_img1.jpg')]">
        <Navbar></Navbar>
        <Marquee />
        <FarmerRegistration/>
      </div>
    </>
  );
}  

export default App;
