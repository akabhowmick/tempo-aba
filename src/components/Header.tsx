import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { content } from "../data/content";

export const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between">
        <img src="/path-to-logo.png" alt={content.header.logoAlt} className="w-40" />
        <div className="space-x-4">
          {content.header.navItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </div>
        <Typography variant="h6" className="text-white">
          {content.header.phoneNumber}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
