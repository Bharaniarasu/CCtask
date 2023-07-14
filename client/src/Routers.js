import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Editor from "./components/pages/editor/Editor";
import DashBoard from "./components/pages/dashBoard/DashBoard";
import Blog from "./components/pages/blog/Blog";
import Profile from "./components/pages/profile/Profile";
import Pricing from "./components/pages/pricing/Pricing";
import { useSelector } from "react-redux";
const Routers = () => {
  const { user } = useSelector((state) => state.AuthState);
  console.log(user);
  // useEffect(() => {
  //   if (!user) {
  //   }
  // }, [user]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={user && user.success ? <Navigate to="/" /> : <Login />}
        />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/editor" element={<Editor />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default Routers;
