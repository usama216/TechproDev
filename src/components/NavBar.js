import React, { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box className="navbar-container">
        <Box
          className="navbar-items"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              "@media(max-width:480px)": {
                display: "none",
              },
            }}
          >
            <img src={Logo} alt="Logo" width={"130rem"} />
          </Box>
          <Box
            sx={{
              "@media(min-width:481px)": {
                display: "none",
              },
            }}
          >
            <img src={Logo} alt="Logo" width={"90rem"} />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">
              Portfolio
            </NavLink>
            <NavLink to="/services" className="nav-link" activeClassName="active">
              Services
            </NavLink>
            <NavLink to="/aboutus" className="nav-link" activeClassName="active">
              About us
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00a0d5",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <NavLink
                to="/contactus"
                style={{
                  textTransform:'none',
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                }}
                activeClassName="active"
              >
                Contact us
              </NavLink>
            </Button>
          </Box>

          {/* Mobile Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CloseIcon onClick={handleDrawerClose} />
            </Box>
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <NavLink to="/" className="nav-link" onClick={handleDrawerClose}>
                Home
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                Services
              </NavLink>
              <NavLink
                to="/aboutus"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                About us
              </NavLink>
              <NavLink to="/blog" className="nav-link" onClick={handleDrawerClose}>
                Blog
              </NavLink>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00a0d5",
                  borderRadius: "19px",
                  color: "white",
                }}
              >
                <NavLink
                  to="/contactus"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1rem",
                  }}
                  onClick={handleDrawerClose}
                  activeClassName="active"
                >
                  Contact us
                </NavLink>
              </Button>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
