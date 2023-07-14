import "../../layouts/layouts.scss";
import Logo from "../../../assets/images/logo.webp";

const Banner = () => {
  return (
    <>
      <div className="home-banner">
        <div className="banner-img"></div>
      </div>
      <div className="left-shadow"></div>
      <div className="right-shadow"></div>

      <div className="banner-content">
        <div className="card border-0 ">
          <div className="card-header border-0">
            <img src={Logo} alt="" className="w-50" />
          </div>
          <div className="card-body pt-1">
            <h1>Free Script Writing Software</h1>
            <h2>
              Unleash creativity with AI Copilot - craft compelling
              <br /> screenplays
            </h2>
          </div>
          <div className="card-footer border-0">
            <button className="btn btn-danger ">Go To Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
