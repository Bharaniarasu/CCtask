import React from "react";
import Banner from "./Bannner";
import Specification from "./Specification";
import WhatIsNolan from "./WhatIsNolan";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="px-1 text-light">
        <Specification />
        <WhatIsNolan />
        <Features />
      </div>
    </>
  );
};

export default Home;
