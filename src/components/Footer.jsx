import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Craftsman Constructs</h3>
          <p className="text-gray-400">
            Building the future, preserving the past.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#sustainability" className="hover:text-blue-400">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:info@craftsmanconstructs.com"
              className="hover:text-blue-400"
            >
              info@craftsmanconstructs.com
            </a>
          </p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">
            Address: 123 Builder's Lane, Construct City
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Craftsman Constructs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
