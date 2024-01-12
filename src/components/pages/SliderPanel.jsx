import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderPanel() {
  const slider = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661963981438-a139811fe1b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybWVyfGVufDB8fDB8fHww",
    },
    {
      img: "https://images.unsplash.com/photo-1589483233144-795633bf597c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxmYXJtZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1595009901108-41259ec1b3f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWVyJTIwbW9kaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1lciUyMG1vZGl8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1573744271804-5bbfe6ee19da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1614157606535-2f3990b919a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1564071074163-d5bb883f6bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYXJtZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="relative">
        <ul className="absolute bottom-10  right-[40%]">
          <span>{dots}</span>
        </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // ek baat dhyaan rhe ki code jsx m compulsary wrap hoga nahi toh error aygi m dhyan rkhunga

    <div className="mx-[1%] mt-[1%] m-auto">
      <Slider {...settings}>
        {slider.map((img) => (
          <div className={`card px-1  rounded-xl   shadow-md`}>
            <figure>
              <img
                className={`h-[28rem] w-[100%] rounded-xl`}
                src={img.img}
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderPanel;
