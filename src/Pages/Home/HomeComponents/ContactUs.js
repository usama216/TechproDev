import { LocationCity, Phone } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Map from "../../../Assets/MAP.JPG";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const ContactUs = () => {
  const mapLink = "https://maps.app.goo.gl/P9aHue6YQDzN1zbV7";

  const handleClick = () => {
    window.open(mapLink, "_blank");
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, #1E4F8E, #4fb0d8)",
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
            CONTACT US{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              width: "80%",
              "@media (max-width: 480px)": {

                width: "100%",
              },
            }}
          >
            We would love to get in touch with you and bring your concepts to
            fruition.
          </Typography>
        </Box>
        <Box>
          <Grid container color={"white"} marginTop={"3rem"}>
            <Grid item lg={"6"} sx={{order:{xs:2, md:1}, '@media(max-width:480px)':{marginTop:'3rem'}}}>
              <Typography  sx={{
                    fontSize: "2rem",
                    fontWeight: "550",
                    "@media(max-width:480px)": {textAlign:'center', fontSize: "1.5rem" },
                  }}>
                Our Address
              </Typography>
              <div style={{ marginTop: "2rem" }}>
                <img
                  src={Map}
                  alt={"Location"}
                  onClick={handleClick}
                  style={{
                    cursor: "pointer",
                    maxWidth: "100%", // Set maximum width to 100% to make the image responsive
                    height: "auto",
                  }}
                />
              </div>

              <Box
                display={"flex"}
                width="80%"
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={"1rem"}
              >
                <FmdGoodOutlinedIcon
                  sx={{
                    width: "3rem",
                    height: "auto",
                    "@media(max-width:480px)": {
                      width: "1.5rem",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    lineHeight: "30px",
                    "@media(max-width:480px)": {
                      fontSize: "1rem",
                      lineHeight: "20px",
                    },
                  }}
                >
                  R-690 Sector 7-D/3 Gulshan-e-Farooq, North Karachi
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={6} sm={12} sx={{order:{xs:1, md:2}}}>
              <Box    sx={{
                  "@media(max-width:480px)": {
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                  
                    justifyContent: "center",
                  },
                }}>
              <Box

              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "550",
                    "@media(max-width:480px)": {textAlign:'center', fontSize: "1.5rem" },
                  }}
                >
                  Contact Details
                </Typography>

                <Box
                  display={"flex"}
                  marginTop={"2rem"}
                  justifyContent={"space-between"}
                  width={"90%"}
                >
                  <Grid
                    container
                    sx={{
                      "@media(max-width:480px)": {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Grid item lg={6} sm={12}>
                      <Box display={"flex"} alignItems={"center"}>
                        <Phone
                          sx={{
                            width: "3rem",
                            height: "auto",
                            "@media(max-width:480px)": { width: "2rem" },
                          }}
                        />
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          sx={{
                            "@media(max-width:480px)": { paddingLeft: "1rem" },
                          }}
                        >
                          <Typography sx={{ fontSize: "1rem" }}>
                            +923000080216
                          </Typography>
                          <Typography sx={{ fontSize: "1rem" }}>
                            +923000080216
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item lg={6} sm={12}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <LanguageOutlinedIcon
                          sx={{
                            width: "3rem",
                            height: "auto",
                            "@media(max-width:480px)": { width: "2rem" },
                          }}
                        />
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          paddingLeft={"1rem"}
                          sx={{
                            "@media(max-width:480px)": {
                              marginTop: "1rem",
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: "1rem" }}>
                            www.techprodev.com/
                          </Typography>
                          <Typography sx={{ fontSize: "1rem" }}>
                            info@techprodev.com
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* -------------------yeh box start-------- */}

                  {/* -------------------yeh box end-------- */}
                </Box>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1rem",
                    "@media(max-width:480px)": { width: "100%" },
                  }}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    width={"100%"}
                    sx={{
                      "@media(max-width:480px)": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      },
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}

                      width={"90%"}
                      sx={{
                        "@media(max-width:480px)": { width: "100%" },
                      }}
                    >
                      <label>Name</label>
                      <input
                        type={"text"}
                        placeholder="Your name"
                        style={{
                          marginTop: "1rem",
                          backgroundColor: "white",
                          borderRadius: "7px",
                          outline: "none",
                          height: "3rem",
                          width: "95%", // Set the width to 100%
                          border: "none",
                          padding: "1rem",
                          fontSize: "1rem",
                        }}
                      />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} width="90%"
                    sx={{
                        "@media(max-width:480px)": { width: "100%", marginTop:'1rem' },
                      }}
                    >
                      <label>Email</label>
                      <input
                        type={"text"}
                        placeholder="Your email"
                        style={{
                          marginTop: "1rem",
                          backgroundColor: "white",
                          borderRadius: "7px",

                          height: "3rem",
                          width: "95%", // Set the width to 100%
                          border: "none",
                          padding: "1rem",
                          fontSize: "1rem",
                          outline: "none",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width="100%"
                    marginTop="2rem"
                  >
                    <label>Message</label>
                    <textarea
                      placeholder="Message"
                      style={{
                        marginTop: "1rem",
                        backgroundColor: "white",
                        borderRadius: "7px",
                        height: "15rem",

                        width: "95%", // Set the width to 100%
                        border: "none",
                        padding: "1rem",
                        fontSize: "1rem",
                        outline: "none",
                      }}
                    />
                    {/* <TextField  multiline rows={9}  sx={{ marginTop:'1rem',

        backgroundColor: 'white',
        borderRadius: '10px',
        width: '100%', // Set the width to 100%
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '&:hover': {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
        },
        '&.Mui-focused': {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
        },



     }}/> */}
                  </Box>

                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "3rem",
                        textTransform: "none",
                        fontSize: "1rem",
                        padding:'0.8rem 1.5rem',
                        borderRadius:'6px',

                        backgroundColor: "#1E4F8E",
                        "&:hover": {
                          backgroundColor: "#51B5DC",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
