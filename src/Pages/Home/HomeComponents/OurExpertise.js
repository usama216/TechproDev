import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Mobile from "../../../Assets/Expertise/Mobile.svg";
import WebApp from "../../../Assets/Expertise/WebApp.svg";
import SMM from "../../../Assets/Expertise/SMM.svg";
import SEO from "../../../Assets/Expertise/SEO.svg";
import SMMIcon from "../../../Assets/Expertise/SMMIcon.svg";
import SEOIcon from "../../../Assets/Expertise/SEOIcon.svg";
import WebIcon from "../../../Assets/Expertise/WebIcon.svg";
import MobIcon from "../../../Assets/Expertise/MobIcon.svg";
import { useNavigate} from "react-router-dom";
const OurExpertise = () => {



  const storedActiveIndex = parseInt(localStorage.getItem("activeIndex")) || 0;
  const [activeIndex, setActiveIndex] = useState(storedActiveIndex);

  const handleSectionClick = (index) => {
    // Update local state
    setActiveIndex(index);
  };

  // Save activeIndex to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleButtonClick = () => {
    navigate("/services"); // Navigate to /services page
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
          "@media (max-width: 480px)": {
            paddingTop: "2rem",
            paddingBottom: "2rem",
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
            OUR EXPERTISE{" "}
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

        <div>
          <div>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {activeIndex === index && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      color: "white",

                    }}
                  >
                    <Box height='23rem'>
                      <img
                        src={
                          index === 0
                            ? WebApp
                            : index === 1
                            ? Mobile
                            : index === 2
                            ? SEO
                            : SMM
                        }
                        alt={
                          index === 0
                            ? "Web Application Development"
                            : index === 1
                            ? "Mobile Application Development"
                            : index === 2
                            ? "Search Engine Optimization"
                            : "Social Media Marketing"
                        }
                        width={"100%"}
                        height={"auto"}
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <Typography
                      variant="h2"
                      fontSize={"3rem"}


                      sx={{
                        "@media (max-width: 480px)": {
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      {index === 0
                        ? "Web App Design & Development"
                        : index === 1
                        ? "Mobile App Design & Development"
                        : index === 2
                        ? "Search Engine Optimization"
                        : "Social Media Marketing"}
                    </Typography>
                    <Typography
                      variant="subtitle"
                      fontSize={"1rem"}
                      width="70%"
                      marginTop={"1.5rem"}
                      sx={{
                        "@media (max-width: 480px)": {
                          fontSize: "0.8rem",
                          width: "100%",
                        },
                      }}
                    >
                      Transforming ideas into interactive and user-friendly web
                      applications, we craft seamless digital experiences tailored
                      to your business objectives, ensuring scalability and
                      performance at every stage.
                    </Typography>
                    <Button
                    onClick={handleButtonClick}
                      variant="contained"
                      sx={{
                        marginTop: "3rem",
                        fontSize: "1rem",
                        borderRadius: "15px",
                        backgroundColor: "#1d4ed8",
                        "@media (max-width: 480px)": {
                          fontSize: "0.8rem",
                          fontWeight: "semi-bold",
                          textTransform: "none",
                          marginTop: "1.5rem",
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                )}
              </div>
            ))}
          </div>

          {/* Your existing section menu for larger screens */}
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              paddingTop: "4rem",
              flexWrap: "wrap",
              "@media (max-width: 780px)": {
                display: "none",
              },
            }}
          >
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(index)}
                style={{
                  borderRadius:
                    index === 0
                      ? "15px 0px 0px 15px"
                      : index === 3
                      ? "0px 15px 15px 0px"
                      : "0px",
                  // backgroundColor: activeIndex === index ? "red" : "white",
                  background: activeIndex === index ? "linear-gradient(180deg, #1E4F8E, #4fb0d8)" : "linear-gradient(90deg, white, white)",
                  color: activeIndex === index ? "#ffffff" : "black",
                  padding: "2rem",
                  cursor: "pointer",
                  flex: 1,
                  transition: "background-color 0.3s ease-in-out",
                  opacity: activeIndex === index ? 1 : 1,
                  display:'flex', justifyContent:'center', alignItems:'center'
                }}
              >
                <Box sx={{textAlign:'center'}}>
                  {index === 0 && "Web Application Design & Development"}
                  {index === 1 && "Mobile Application Design & Development"}
                  {index === 2 && "Search Engine Optimization"}
                  {index === 3 && "Social Media Marketing"}
                </Box>
              </div>
            ))}
          </Box>

          {/* Your existing section menu for smaller screens */}
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              paddingTop: "2rem",
              flexWrap: "wrap",
              "@media (min-width: 780px)": {
                display: "none",
              },
            }}
          >
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(index)}
                style={{
                  borderRadius:
                    index === 0
                      ? "15px 0px 0px 15px"
                      : index === 3
                      ? "0px 15px 15px 0px"
                      : "0px",
                      background: activeIndex === index ? "linear-gradient(180deg, #1E4F8E, #4fb0d8)" : "linear-gradient(90deg, white, white)",
                  color: activeIndex === index ? "#ffffff" : "black",
                  padding: "1rem",
                  cursor: "pointer",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease-in-out",
                  opacity: activeIndex === index ? 1 : 1,
                }}
              >
                <Box>
                  <img
                    src={
                      index === 0
                        ? WebIcon
                        : index === 1
                        ? MobIcon
                        : index === 2
                        ? SEOIcon
                        : SMMIcon
                    }
                    alt="Web Application Development"
                    width={"100%"}
                    height={"auto"}

                  />
                </Box>
              </div>
            ))}
          </Box>
        </div>
      </Box>
    </>
  );
};

export default OurExpertise;
