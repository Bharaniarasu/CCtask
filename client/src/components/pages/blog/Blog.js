import React from "react";
import "./blog.scss";
const Blog = () => {
  return (
    <>
      <div className="blog-banner">
        <div className="banner-img"></div>
      </div>
      <div className="left-shadow"></div>
      <div className="right-shadow"></div>
      <div className="banner-content">
        <div className="card border-0 ">
          <div className="card-header border-0"></div>
          <div className="card-body pt-4 mt-4 ps-0">
            <p className="text-light">Blog</p>
            <h1>
              {" "}
              Unlocking the secrets of
              <br /> successful screenwriting
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
