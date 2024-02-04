import { Box, Typography } from '@mui/material'
import React from 'react'

const Portfolio = () => {
  return (
    <>
        <Box sx={{
height:'100vh',

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
            color: "#1E4F8E",
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
            PORTFOLIO{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            TechProDev featured projects showcase.
          </Typography>
        </Box>



        </Box>
    </>
  )
}

export default Portfolio