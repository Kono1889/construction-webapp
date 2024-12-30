import React from "react";
import "./styles.css";
import videobg from "./images/landing_bg.mp4";
import Menubtn from "../components/Menubtn";
import OurProjects from "./OurProjects";
import Founders from "./Founders";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
// import LandingCards from "../components/LandingCards";

const LandingPage = () => {
  return (
    <div id="landingPage">
      <Menubtn />
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videobg}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
          <p className="text-4xl sm:text-5xl font-bold mb-4">
            Craftsman Constructs
          </p>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 px-6 sm:px-12 py-10">
        <div className="">
          {/* <LandingCards
            text1="Lorem Ipsum"
            text2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu."
          />
        </div>
        <div>
          <LandingCards
            text1="Lorem Ipsum"
            text2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu."
          /> */}
        </div>
      </div>
      <OurProjects />
      <Founders/>
      <AboutUs/>

      <Footer/>
    </div>
  );
};

export default LandingPage;
