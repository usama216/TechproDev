import { Box, Button, Typography } from "@mui/material";
import React, { useEffect,  useState } from "react";
import Mobile from "../Assets/Expertise/Mobile.svg";
import WebApp from "../Assets/Expertise/WebApp.svg";
import SMM from "../Assets/Expertise/SMM.svg";
import SEO from "../Assets/Expertise/SEO.svg";
import SMMIcon from "../Assets/Expertise/SMMIcon.png";
import SEOIcon from "../Assets/Expertise/SEOIcon.png";
import WebIcon from "../Assets/Expertise/WebIcon.png";
import MobIcon from "../Assets/Expertise/MobIcon.png";
import { useNavigate } from "react-router-dom";
import WebIconWhite from "../Assets/Expertise/WebIconWhite.png";
import MobIconWhite from "../Assets/Expertise/MobIconWhite.png";
import SEOIconWhite from "../Assets/Expertise/SEOIconWhite.png";
import SMMIconWhite from "../Assets/Expertise/SMMIconWhite.png";

const OurServices = () => {
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
        <div>
          <div
            data-aos="fade-up"
            // data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
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
                    <Box height="23rem">
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
                      fontWeight="600"
                      sx={{
                        "@media (max-width: 480px)": {
                          fontSize: "1.5rem",
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
                      applications, we craft seamless digital experiences
                      tailored to your business objectives, ensuring scalability
                      and performance at every stage.
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
                  background:
                    activeIndex === index
                      ? "linear-gradient(180deg, #1E4F8E, #4fb0d8)"
                      : "linear-gradient(90deg, white, white)",
                  color: activeIndex === index ? "#ffffff" : "black",
                  padding: "2rem",
                  cursor: "pointer",
                  flex: 1,
                  transition: "background-color 0.3s ease-in-out",
                  opacity: activeIndex === index ? 1 : 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
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
                  background:
                    activeIndex === index
                      ? "linear-gradient(180deg, #1E4F8E, #4fb0d8)"
                      : "linear-gradient(90deg, white, white)",
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
                      activeIndex === index
                        ? index === 0
                          ? WebIconWhite
                          : index === 1
                          ? MobIconWhite
                          : index === 2
                          ? SEOIconWhite
                          : SMMIconWhite
                        : index === 0
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
    </>
  )
}

export default OurServices