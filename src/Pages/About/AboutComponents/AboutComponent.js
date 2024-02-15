import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UpparBanner from "../../../Assets/AboutUs/UpparBanner.svg";
import LowerBanner from "../../../Assets/AboutUs/BannerDown.svg";
import Web from "../../../Assets/AboutUs/WebAppAbout.png";
import Mobile from "../../../Assets/AboutUs/MobileAbout.png";
import SEO from "../../../Assets/AboutUs/SEOAbout.png";
import SMM from "../../../Assets/AboutUs/SMMabout.png";

const AboutComponent = () => {
  return (
    <>
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
        // data-aos="fade-right"
        data-aos="flip-down"
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
            ABOUT US
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
            <Grid item lg={5} sm={12}
            data-aos="fade-right"
        // data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
data-aos-delay="500"

     data-aos-duration="2000"
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={2}
              >
                <Box display={"flex"} gap={2}>
                  {" "}
                  <Box>
                    <img src={Web} alt="web" width="100%" height={"auto"} />
                  </Box>
                  <Box>
                    <img src={Mobile} alt="web" width="100%" height={"auto"} />
                  </Box>
                </Box>

                <Box display={"flex"} gap={2}>
                  <Box>
                    <img src={SEO} alt="web" width="100%" height={"auto"} />
                  </Box>{" "}
                  <Box>
                    <img src={SMM} alt="web" width="100%" height={"auto"} />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              lg={7}
              sm={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              data-aos="fade-left"
        // data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
data-aos-delay="500"

     data-aos-duration="2000"
            >
              <Box
                paddingLeft={"10%"}
                color={"white"}
                display={"flex"}
                flexDirection={"column"}
                sx={{
                  "@media screen and (max-width: 480px)": {
                    paddingLeft: "0%",
                    paddingTop: "10%",
                    paddingRight: "0%",
                  },
                }}
              >
                <Typography variant="h2" fontSize={"2rem"} textAlign={"center"}>
                  What is TechProDev
                </Typography>
                <Typography width={"100%"} fontSize={"0.9rem"}>
                  Welcome to TechProDev, the ultimate nexus where innovation
                  harmonizes seamlessly with excellence across an array of
                  domains including web and mobile app development, visionary
                  design, search engine optimization (SEO) mastery, and
                  strategic social media marketing (SMM) services. Here, we
                  operate at the forefront of digital evolution, fueled by a
                  passionate and dedicated team of seasoned experts poised to
                  craft tailor-made solutions meticulously designed to elevate
                  and expand your digital presence. Our commitment to excellence
                  knows no bounds as we navigate the intricacies of today's
                  dynamic online environment with precision and finesse. From
                  the inception of captivating designs that resonate with your
                  audience to the implementation of strategic marketingcampaigns
                  engineered for success, TechProDev is your steadfast partner
                  in driving transformative outcomes for your business. With
                  TechProDev by your side, you can rest assured that your vision
                  will not only be realized but also meticulously cultivated to
                  propel your business forward amidst the ever- evolving digital
                  landscape. Trust in TechProDev to be the catalyst that
                  transforms your aspirations into tangible achievements,
                  ushering your business into a new era of unparalleled success
                  and growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AboutComponent;
