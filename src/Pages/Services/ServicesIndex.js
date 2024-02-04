
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Mobile from "../../Assets/Expertise/Mobile.svg";
import WebApp from "../../Assets/Expertise/WebApp.svg";
import SMM from "../../Assets/Expertise/SMM.svg";
import SEO from "../../Assets/Expertise/SEO.svg";
import SMMIcon from "../../Assets/Expertise/SMMIcon.svg";
import SEOIcon from "../../Assets/Expertise/SEOIcon.svg";
import WebIcon from "../../Assets/Expertise/WebIcon.svg";
import MobIcon from "../../Assets/Expertise/MobIcon.svg";

const ServicesIndex = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slider1 = useRef(null);

  useEffect(() => {
    if (slider1.current) {
      slider1.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const handleSectionClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <>
<NavBar/>


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
          SERVICES{" "}
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
            {activeIndex === 0 && (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "white",
                    marginTop: "1rem",
                  }}
                >
                  <Box>
                    <img
                      src={WebApp}
                      alt="Web Application Development"
                      width={"100%"}
                      height={"auto"}
                    />
                  </Box>

                  <Typography
                    variant="h2"
                    fontSize={"3rem"}
                    marginTop={"1.5rem"}
                    sx={{
                      "@media (max-width: 480px)": {
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    Web App Design & Development
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
              </div>
            )}
            {activeIndex === 1 && (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "white",
                    marginTop: "3rem",
                  }}
                >
                  {/* <img src={Mobile} alt='Mobile Application Development' width={'30%'}/> */}

                  <Box>
                    <img
                      src={Mobile}
                      alt="Mobile Application Development"
                      width={"100%"}
                      height={"auto"}
                    />
                  </Box>

                  <Typography
                    variant="h2"
                    fontSize={"3rem"}
                    marginTop={"1.5rem"}
                    sx={{
                      "@media (max-width: 480px)": {
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    Mobile App Design & Development
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
                    Transforming ideas into interactive and user-friendly mobile
                    applications, we craft seamless digital experiences tailored
                    to your business objectives, ensuring scalability and
                    performance at every stage.
                  </Typography>
                  <Button
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
              </div>
            )}
            {activeIndex === 2 && (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "white",
                    marginTop: "3rem",
                  }}
                >
                  <Box>
                    <img
                      src={SEO}
                      alt="Search Engine Optimization"
                      width={"100%"}
                      height={"auto"}
                    />
                  </Box>

                  <Typography
                    variant="h2"
                    fontSize={"3rem"}
                    marginTop={"1.5rem"}
                    sx={{
                      "@media (max-width: 480px)": {
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    Search Engine Optimization
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
              </div>
            )}
            {activeIndex === 3 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  color: "white",
                  marginTop: "2rem",
                  "@media (max-width: 480px)": {
                    paddingTop: "2rem",
                  },
                }}
              >
                <Box>
                  <img
                    src={SMM}
                    alt="Web Application Development"
                    width={"100%"}
                    height={"auto"}
                  />
                </Box>

                <Typography
                  variant="h2"
                  fontSize={"3rem"}
                  marginTop={"0.5rem"}
                  sx={{
                    "@media (max-width: 480px)": {
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Social Media Marketing
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
            <div
              onClick={() => handleSectionClick(0)}
              style={{
                borderRadius: "15px 0px 0px 15px",
                backgroundColor: "white",
                padding: "2rem",
                cursor: "pointer",
                flex: 1,
              }}
            >
              <Box>Web Application Design & Development</Box>
            </div>
            <div
              onClick={() => handleSectionClick(1)}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                cursor: "pointer",
                flex: 1,
              }}
            >
              <Box>Mobile Application Design & Development</Box>
            </div>
            <div
              onClick={() => handleSectionClick(2)}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                cursor: "pointer",
                flex: 1,
              }}
            >
              <Box>Search Engine Optimization</Box>
            </div>
            <div
              onClick={() => handleSectionClick(3)}
              style={{
                borderRadius: "0px 15px 15px 0px",
                backgroundColor: "white",
                padding: "2rem",
                cursor: "pointer",
                flex: 1,
              }}
            >
              <Box>Social Media Marketing</Box>
            </div>
          </Box>

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
            <div
              onClick={() => handleSectionClick(0)}
              style={{
                borderRadius: "15px 0px 0px 15px",
                backgroundColor: "white",
                padding: "1rem",
                cursor: "pointer",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  src={WebIcon}
                  alt="Web Application Development"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </div>
            <div
              onClick={() => handleSectionClick(1)}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                cursor: "pointer",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  src={MobIcon}
                  alt="Web Application Development"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </div>
            <div
              onClick={() => handleSectionClick(2)}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                cursor: "pointer",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  src={SEOIcon}
                  alt="Web Application Development"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </div>
            <div
              onClick={() => handleSectionClick(3)}
              style={{
                borderRadius: "0px 15px 15px 0px",
                backgroundColor: "white",
                padding: "1rem",
                cursor: "pointer",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  src={SMMIcon}
                  alt="Web Application Development"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </div>
          </Box>
        </div>
      </Box>















<Footer/>

    </>
  )
}

export default ServicesIndex