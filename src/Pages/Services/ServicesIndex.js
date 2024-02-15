import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Box,  Typography } from "@mui/material";
import React from "react";

import UpparBanner from "../../Assets/AboutUs/UpparBanner.svg";
import LowerBanner from "../../Assets/AboutUs/BannerDown.svg";

import OurServices from "../../components/OurServices";

const ServicesIndex = ({ text }) => {


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
            backgroundRepeat: "no-repeat",
          },
          "@media(min-width:481px) ": {
            backgroundSize: "cover",
          },
        }}
      >
        <Box
          data-aos="fade-up"
          // data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="500"
          data-aos-duration="2000"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            height: "40vh",
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
            {text}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            Empowering progress through innovative tech solutions at TechProdDev
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingBottom: "4rem",

          width: "100%",
          "@media(max-width:480px)": {
            backgroundSize: "contain",
            marginTop: "0rem",
          },
          "@media(min-width:481px) ": {
            backgroundSize: "cover",
          },
        }}
      >
        <OurServices/>
      </Box>
      <Footer />
    </>
  );
};

export default ServicesIndex;
