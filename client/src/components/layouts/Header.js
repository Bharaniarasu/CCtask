import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.webp";
import "./layouts.scss";
import { useDispatch, useSelector } from "react-redux";
import { showPanel } from "../redux/slices/ScriptSlice";
import { loadUser } from "../redux/actions/AuthAction";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const { user } = useSelector((state) => state.AuthState);
  console.log("Header", user);
  const dispatch = useDispatch();
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? "navcolor navbar navbar-expand-md   w-100 "
          : "navbar navbar-expand-md  w-100 "
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand ms-2 p-1" href="/">
          <img src={Logo} alt="logo" width="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-target="#navbarContent"
          data-bs-toggle="collapse"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-ico text-light">...</span>
        </button>
        <div
          className="collapse navbar-collapse d-md-flex   justify-content-md-end justify-content-center nav-links"
          id="navbarContent"
        >
          <ul className="navbar-nav gap-3 pe-3 position-absolute end-0">
            {user ? (
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                // href="/chat"
                onClick={() => dispatch(showPanel())}
              >
                Create Script
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
