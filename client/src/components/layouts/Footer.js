const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>© Nolan 2023</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="terms-of-service">Terms of Service</a>
        </p>
      </div>
      <div className="row follow_us">
        <div className="col-lg-2 px-3 text-center">Follow Us:</div>
        <div className="col-2 text-center">
          <a className="" href="">
            <span className="material-symbols-outlined icon">
              nest_heat_link_gen_3
            </span>
          </a>
        </div>
        <div className="col-2 text-center">
          <a className="" href="">
            <span className="material-symbols-outlined icon">
              nest_heat_link_gen_3
            </span>
          </a>
        </div>
        <div className="col-2 text-center">
          <a className="" href="">
            <span className="material-symbols-outlined icon">
              smart_display
            </span>
          </a>
        </div>
      </div>
      <p>
        <a href="">hello@nolanai.app</a>
      </p>
    </div>
  );
};

export default Footer;
