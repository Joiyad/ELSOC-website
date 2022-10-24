import React from "react";
import About from "../components/HomepageComponents/AboutUs";
import Background from "../components/Background/Background";
import Faq from "../components/HomepageComponents/Faq";
import Front from "../components/HomepageComponents/TitleHome";
import Gallary from "../components/HomepageComponents/Gallary";

const Home = () => {
  return (
    <>
      <Background />
      <Front />
      <div className="bg-gray-900 bg-opacity-70">
      <About />
      <Gallary />
      <Faq />
      </div>
    </>
  );
};

export default Home;
