import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { content } from "../data/content";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <AppBar position="static" className="bg-blue-500">
          <Toolbar className="flex justify-between">
            <img src="/path-to-logo.png" alt={content.header.logoAlt} className="w-40" />
            <div className="space-x-4">
              {content.header.navItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <Button color="inherit">{item.name}</Button>
                </Link>
              ))}
            </div>
            <Typography variant="h6" className="text-white">
              {content.header.phoneNumber}
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
