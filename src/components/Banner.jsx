import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="w-250 h-full flex justify-center">
      <div className="content">
        <img className="banner-img " src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
