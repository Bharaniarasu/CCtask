const Specification = () => {
  return (
    <>
      <div className="row specs-row gap-4 text-light">
        <div className="col-md-3 specs-box">
          <div className="row">
            <div className="col-3">
              <span className="material-symbols-outlined  icon">neurology</span>
            </div>
            <div className="col-9">
              <h5 className="fw-bold">AI-copilot</h5>
              <p>
                Enhance your screenwriting experience with GPT-powered editing
                features and AI-generated imagery
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 specs-box">
          <div className="row">
            <div className="col-3">
              <span className="material-symbols-outlined  icon">cloud</span>
            </div>
            <div className="col-9">
              <h5 className="fw-bold">Offline-Capable</h5>
              <p>
                Work on the go without having to rely on the cloud and an
                always-required internet connection
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 specs-box">
          <div className="row">
            <div className="col-3">
              <span className="material-symbols-outlined  icon">
                currency_exchange
              </span>
            </div>
            <div className="col-9">
              <h5 className="fw-bold">Free</h5>
              <p>
                Enjoy the NOLAN free version while also influencing the further
                development of the product.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 specs-box">
          <div className="row">
            <div className="col-3">
              <span className="material-symbols-outlined  icon">
                verified_user
              </span>
            </div>
            <div className="col-9">
              <h5 className="fw-bold">Secure</h5>
              <p>
                Don’t worry, your screenplay is secure and encrypted with Nolan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specification;
