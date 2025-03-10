import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Button } from "@mui/material";
// import { BiMenu } from "react-icons/bi";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AppBar
        position="sticky"
        sx={{
          width: "40%",
          backgroundColor: "#0d1329",
          boxShadow: "none",
          mt: 2,
          border: '1px solid #2b3044',
          borderRadius: '10px'
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((text) => (
              <Button
                key={text}
                sx={{ color: "#ccd6f6", fontSize: 17, p: 2 }}
                href={`#${text.replace(" ", "").toLowerCase()}`}
              >
                {text}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#ccd6f6" }}
            onClick={handleDrawer}
          >
            {/* <BiMenu size={30} /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
