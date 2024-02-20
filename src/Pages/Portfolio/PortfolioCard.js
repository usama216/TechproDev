import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import LowerBanner from "../../Assets/AboutUs/BannerDown.svg";
import { PortfolioData } from "../../Data/PortfolioData";

const PortfolioCard = () => {


  const LowerBannerStyle = {
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
  };

  const techButtonStyle = {
    backgroundColor: "#ffc75d",
    borderRadius: "25px",
    textTransform: "none",
    color: "black",
    padding: "0.5rem 2rem",
    "&:hover": {
      backgroundColor: "#ffc75d",
    },
  };

  const descriptionStyle ={
    width:'100%',
    fontSize:'0.8rem',
  "@media(max-width:600px)": {
    fontSize: "0.8rem",
  },
  }
  return (
    <>
      {PortfolioData.map((item, index) => (
        <Box sx={LowerBannerStyle} key={index}>
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="4rem"
          >
            <Grid container>
              {/* Image first for even-numbered grids, Text first for odd-numbered grids */}
              {index % 2 === 0 ? (
                <>
                  <Grid item lg={4} sm={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      alignItems={'center'}
                      gap={2}
                    >
                      <Box>
                        <img
                          src={item.pic}
                          alt="Blog pic"
                          width="100%"
                          height="auto"
                          style={{ borderRadius: "25px" }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={8}
                    sm={12}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <Box
                      paddingLeft="10%"
                      //   paddingRight={'10%'}
                      color="white"
                      display="flex"
                      flexDirection="column"
                      gap={2}
                      sx={{
                        "@media screen and (max-width: 480px)": {
                          paddingLeft: "0%",
                          paddingTop: "10%",
                          paddingRight: "0%",
                        },
                      }}
                    >
                      <Typography
                        variant="h1"
                        fontSize="2rem"
                        fontWeight="600"
                        sx={{
                          "@media(max-width:600px)": {
                            fontSize: "1.5rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box display="flex" gap={2}>
                        <Button variant="contained" sx={techButtonStyle}>
                          {item.Tech1}
                        </Button>
                        <Button
                          variant="contained"
                          sx={techButtonStyle}
                        >
                          {item.Tech2}
                        </Button>
                      </Box>
                      <Typography

                        className="description"
                        sx={descriptionStyle}
                      >
                        {item.Description}
                      </Typography>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#00A0D5",
                            borderRadius: "25px",
                            textTransform: "none",
                            color: "white",
                            padding: "0.5rem 2rem",
                            "@media(min-width:600px)": {
                              display: "none",
                            },
                            "&:hover": {
                              backgroundColor: "#00A0D5",
                            },
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid
                    item
                    lg={8}
                    sm={12}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    sx={{
                      "@media(max-width:600px)": {
                        order: 2,
                      },
                    }}
                  >
                    <Box
                      paddingRight={"8%"}
                      color="white"
                      display="flex"
                      flexDirection="column"
                      gap={2}
                      sx={{
                        "@media screen and (max-width: 480px)": {
                          paddingLeft: "0%",
                          paddingTop: "10%",
                          paddingRight: "0%",
                        },
                      }}
                    >
                      <Typography
                        variant="h1"
                        fontSize="2rem"
                        fontWeight="600"
                        sx={{
                          "@media(max-width:600px)": {
                            fontSize: "1.5rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box display="flex" gap={2}>
                        <Button
                          variant="contained"
                          sx={techButtonStyle}
                        >
                          {item.Tech1}
                        </Button>
                        <Button
                          variant="contained"
                          sx={techButtonStyle}
                        >
                          {item.Tech2}
                        </Button>
                      </Box>
                      <Typography

                        className="description"
                                       sx={descriptionStyle}

                      >
                        {item.Description}
                      </Typography>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#00A0D5",
                            borderRadius: "25px",
                            textTransform: "none",
                            color: "white",
                            padding: "0.5rem 2rem",
                            "@media(min-width:600px)": {
                              display: "none",
                            },
                            "&:hover": {
                              backgroundColor: "#00A0D5",
                            },
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    sm={12}
                    sx={{
                      "@media(max-width:600px)": {
                        order: 1,
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      gap={2}
                    >
                      <Box>
                        <img
                          src={item.pic}
                          alt="Blog pic"
                          width="100%"
                          height="auto"
                          style={{ borderRadius: "25px" }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PortfolioCard;
