import React from "react";
import OurProjectCards from "../components/OurProjectCards";
import cardImage1 from "./images/photo-1513467535987-fd81bc7d62f8.avif";

const OurProjects = () => {
  return (
    <div id = "projects" className="p-4">
      <h1 className="text-center text-[3rem] font-bold">Our Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <OurProjectCards
          title="Conference Center, Accra"
          date="2020-2022"
          category="EVENT CENTER"
          imageUrl={cardImage1}
        />
        <OurProjectCards
          title="Conference Center, Accra"
          date="2020-2022"
          category="EVENT CENTER"
          imageUrl={cardImage1}
        />
        <OurProjectCards
          title="Conference Center, Accra"
          date="2020-2022"
          category="EVENT CENTER"
          imageUrl={cardImage1}
        />
        <OurProjectCards
          title="Conference Center, Accra"
          date="2020-2022"
          category="EVENT CENTER"
          imageUrl={cardImage1}
        />
      </div>
    </div>
  );
};

export default OurProjects;
