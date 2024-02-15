import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PortfolioData } from "../../Portfolio/PortfolioData";

const Portfolio = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleButtonClick = () => {
    navigate("/portfolio"); // Navigate to /services page
  };

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",

          "@media(max-width:480px)": {
            paddingRight: "8%",
          },
          "@media(max-width:779px) ": {
            paddingRight: "8%",
          },
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
      </Box>

      <Box
        sx={{
          overflowX: "hidden",
          "@media(max-width:480px)": {
            paddingRight: "4%",
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "8%",
            marginRight: "-15%",

            paddingBottom: "4rem",
            "@media(max-width:480px)": {
              paddingRight: "0%",
            },
            "@media(max-width:779px) ": {
              paddingRight: "8%",
              marginRight: "-15%",
            },
          }}
        >
          <Slider {...settings}>
            {PortfolioData.map((item, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingTop="4rem"
                paddingLeft={"2rem"}
                paddingRight={"2rem"}
                gap={10}
                sx={{
                  "@media(max-width:480px)": {
                    paddingLeft: "0rem",

                    paddingRight: "2rem",
                  },
                }}
              >
                <Box>
                  <img
                    src={item.pic}
                    alt="web"
                    width="100%"
                    height="auto"
                    style={{ borderRadius: "25px" }}
                  />
                </Box>
                <Box
                  color="black"
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  marginTop={"1rem"}
                >
                  <Typography variant="h1" fontSize="2rem" fontWeight="600">
                    {item.title}
                  </Typography>
                  <Box display="flex" gap={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ffc75d",
                        "&:hover": {
                          backgroundColor: "#ffc75d", // Set the text color to black on hover as well
                        },

                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      {item.Tech1}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#ffc75d", // Set the text color to black on hover as well
                        },
                        backgroundColor: "#ffc75d",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "black",
                        padding: "0.5rem 2rem",
                      }}
                    >
                      {item.Tech2}
                    </Button>
                  </Box>
                  <Typography
                    width="100%"
                    fontSize="0.9rem"
                    className="HomeDescription"
                  >
                    {item.Description}
                  </Typography>
                  <Box>
                    <Button
                      onClick={handleButtonClick}
                      variant="contained"
                      sx={{
                        backgroundColor: "#00A0D5",
                        borderRadius: "25px",
                        textTransform: "none ",
                        color: "white",
                        padding: "0.5rem 1rem",
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
