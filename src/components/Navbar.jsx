import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Button, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBar
        position="sticky"
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          backgroundColor: "#0d1329",
          boxShadow: "none",
          mt: 2,
          border: "1px solid #2b3044",
          borderRadius: "10px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
            {menuItems.map((text) => (
              <Button
                key={text}
                sx={{ color: "#ccd6f6", fontSize: 17, p: 2 }}
                href={`#${text.replace(" ", "").toLowerCase()}`}
              >
                {text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#ccd6f6" }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={handleDrawer}>
        <Box sx={{ width: 250, backgroundColor: "#0d1329", height: "100vh", p: 2 }}>
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text} onClick={handleDrawer}>
                <ListItemText
                  primary={text}
                  sx={{ color: "#ccd6f6", textAlign: "center", fontSize: 18 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
