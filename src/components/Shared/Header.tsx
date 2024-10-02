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
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" }); // Query for mobile screens
  // const isDesktop = useMediaQuery({ query: "(min-width: 769px)" }); // Query for desktop screens

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header>
        <AppBar position="static" className="z-50">
          <Toolbar className="flex justify-between bg-green-500">
            {/* Logo */}
            <Link to="/" className="flex gap-1 items-center">
              <img src={content.header.siteLogo} alt={content.header.logoAlt} className="w-10" />
              <span>Tempo ABA</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {content.header.navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="relative group">
                    {/* Parent Menu Button */}
                    <Button
                      color="inherit"
                      className="relative z-50 group-hover:text-green-700 flex items-center"
                    >
                      {item.name}
                      {/* Chevron icon */}
                      <span className="ml-2">
                        <FaChevronDown className={`transition-transform duration-300`} />
                      </span>
                    </Button>

                    {/* Submenu */}
                    <div
                      className={`absolute left-0 bg-green-100 text-black mt-2 shadow-lg rounded-md z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          to={subitem.path}
                          key={subitem.name}
                          className="block px-4 py-2 hover:bg-green-200"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} key={item.name}>
                    <Button color="inherit">{item.name}</Button>
                  </Link>
                )
              )}
            </div>

            {!isMobile && (
              <Link to="/contact">
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
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} bg-green-500 p-4 md:hidden`}>
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
                      <Link to={subitem.path} key={subitem.name} className="block text-white py-2">
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.path} key={item.name} className="block text-white py-2">
                {item.name}
              </Link>
            )
          )}
          <Link to="/contact" className="block text-white py-2">
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
