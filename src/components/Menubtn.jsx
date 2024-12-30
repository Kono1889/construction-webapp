import React, { useState, useEffect, useCallback } from "react";

const Menubtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      // Trigger fade-out animation before closing
      setIsFadingOut(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsFadingOut(false);
      }, 300); // Match the fade-out animation duration
    } else {
      setMenuOpen(true);
    }
  }, [menuOpen]);

  const closeMenu = useCallback(
    (e) => {
      const menu = document.getElementById("menu");
      const button = document.getElementById("menu-button");
      if (
        menu &&
        !menu.contains(e.target) &&
        button &&
        !button.contains(e.target)
      ) {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen, closeMenu]);

  return (
    <div>
      {/* Floating Button */}
      <button
        id="menu-button"
        onClick={toggleMenu}
        className="fixed top-[60px] right-4 bg-[rgba(0,0,0,0.45)] text-white p-5 rounded-full shadow-md z-50 sm:top-[60px] sm:right-6"
      >
        ☰
      </button>

      {/* Responsive Menu */}
      {menuOpen || isFadingOut ? (
        <div
          id="menu"
          className={`fixed top-0 left-0 w-[60%] sm:w-[100%] lg:w-[250px] h-screen bg-[rgba(255,255,255,0.7)] shadow-lg z-40 transition-all duration-300 ${
            menuOpen && !isFadingOut
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col items-start p-10 space-y-10 text-base sm:text-[1.5rem]">
              {[
                "Home",
                "About Us",
                "Products",
                "Projects",
                "Sustainability",
              ].map((item, index) => (
                <li
                  key={item}
                  style={{
                    animation: `fadeIn 0.3s ease ${index * 0.2}s forwards`,
                    opacity: 0,
                  }}
                  className="group relative cursor-pointer"
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative text-gray-900"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Menubtn;
