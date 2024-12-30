import React from "react";
import FoundersCard from "../components/FoundersCard";
import image1 from "../components/images/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg";
import image2 from "../components/images/taylor-grote-UiVe5QvOhao-unsplash.jpg";
import image3 from "../components/images/icons8-team-m0oSTE_MjsI-unsplash.jpg";



const Founders = () => {
  return (
    <div id="projects" className="p-4">
      <h1 className="text-center text-[3rem] font-bold">Founders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <FoundersCard
          imageUrl={image1}
          altTitle="image"
          title="Mr. Mush"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FoundersCard
          imageUrl={image2}
          altTitle="image"
          title="Mr. Kay"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FoundersCard
          imageUrl={image3}
          altTitle="image"
          title="Mr. Boston"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </div>
  );
};

export default Founders;
