import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Aboutusimage from '../../../Assets/aboutus.png'

const Aboutus = () => {
  return (
    <>
        <Box sx={{

background: "linear-gradient(180deg, #1E4F8E, #4fb0d8)",
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}>

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
            ABOUT US{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              width:'80%',
              "@media (max-width: 480px)": {
                fontSize: "0.8rem",
                width:'100%'
              },
            }}
          >
         TechProDev, A one stop shop for all your digital needs.
         <br/>
         <br/>
         Welcome to TechProDev, where innovation meets excellence in web and mobile app development,
design, SEO, and SMM services. With a dedicated team of experts, we craft tailored solutions to elevate
your digital presence. From captivating designs to strategic marketing campaigns, we're committed to
driving your success in today's dynamic online environment. Trust TechProDev to transform your vision
into reality and propel your business forward.
          </Typography>

          <Button  variant="contained"
                    sx={{
                      marginTop: "3rem",
                      fontSize: "1rem",
                      borderRadius: "5px",
                      textTransform:'none',
                      backgroundColor: "#f3f4f6",
                      color:'#3B82F6',
                      "@media (max-width: 480px)": {
                        fontSize: "0.8rem",
                        fontWeight: "semi-bold",
                        textTransform: "none",
                        marginTop: "1.5rem",
                      },
                    }}>
            Read More About us
          </Button>


          <Box sx={{paddingLeft:'10%', paddingRight:'10%', marginTop:'3rem',
"@media (max-width: 480px)": {
                       paddingRight:'0%',
                       paddingLeft:'0%'
                      },

           }}>
            <img src={Aboutusimage} alt='about us' width={'100%'} height={'auto'}/>
          </Box>
        </Box>



        </Box>
    </>
  )
}

export default Aboutus