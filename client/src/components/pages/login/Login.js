import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";
import { loginAction } from "../../redux/actions/AuthAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.AuthState);
  console.log(user);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user && user.success) {
      navigate("/");
    }
  }, [user]);
  useEffect(() => {
    if (userToken) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${userToken.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res.data);

          dispatch(loginAction(res.data, null));
          navigate("/");

          // setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userToken, dispatch, navigate]);

  const logOut = () => {
    googleLogout();
    // setProfile(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login-banner">
        <div className="banner-img"></div>
      </div>

      <div className="banner-content">
        <div className="login-container">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Log in</h1>
            <h2>Log in to unlock the full Nolan Experience.</h2>
          </div>
          <div className="form-container row">
            <form onSubmit={submitHandler} className="col-md-10">
              <div className="form-group">
                <label className="form-label">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="form-group mt-3">
                <label className="form-label">UserName</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <input
                type="submit"
                className=" btn btn-primary form-control mt-5"
                value="Log in"
              />
              <div className="mt-3 text-center">or</div>
              <button
                className="btn btn-outline-primary w-100 mt-3"
                onClick={login}
              >
                Log in With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
