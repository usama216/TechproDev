import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");



  const handleSubmit = (e) => {

    e.preventDefault();

    // Validate name field to ensure it doesn't contain integers
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim() || !nameRegex.test(name.trim())) {
      setNameError(!name.trim() ? "Please enter your name." : "Name cannot contain numbers.");
      setTimeout(() => {
        setNameError("");
      }, 3000);
      return;
    }

    // Validate email field to ensure it contains a valid email address format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError(!email.trim() ? "Please enter your email." : "Please enter a valid email address.");
      setTimeout(() => {
        setEmailError("");
      }, 3000);
      return;
    }

    // Check if message field is empty
    if (!message.trim()) {
      setMessageError("Please enter your message.");
      setTimeout(() => {
        setMessageError("");
      }, 3000);
      return;
    }
    if (!name || !email || !message) {
      toast.error('Please fill all the required fields.');
    } else {
      // Here, you can handle the form submission logic
      // For now, let's just display a success message
      toast.success('Your message has been sent to the TechProDev Team.');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // const handleSubmit = async (e) => {
  //  e.preventDefault();

  // // Validate name field to ensure it doesn't contain integers
  // const nameRegex = /^[A-Za-z\s]+$/;
  // if (!name.trim() || !nameRegex.test(name.trim())) {
  //   setNameError(!name.trim() ? "Please enter your name." : "Name cannot contain numbers.");
  //   setTimeout(() => {
  //     setNameError("");
  //   }, 3000);
  //   return;
  // }

  // // Validate email field to ensure it contains a valid email address format
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!email.trim() || !emailRegex.test(email.trim())) {
  //   setEmailError(!email.trim() ? "Please enter your email." : "Please enter a valid email address.");
  //   setTimeout(() => {
  //     setEmailError("");
  //   }, 3000);
  //   return;
  // }

  // // Check if message field is empty
  // if (!message.trim()) {
  //   setMessageError("Please enter your message.");
  //   setTimeout(() => {
  //     setMessageError("");
  //   }, 3000);
  //   return;
  // }


  //   // If all fields are filled, proceed with form submission
  //   const data = { name, email, message };

  //   try {
  //     const response = await fetch('http://localhost:5000/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       toast.success('Your message has been sent to the TechProDev Team.');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //     } else {
  //       toast.error('Failed to send message. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     toast.error('Failed to send message. Please try again later.');
  //   }
  // };


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
            CONTACT US
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
        <Box sx={{ paddingLeft: "20%", paddingRight: "20%",
         "@media(max-width:600px)": {
                     paddingLeft:'0%',
                     paddingRight:'0%'
                    },

        }}>
          <Grid container color={"white"} marginTop={"3rem"}>
            <Grid item md={12} lg={12} sm={12}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "550",
                    "@media(max-width:480px)": {
                      textAlign: "center",
                      fontSize: "1.5rem",
                    },
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
                    <Grid item lg={6} sm={6} md={6} xs={12}>
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
                            +92 334 3588617
                          </Typography>
                          <Typography sx={{ fontSize: "1rem" }}>
                            +971 55 533 7567
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item lg={6} sm={6} md={6} xs={12}>
                      <Box display={"flex"} alignItems={"center"}>
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
                            info@techprodev.com
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <form
                  onSubmit={handleSubmit}
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
                      height={'5rem'}

                      sx={{
                        "@media(max-width:480px)": { width: "100%" },
                      }}
                    >
                      <label>Name</label>
                      <input
                        type={"text"}
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                        style={{
                          marginTop: "1rem",
                          backgroundColor: "white",
                          borderRadius: "7px",
                          outline: "none",
                          height: "3rem",
                          width: "95%",
                          border: "none",
                          padding: "1rem",
                          fontSize: "1rem",
                        }}
                      />
                      {nameError && (
                        <Typography
                          variant="caption"
                          color="error"
                          fontSize={'0.8rem'}
                          fontWeight={'600'}
                          sx={{ marginTop: "0rem",
                          "@media(max-width:600px)": {
                  fontSize:'0.8rem',

                    },
                           }}
                        >
                          {nameError}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      width="90%"
                      height={'5rem'}
                      sx={{
                        "@media(max-width:480px)": { width: "100%", marginTop: '1rem' },
                      }}
                    >
                      <label>Email</label>
                      <input
                        type={"text"}
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        style={{
                          marginTop: "1rem",
                          backgroundColor: "white",
                          borderRadius: "7px",
                          height: "3rem",
                          width: "95%",
                          border: "none",
                          padding: "1rem",
                          fontSize: "1rem",
                          outline: "none",
                        }}
                      />
                      {emailError && (
                        <Typography
                        variant="caption"
                          color="error"
                          fontSize={'0.8rem'}
                          fontWeight={'600'}
                          sx={{ marginTop: "0rem",  "@media(max-width:600px)": {
                  fontSize:'0.8rem',

                    }, }}
                        >
                          {emailError}
                        </Typography>
                      )}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}

                      style={{
                        marginTop: "1rem",
                        backgroundColor: "white",
                        borderRadius: "7px",
                        height: "15rem",
                        width: "100%",
                        border: "none",
                        padding: "1rem",
                        fontSize: "1rem",
                        outline: "none",
                        "@media(max-width:600px)": {
                 marginTop:'0rem'

                    },
                      }}
                    />
                    {messageError && (
                      <Typography
                      variant="caption"
                          color="error"
                          fontSize={'0.8rem'}
                          fontWeight={'600'}
                          sx={{ marginTop: "0rem",  "@media(max-width:600px)": {
                  fontSize:'0.8rem',

                    }, }}
                      >
                        {messageError}
                      </Typography>
                    )}


                  </Box>

                 {/* <Box marginTop={'3rem'}>
                 <ReCAPTCHA

              //  sitekey="6Lf_2HcpAAAAAGDcg_vqlep5uPP-Wf4vORg3yYZ_"
               sitekey="6Ld9Angp
               AAAAANOPtvSYc-Q8i8Wa7VMPefufzzHQ"
              //  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"




               onChange={onChange}

             />

                 </Box> */}


                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        marginTop: "3rem",
                        textTransform: "none",
                        fontSize: "1rem",
                        padding: '0.8rem 1.5rem',
                        borderRadius: '6px',
                        backgroundColor: "#51B5DC",
                        "&:hover": {
                          backgroundColor: "#1E4F8E",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactUs;
