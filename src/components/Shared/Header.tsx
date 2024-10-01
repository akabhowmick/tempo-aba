import { AppBar, Toolbar, Button } from "@mui/material";
import { content } from "../../data/content";
import { Link, Outlet } from "react-router-dom";
import { commonStyles } from "./CommonStyles";
// import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar className="flex justify-between bg-green-500">
            <Link to="/" className="flex gap-1 items-center">
              <img src={content.header.siteLogo} alt={content.header.logoAlt} className="w-10" />
              <span>Tempo ABA</span>
            </Link>
            <div className="space-x-4">
              {content.header.navItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <Button color="inherit">{item.name}</Button>
                </Link>
              ))}
            </div>
            <Link to="/contact">
              <Button color="inherit" className={commonStyles.ctaButton}>
                Contact Us
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

{
  /* 
  <header className={commonStyles.header}>
  <div className={commonStyles.headerInner}>
<div className={commonStyles.headerContent}>
  <div className="flex-shrink-0">
    <a href="#" title="AuraUI" className="flex">
      <img
        className={commonStyles.logo}
        src="https://www.auraui.com/logo-light.png"
        alt="AuraUI Logo"
      />
    </a>
  </div>

  <button type="button" className={commonStyles.navButton}>
    <FaBars className="block w-6 h-6 mr-2" />
    <FaTimes className="hidden w-6 h-6 mr-2" />
    Menu
  </button>

  <div className={commonStyles.navMenu}>
    {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
      <a key={item} href="#" title={item} className={commonStyles.navLink}>
        {item}
      </a>
    ))}
  </div>

  <a
    href="#"
    title="Try AuraUI for free"
    className={commonStyles.ctaButton}
    role="button"
  >
    Try for free
  </a>
</div>
</div>
</header> */
}
