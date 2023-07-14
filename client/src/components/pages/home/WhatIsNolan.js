import React, { useState } from "react";
import video_cover from "../../../assets/images/video_cover.webp";
const WhatIsNolan = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="what-container text-light px-5">
      <div className="row">
        <div className="col-md-6">
          <h2>What is NOLAN?</h2>
          <h3>Lights, camera, action!</h3>
          <p>
            NolanAI is the ultimate tool for any screenwriter looking to improve
            their craft. With its AI-powered features and user-friendly
            interface, it can help you bring your stories to life in the most
            efficient and effective way possible, while respecting your unique
            creative voice.
          </p>
          <button className="btn btn-danger">Explore our premium plan!</button>
        </div>
        <div className="col-md-6 p-sm-3 p-md-0">
          {showVideo ? (
            <iframe
              className="p-2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p6P4EDHqAV4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img
              src={video_cover}
              onClick={() => {
                setShowVideo(true);
              }}
              alt="nolan-preview-img"
              className="w-100 d-flex align-items-center rounded-0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatIsNolan;
