import { Box, Button, Typography } from "@mui/material";
import React,{useEffect} from "react";
import Aboutusimage from "../../../Assets/aboutus.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation occurs only once
    });
  }, []);

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleButtonClick = () => {
    navigate("/aboutus"); // Navigate to /services page
  };

  return (
    <>
      <Box

        sx={{
          background: "linear-gradient(180deg, #1E4F8E, #4fb0d8)",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Box
        // data-aos="fade-up"


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
           data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
data-aos-delay="500"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              "@media (max-width: 480px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            ABOUT US{" "}
          </Typography>
          <Typography
           data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
data-aos-delay="500"
            sx={{
              fontSize: "1rem",
              width: "80%",
              "@media (max-width: 480px)": {
                fontSize: "0.8rem",
                width: "100%",
              },
              "@media(max-width:779px) ": {
              width:'90%',

            },
            }}
          >
            TechProDev, A one stop shop for all your digital needs.
            <br />
            <br />
            Welcome to TechProDev, where innovation meets excellence in web and
            mobile app development, design, SEO, and SMM services. With a
            dedicated team of experts, we craft tailored solutions to elevate
            your digital presence. From captivating designs to strategic
            marketing campaigns, we're committed to driving your success in
            today's dynamic online environment. Trust TechProDev to transform
            your vision into reality and propel your business forward.
          </Typography>

          <Button
           data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
data-aos-delay="500"
          onClick={handleButtonClick}
            variant="contained"
            sx={{
              marginTop: "3rem",
              fontSize: "1rem",
              borderRadius: "5px",
              textTransform: "none",
              backgroundColor: "#f3f4f6",
              color: "#3B82F6",
              "&:hover": {
                backgroundColor: "#f3f4f6",
              },
              "@media (max-width: 480px)": {
                fontSize: "0.8rem",
                fontWeight: "semi-bold",
                textTransform: "none",
                marginTop: "1.5rem",
              },
            }}
          >
            Read More About us
          </Button>

          <Box
           data-aos="fade-up"

     data-aos-duration="2000"
data-aos-delay="500"
            sx={{
              paddingLeft: "10%",
              paddingRight: "10%",
              marginTop: "3rem",
              "@media (max-width: 480px)": {
                paddingRight: "0%",
                paddingLeft: "0%",
              },
              "@media(max-width:779px) ": {
             paddingLeft:'0%',
             paddingRight:'0%'
            },
            }}
          >
            <img
              src={Aboutusimage}
              alt="about us"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Aboutus;
