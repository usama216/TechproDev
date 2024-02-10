import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import PortfolioImage from '../../../Assets/Portfolio/PortfolioImage.svg'

const Portfolio = () => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Box
        sx={{


          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#1E4F8E",
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
            PORTFOLIO{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            TechProDev featured projects showcase.
          </Typography>
        </Box>
        {/* -------------------------------------------------------------------------- */}

        <Box>
         <Slider {...settings}>
         <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"4rem"}
          >

                <Box

                >
                  <Box>
                  <img
                    src={PortfolioImage}
                    alt="web"
                    width="100%"
                    height={"auto"}
                    style={{ borderRadius: "25px" }}
                  />
                </Box>
                </Box>



                <Box
                  paddingLeft={"10%"}
                  color={"black"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  sx={{
                    "@media screen and (max-width: 480px)": {
                      paddingLeft: "0%",
                      paddingTop: "10%",
                      paddingRight: "0%",
                    },
                  }}
                >
                  <Typography variant="h1" fontSize={"2rem"} fontWeight={"600"}>
                    Case Study
                  </Typography>
                  <Box display={"flex"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Mobile
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Design
                    </Button>
                  </Box>
                  <Typography width={"100%"} fontSize={"0.9rem"}>
                    Innovating at the intersection of technology and design,
                    TechProDev embarked on a transformative journey to redefine
                    user experiences and streamline workflows.
                  </Typography>
                </Box>

          </Box>


          {/* --------------------------------slide 2 ---------------- */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"4rem"}
          >

                <Box

                >
                  <Box>
                  <img
                    src={PortfolioImage}
                    alt="web"
                    width="100%"
                    height={"auto"}
                    style={{ borderRadius: "25px" }}
                  />
                </Box>
                </Box>



                <Box
                  paddingLeft={"10%"}
                  color={"black"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  sx={{
                    "@media screen and (max-width: 480px)": {
                      paddingLeft: "0%",
                      paddingTop: "10%",
                      paddingRight: "0%",
                    },
                  }}
                >
                  <Typography variant="h1" fontSize={"2rem"} fontWeight={"600"}>
                    Case Study
                  </Typography>
                  <Box display={"flex"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Mobile
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Design
                    </Button>
                  </Box>
                  <Typography width={"100%"} fontSize={"0.9rem"}>
                    Innovating at the intersection of technology and design,
                    TechProDev embarked on a transformative journey to redefine
                    user experiences and streamline workflows.
                  </Typography>
                </Box>

          </Box>


          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"4rem"}
          >

                <Box

                >
                  <Box>
                  <img
                    src={PortfolioImage}
                    alt="web"
                    width="100%"
                    height={"auto"}
                    style={{ borderRadius: "25px" }}
                  />
                </Box>
                </Box>



                <Box
                  paddingLeft={"10%"}
                  color={"black"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  sx={{
                    "@media screen and (max-width: 480px)": {
                      paddingLeft: "0%",
                      paddingTop: "10%",
                      paddingRight: "0%",
                    },
                  }}
                >
                  <Typography variant="h1" fontSize={"2rem"} fontWeight={"600"}>
                    Case Study
                  </Typography>
                  <Box display={"flex"} gap={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Mobile
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      Design
                    </Button>
                  </Box>
                  <Typography width={"100%"} fontSize={"0.9rem"}>
                    Innovating at the intersection of technology and design,
                    TechProDev embarked on a transformative journey to redefine
                    user experiences and streamline workflows.
                  </Typography>
                </Box>

          </Box>
         </Slider>
        </Box>

        {/* ---------------------------------------------------------------------------- */}
      </Box>
    </>
  );
};

export default Portfolio