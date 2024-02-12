import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assets/Logo.svg";
import facebook from "../Assets/SocialIcons/facebook.svg";
import Instagram from "../Assets/SocialIcons/instagram.svg";
import Linkedin from "../Assets/SocialIcons/linkedin.svg";
import twitter from "../Assets/SocialIcons/twitter.svg";
import Divider from "@mui/material/Divider";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Phone } from "@mui/icons-material";

const Footer = () => {
  const phoneNumberPakistan = "+923343588617";
  const phoneNumberUAE = "+971555337567";

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const websiteURL = "https://www.techprodev.com/";
  const emailAddress = "info@techprodev.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <>
      <Box
        sx={{
          paddingBottom: "3rem",
        }}
      >
        <Box
          sx={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <Grid container>
            <Grid item lg={6}>
              <Box>
                <img src={Logo} alt="Logo" width={"45%"} height={"auto"} />
              </Box>

              <Box marginTop={"2rem"}>
                <Typography color={"#83858B"} fontSize={"1rem"}>
                  Welcome to TechProDev, where innovation meets excellence in
                  web and mobile app development, design, SEO, and SMM services.
                  With a dedicated team of experts, we craft tailored solutions
                  to elevate your digital presence.{" "}
                </Typography>
              </Box>

              <Box marginTop={"1.5rem"}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  Follow us
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box padding="1rem">
                    <img src={facebook} alt="Facebook" />
                  </Box>
                  <Box padding="1rem">
                    <img src={Instagram} alt="Facebook" />
                  </Box>
                  <Box padding="1rem">
                    <img src={Linkedin} alt="Facebook" />
                  </Box>
                  <Box padding="1rem">
                    <img src={twitter} alt="Facebook" />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box>
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: "550" }}>
                    Services
                  </Typography>

                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Web Application Development
                    </Typography>
                  </Box>
                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Web Application Design
                    </Typography>
                  </Box>
                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Mobile Application Development
                    </Typography>
                  </Box>
                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Mobile Application Design
                    </Typography>
                  </Box>
                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Search Engine Optimization
                    </Typography>
                  </Box>
                  <Box padding="1rem 0rem" color={"#494C49"}>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Social Media Marketing
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider
            sx={{
              width: "100%",
              backgroundColor: "#0F65A0",
              marginTop: "1rem",
            }}
          />

          <Grid
            container
            marginTop={"3rem"}
            sx={{
              "@media(max-width:480px)": {
                marginTop: "1rem",
              },
            }}
          >
            <Grid item lg={3.5} sm={12}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  "@media(max-width:480px)": {
                    marginTop: "2rem",
                  },
                }}
              >
                <Phone
                  sx={{ width: "2.5rem", height: "auto", color: "#1E4F8E" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  paddingLeft="1rem"
                >
                  <Typography
                    sx={{ fontSize: "1rem", cursor: "pointer" }}
                    onClick={() => handlePhoneClick(phoneNumberPakistan)}
                  >
                    {phoneNumberPakistan}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "1rem", cursor: "pointer" }}
                    onClick={() => handlePhoneClick(phoneNumberUAE)}
                  >
                    {" "}
                    {phoneNumberUAE}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={3.5} sm={12}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  "@media(max-width:480px)": {
                    marginTop: "2rem",
                  },
                }}
              >
                <LanguageOutlinedIcon
                  sx={{ width: "2.5rem", height: "auto", color: "#1E4F8E" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  paddingLeft="1rem"
                >
                  <Typography
                    sx={{ fontSize: "1rem", color: "black", cursor: "pointer" }}
                    onClick={() => window.open(websiteURL, "_blank")}
                  >
                    {websiteURL}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "1rem", color: "black", cursor: "pointer" }}
                    onClick={handleEmailClick}
                  >
                    {emailAddress}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} sm={12}>
              <Box
                display={"flex"}
                width="80%"
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  "@media(max-width:480px)": {
                    marginTop: "2rem",
                    width: "100%",
                  },
                }}
              >
                <FmdGoodOutlinedIcon
                  sx={{ width: "2.5rem", height: "auto", color: "#1E4F8E" }}
                />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "30px",
                    paddingLeft: "1rem",
                  }}
                >
                  R-690 Sector 7-D/3 Gulshan-e-Farooq, North Karachi{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* -------------------yeh box start-------- */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0rem",

            "@media(max-width:480px)": {
              marginTop: "0rem",
            },
          }}
        >
          <Typography sx={{ color: "#68769F", fontSize: "1rem" }}>
            © 2024, TECHPRODEV. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
