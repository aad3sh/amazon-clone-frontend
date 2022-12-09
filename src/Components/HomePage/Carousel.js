import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { useSelector } from "react-redux";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-angle-left" style={{ color: "blue" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-angle-right" style={{ color: "blue" }}></i>
    </div>
  );
};
const Carousel = () => {
  const login = useSelector((state) => state.LogIn);
  return (
    <>
    {login.logedIn ? (
      <Slider
        autoplay={true}
        autoplaySpeed={2000}
        dots={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img
            src="https://wallpaperaccess.com/full/1663378.jpg"
            style={{ width: "100%", height: "50vh" }}
            alt="Profile Banners"
          />
        </div>

        <div>
          <img
            src="https://wallpaperaccess.com/full/1663378.jpg"
            style={{ width: "100%", height: "50vh" }}
            alt="Profile Banners"
          />
        </div>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/37/123/631/beach-cocktails-sand-tropical-wallpaper-preview.jpg"
            style={{ width: "100%", height: "50vh" }}
            alt="Profile Banners"
          />
        </div>
        <div>
          <img
            src="https://wallpaperaccess.com/full/1663378.jpg"
            style={{ width: "100%", height: "50vh" }}
            alt="Profile Banners"
          />
        
        </div>
      </Slider>

    ) :(
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img
              src="https://wallpaperaccess.com/full/1663378.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />

        </div>

        <div>
          <img
              src="https://www.tourissimo.travel/hubfs/Blog_pictures/Spritz/Spritz%20Blog.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>

        <div>
          <img
              src="https://media.cntraveler.com/photos/5ea6276040ddb800081611ff/16:9/w_2560%2Cc_limit/AperolSprtiz-GettyImages-1133252122.jpg"
              style={{ width: "100%", height: "90vh" }}
              alt="Profile Banners"
          />
        </div>
      </Slider>
    )}
    </>
  );
};
export default Carousel;
