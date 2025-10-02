import { useState } from "react";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { content } from "../../data/content";
import { commonStyles } from "./CommonStyles";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-600">
        <AppBar position="sticky" id="app-bar" className="z-50">
          <Toolbar className="flex justify-between bg-green-600 p-2">
            {/* Logo */}
            <Link
              to="/"
              className="flex gap-1 items-center"
              onClick={() => {
                window.scrollTo(0, 0); // Scroll to top
              }}
            >
              <img
                src={content.header.siteLogo2}
                className="rounded-md w-12"
                alt={content.header.logoAlt}
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-4" aria-label="Main navigation">
              {content.header.navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="relative group">
                    {/* Parent Menu Button */}
                    <Button
                      color="inherit"
                      className="relative z-50 group-hover:text-white flex items-center"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item.name}
                      {/* Chevron icon */}
                      <span className="ml-2">
                        <FaChevronDown className={`transition-transform duration-300`} />
                      </span>
                    </Button>

                    {/* Submenu */}
                    <div
                      className={`w-max absolute left-0 bg-green-800 text-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                    >
                      <div className="hover:group">
                        {item.submenu.map((subitem) => (
                          <Link
                            to={subitem.path}
                            key={subitem.name}
                            className={`block px-4 py-2 rounded-md hover:bg-green-700`}
                            onClick={() => {
                              window.scrollTo(0, 0); // Scroll to top
                            }}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    key={item.name}
                    onClick={() => {
                      window.scrollTo(0, 0); // Scroll to top
                    }}
                  >
                    <Button color="inherit">{item.name}</Button>
                  </Link>
                )
              )}
            </nav>

            {!isMobile && (
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0); // Scroll to top
                }}
              >
                <Button color="inherit" className={commonStyles.ctaButton}>
                  Contact Us
                </Button>
              </Link>
            )}

            {/* Mobile Menu Icon - Only for smaller screens */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                className="md:hidden"
                id="menu"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-green-600 p-4 md:hidden`}>
          {content.header.navItems.map((item) =>
            item.submenu ? (
              <div key={item.name}>
                <button
                  className="text-white w-full text-left py-2 flex justify-between items-center"
                  onClick={() => setDropdownOpen(isDropdownOpen === item.name ? null : item.name)}
                >
                  {item.name}
                  {/* Chevron icon for mobile */}
                  <span className="ml-2">
                    {isDropdownOpen === item.name ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {isDropdownOpen === item.name && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        to={subitem.path}
                        key={subitem.name}
                        className="block text-white py-2"
                        onClick={() => {
                          setMobileMenuOpen(false); // Close mobile menu
                          window.scrollTo(0, 0); // Scroll to top
                        }}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                key={item.name}
                className="block text-white py-2"
                onClick={() => {
                  setMobileMenuOpen(false); // Close mobile menu
                  window.scrollTo(0, 0); // Scroll to top
                }}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="block text-white py-2"
            onClick={() => {
              setMobileMenuOpen(false); // Close mobile menu
              window.scrollTo(0, 0); // Scroll to top
            }}
          >
            Contact Us
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
