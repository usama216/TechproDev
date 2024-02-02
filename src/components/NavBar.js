// import { Box, Button } from "@mui/material";
// import React from "react";
// import Logo from "../Assets/Logo.png";
// const NavBar = () => {
//   return (
//     <>
//       <Box sx={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "2rem" }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box>
//             <img src={Logo} alt="Logo" width={"auto"} />
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               gap: "3rem",
//             }}
//           >
//             <a
//               href="/"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontSize: "1rem",
//               }}
//             >
//               Home
//             </a>

//             <a
//               href="/portfolio"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontSize: "1rem",
//               }}
//             >
//               Portfolio
//             </a>
//             <a
//               href="/services"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontSize: "1rem",
//               }}
//             >
//               Services
//             </a>
//             <a
//               href="/aboutus"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontSize: "1rem",
//               }}
//             >
//               About us
//             </a>
//             <a
//               href="/blog"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//                 fontSize: "1rem",
//               }}
//             >
//               Blog
//             </a>

//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00a0d5",
//                 borderRadius: "19px",
//                 color: "white",
//               }}
//             >
//               <a
//                 href="/aboutus"
//                 style={{
//                   textDecoration: "none",
//                   color: "white",
//                   fontSize: "1rem",
//                 }}
//               >
//                 Contact us
//               </a>
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default NavBar;


// NavBar.jsx
import React, { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Assets/Logo.png";
// import "./NavBar.css"; // Import the CSS file
import CloseIcon from '@mui/icons-material/Close';

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
            gap: "3rem",
          }}
        >
          <Box
sx={{
  "@media(max-width:480px)": {
             display:'none'

            },

}}

          >
            <img src={Logo} alt="Logo" width={'130rem'} />
          </Box>
          <Box
          sx={{

            "@media(min-width:481px)": {
              display:'none'
            },

          }}
          >
            <img src={Logo} alt="Logo" width={'90rem'} />
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
            sx={{ display: { xs: "none", md: "flex" }, gap:'3rem', alignItems:'center' }}
          >
            <a href="/" className="nav-link">Home</a>
            <a href="/portfolio" className="nav-link">Portfolio</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/aboutus" className="nav-link">About us</a>
            <a href="/blog" className="nav-link">Blog</a>
            <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00a0d5",
                borderRadius: "19px",
                color: "white",
              }}
            >
              <a
                href="/aboutus"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Contact us
              </a>
            </Button>
          </Box>
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}

            onClose={handleDrawerClose}
          >
<Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
      <CloseIcon onClick={handleDrawerClose}/>
    </Box>
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // padding: "2rem",

                gap:'1.5rem'
              }}
            >
              <a href="/" className="nav-link" onClick={handleDrawerClose}>
                Home
              </a>
              <a href="/portfolio" className="nav-link" onClick={handleDrawerClose}>
                Portfolio
              </a>
              <a href="/services" className="nav-link" onClick={handleDrawerClose}>
                Services
              </a>
              <a href="/aboutus" className="nav-link" onClick={handleDrawerClose}>
                About us
              </a>
              <a href="/blog" className="nav-link" onClick={handleDrawerClose}>
                Blog
              </a>
              <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00a0d5",
                borderRadius: "19px",
                color: "white",
              }}
            >
              <a
                href="/aboutus"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Contact us
              </a>
            </Button>
          </Box>
            </Box>
          </Drawer>

          {/* Contact Button */}

        </Box>
      </Box>
    </>
  );
};

export default NavBar;
