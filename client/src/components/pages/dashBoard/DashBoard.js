import "./dashboard.scss";
const DashBoard = () => {
  return (
    <>
      <div className="dashboard-banner">
        <div className="banner-img"></div>
      </div>
      <div className="left-shadow"></div>
      <div className="right-shadow"></div>
      <div className="banner-content justify-content-center">
        <div className="card border-0 ">
          <div className="card-header border-0"></div>
          <div className="card-body pt-1">
            <h1>Your Latest Scripts</h1>
            <button className="btn btn-danger d-block mx-auto">
              Upgrade your plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
