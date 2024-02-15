import { Box,  Typography } from "@mui/material";
import React from "react";

import OurServices from "../../../components/OurServices";


const OurExpertise = ({ text }) => {


  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(180deg, #1E4F8E, #4fb0d8)",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          "@media (max-width: 480px)": {
            paddingTop: "2rem",
            paddingBottom: "2rem",
          },
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
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
              fontSize: "1rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            Empowering progress through innovative tech solutions at TechProdDev
          </Typography>
        </Box>

       <OurServices/>
      </Box>
    </>
  );
};

export default OurExpertise;
