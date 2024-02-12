import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import UpparBanner from "../../Assets/AboutUs/UpparBanner.svg";
import LowerBanner from "../../Assets/AboutUs/BannerDown.svg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PortfolioImage from "../../Assets/Portfolio/PortfolioImage.svg";

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
          height: "30vh",
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
            height: "30vh",
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
      {/* ------------------------------------------yaha sy ----------------- */}
      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"4rem"}

        >
          <Grid container>
            <Grid item lg={4} sm={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
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
            </Grid>

            <Grid
              item
              lg={8}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <Box
                paddingLeft={"10%"}
                color={"white"}
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
                <Typography width={"100%"} fontSize={"0.9rem"}



                >
                  Innovating at the intersection of technology and design,
                  TechProDev embarked on a transformative journey to redefine
                  user experiences and streamline workflows. Leveraging cutting
                  edge design principles and advanced technological solutions,
                  we addressed the complex challenges faced by our client,
                  revolutionizing their digital ecosystem. Through meticulous
                  research and iterative prototyping, we crafted intuitive
                  interfaces that seamlessly integrated with existing systems,
                  enhancing user engagement and efficiency. Our collaborative
                  approach fostered a deep understanding of user needs, allowing
                  us to deliver tailored solutions that surpassed expectations.
                  With a focus on user-centric design, we optimized
                  accessibility and responsiveness across multiple platforms,
                  ensuring a consistent and engaging experience for all users.
                  By harnessing the power of data-driven insights, we
                  continually refined our designs, adapting to evolving user
                  preferences and market trends.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* -----------------------------------card 2------------------ */}

      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"4rem"}
        >
          <Grid container>
            <Grid item lg={4} sm={12} sx={{order: {lg: 2, sm: 1}}}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
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
            </Grid>

            <Grid
              item
              lg={8}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              sx={{order: {lg: 1, sm: 2}}}
            >
              <Box
                color={"white"}
                display={"flex"}
                paddingRight={'10%'}
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
                  user experiences and streamline workflows. Leveraging cutting
                  edge design principles and advanced technological solutions,
                  we addressed the complex challenges faced by our client,
                  revolutionizing their digital ecosystem. Through meticulous
                  research and iterative prototyping, we crafted intuitive
                  interfaces that seamlessly integrated with existing systems,
                  enhancing user engagement and efficiency. Our collaborative
                  approach fostered a deep understanding of user needs, allowing
                  us to deliver tailored solutions that surpassed expectations.
                  With a focus on user-centric design, we optimized
                  accessibility and responsiveness across multiple platforms,
                  ensuring a consistent and engaging experience for all users.
                  By harnessing the power of data-driven insights, we
                  continually refined our designs, adapting to evolving user
                  preferences and market trends.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>



      {/* ------------------------------Card 3----------------------- */}

      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"4rem"}
        >
          <Grid container>
            <Grid item lg={4} sm={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
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
            </Grid>

            <Grid
              item
              lg={8}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <Box
                paddingLeft={"10%"}
                color={"white"}
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
                  user experiences and streamline workflows. Leveraging cutting
                  edge design principles and advanced technological solutions,
                  we addressed the complex challenges faced by our client,
                  revolutionizing their digital ecosystem. Through meticulous
                  research and iterative prototyping, we crafted intuitive
                  interfaces that seamlessly integrated with existing systems,
                  enhancing user engagement and efficiency. Our collaborative
                  approach fostered a deep understanding of user needs, allowing
                  us to deliver tailored solutions that surpassed expectations.
                  With a focus on user-centric design, we optimized
                  accessibility and responsiveness across multiple platforms,
                  ensuring a consistent and engaging experience for all users.
                  By harnessing the power of data-driven insights, we
                  continually refined our designs, adapting to evolving user
                  preferences and market trends.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>


      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"4rem"}
        >
          <Grid container>
            <Grid item lg={4} sm={12} sx={{order: {lg: 2, sm: 1}}}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
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
            </Grid>

            <Grid
              item
              lg={8}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              sx={{order: {lg: 1, sm: 2}}}
            >
              <Box
                color={"white"}
                display={"flex"}
                paddingRight={'10%'}
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
                  user experiences and streamline workflows. Leveraging cutting
                  edge design principles and advanced technological solutions,
                  we addressed the complex challenges faced by our client,
                  revolutionizing their digital ecosystem. Through meticulous
                  research and iterative prototyping, we crafted intuitive
                  interfaces that seamlessly integrated with existing systems,
                  enhancing user engagement and efficiency. Our collaborative
                  approach fostered a deep understanding of user needs, allowing
                  us to deliver tailored solutions that surpassed expectations.
                  With a focus on user-centric design, we optimized
                  accessibility and responsiveness across multiple platforms,
                  ensuring a consistent and engaging experience for all users.
                  By harnessing the power of data-driven insights, we
                  continually refined our designs, adapting to evolving user
                  preferences and market trends.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>



      {/* ------------------------------Card 3----------------------- */}

      <Box
        sx={{
          backgroundImage: `url(${LowerBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"4rem"}
        >
          <Grid container>
            <Grid item lg={4} sm={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
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
            </Grid>

            <Grid
              item
              lg={8}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <Box
                paddingLeft={"10%"}
                color={"white"}
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
                  user experiences and streamline workflows. Leveraging cutting
                  edge design principles and advanced technological solutions,
                  we addressed the complex challenges faced by our client,
                  revolutionizing their digital ecosystem. Through meticulous
                  research and iterative prototyping, we crafted intuitive
                  interfaces that seamlessly integrated with existing systems,
                  enhancing user engagement and efficiency. Our collaborative
                  approach fostered a deep understanding of user needs, allowing
                  us to deliver tailored solutions that surpassed expectations.
                  With a focus on user-centric design, we optimized
                  accessibility and responsiveness across multiple platforms,
                  ensuring a consistent and engaging experience for all users.
                  By harnessing the power of data-driven insights, we
                  continually refined our designs, adapting to evolving user
                  preferences and market trends.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>





      <Footer />
    </>
  );
};

export default PortfolioIndex;
