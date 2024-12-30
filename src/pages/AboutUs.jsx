import React from "react";
import image1 from "./images/annie-spratt-QckxruozjRg-unsplash.jpg";

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-gray-900 text-gray-200 py-10 px-[8rem]">
      <h1 className="font-bold text-2xl text-center mb-4">
        The people behind Craftsman Construct
      </h1>
      <p className="text-sm text-center text-gray-400 mb-8">
        We have a talented backroom team, including a powerhouse of technicians
        monitoring workers, making the <br />
        best buildings there can be.
      </p>

      <div className="flex justify-center mb-10">
        <img
          src={image1}
          alt="Team brainstorming"
          className="w-[700px] h-[400px] rounded-[1rem] shadow-lg"
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="italic text-lg">
          "A profound design process eventually makes the patron, the architect,
          and every occasional visitor in the building a slightly better human
          being."
        </p>
        <div className="mt-4 text-gray-400">
          <span className="font-bold"> Juhani Pallasmaa</span>, Software Finnish
          architect and former professor
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">
        <div className="text-center">
          <h2 className="text-xl font-bold">2017</h2>
          <p>Craftsman was launched in Poland</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">100%</h2>
          <p>Happy and appreciative partners & investors</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">10+</h2>
          <p>Skilled and talented constructors members</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">5+</h2>
          <p>Combined years of expertise</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
