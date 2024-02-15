import { Box, Typography } from "@mui/material";
import React from "react";
import UpparBanner from "../../Assets/AboutUs/UpparBanner.svg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PortfolioCard from "./PortfolioCard";

const PortfolioIndex = () => {
  return (
    <>
      <NavBar />

      <Box
        sx={{
          backgroundImage: `url(${UpparBanner})`,

          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "none",
          height: "40vh",
          marginTop: "1rem",
          width: "100%",
          "@media(max-width:480px)": {
            height: "20vh",
            backgroundSize: "cover",
            marginTop: "0rem",
          },
          "@media(min-width:481px) ": {
            backgroundSize: "cover",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            height: "40vh",
            paddingLeft:'8%',
            paddingRight:'8%',
            "@media(max-width:480px)": {
              height: "20vh",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              "@media (max-width: 480px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            TechProDev featured projects showcase.
          </Typography>
        </Box>
      </Box>


    <PortfolioCard/>
   






      <Footer />
    </>
  );
};

export default PortfolioIndex;
