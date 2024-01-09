import Marquee from "./components/pages/MarqueeStyle";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-cover bg-no-repeat bg-center  bg-[url('src/images/background-image.avif')]">
        <Navbar></Navbar>
        <Marquee />
      </div>
    </>
  );
}

export default App;
