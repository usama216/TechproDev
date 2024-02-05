import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroSectionImage from "../../../Assets/HeroSectionImage.png";
import { Typewriter } from "react-simple-typewriter";


const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${HeroSectionImage})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "none",
          height: "100vh",
          marginTop: "1rem",
          width: "100%",
          "@media(max-width:480px)": {
            height: "50vh",
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
            color: "black",
            paddingTop: "5rem",
            minHeight: "80vh",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            "@media(max-width:480px)": {
              paddingLeft: "0rem",
              paddingRight: "0rem",
              paddingTop: "0rem",
              minHeight: "40vh",
            },
            "@media(min-width:481px) and (max-width:768px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },

            "@media(min-width:769px) and (max-width:1024px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },
          }}
        >
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
            minHeight={"9rem"}
            position={'relative'}
            sx={{
              width:'100%',
              paddingLeft:'15%',
              paddingRight:'15%',
              "@media(max-width:480px)": {
                minHeight: "8rem",
                paddingLeft:'10%',
              paddingRight:'10%',
              },

            }}
          >
            <Typography
              variant="h3"
              fontSize={"2.5rem"}
              fontWeight={"800"}
              width="100%"
              sx={{
                "@media(max-width:480px)": {
                  fontSize: "1.2rem",
                  fontWeight: "800",
                  width: "100%",
                  //   fontWeight: "600",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  textAlign: "center",
                },
                "@media(min-width:480px) and (max-width:900px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
                "@media(min-width:901px) and (max-width:1024px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
              }}
            >
              PROVIDING WORLD CLASS
            </Typography>

            <Typography
              variant="h3"
              fontSize={"2.5rem"}
              fontWeight={"800"}
              width="100%"
              color="#0f65a0"

              sx={{
                "@media(max-width:480px)": {
                  fontSize: "1.2rem",
                  width: "100%",
                  fontWeight: "800",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  paddingTop: "0.5rem",

                  textAlign: "center",
                },
                "@media(min-width:480px) and (max-width:900px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
                "@media(min-width:901px) and (max-width:1024px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
              }}
            >
              <Typewriter
                  words={[
                    "WEB APP DESIGN & DEVELOPMENT",
                    "MOBILE APP DESIGN & DEVELOPMENT",
                    "SEARCH ENGINE OPTIMIZATION",
                    "SOCIAL MEDIA MARKETING",

                  ]}
                  loop={Infinity}
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1600}
                />
            </Typography>

            <Box>
            <Typography
              variant="h3"
              fontSize={"2.5rem"}
              fontWeight={"800"}
              width="100%"


              sx={{
              paddingLeft:'15%',
bottom:0,
left:0,
position:'absolute',
                "@media(max-width:480px)": {
                  fontSize: "1.2rem",
                  width: "100%",
                  fontWeight: "800",
                  paddingLeft: "0%",
                  paddingRight: "0%",

                  textAlign: "center",
                  left:0

                },
                "@media(min-width:480px) and (max-width:900px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
                "@media(min-width:901px) and (max-width:1024px)": {
                  fontSize: "3rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },



              }}
            >
              SERVICES
            </Typography>
            </Box>
          </Box>

          <Typography
            variant="h3"
            fontSize={"1.3rem"}
            fontWeight={"600"}
            marginTop={"5rem"}
            width="100%"
            sx={{
              paddingLeft: "20%",
              "@media(max-width:480px)": {
                display: "none",
              },
              "@media(min-width:480px) and (max-width:900px)": {
                fontSize: "3rem",
                width: "100%",
                paddingLeft: "0%",
                paddingRight: "0%",
              },
              "@media(min-width:901px) and (max-width:1024px)": {
                fontSize: "3rem",
                width: "100%",
                paddingLeft: "0%",
                paddingRight: "0%",
              },
            }}
          >
            Successful innovations
            <br />
            for ambitious brands
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            data-aos="fade-up"
            data-aos-duration="1500"
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: "#00a0d5",
              cursor: "pointer",
              fontSize: "1rem",
              paddingTop: "0.4rem",
              paddingBottom: "0.4rem",
              borderRadius: "25px",
              paddingLeft: "1.6rem",
              paddingRight: "1.6rem",
              textTransform: "none",
              "@media(max-width:480px)": {
                marginTop: "0rem",
                paddingTop: "0.1rem",
                paddingBottom: "0.1rem",
                fontSize: "0.8rem",
              },
            }}
          >
            Explore Our Services
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
