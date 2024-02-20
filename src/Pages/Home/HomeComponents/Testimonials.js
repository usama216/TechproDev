import React from "react";
import { Box, Rating, Stack, Typography, } from "@mui/material";

import Slider from "react-slick";
import {TestimonialsData} from '../../../Data/TestimonialsData'

const Testimonials = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    pauseOnHover:false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  return (
    <Box
data-aos-delay="1000"
data-aos="fade-up"

     data-aos-duration="2000"

     sx={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "4rem", paddingBottom: "4rem",
 // data-aos="fade-up"


     }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "#1E4F8E", textAlign: "center" }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold", "@media (max-width: 480px)": { fontSize: "1.5rem" } }}>
          TESTIMONIALS
        </Typography>
        <Typography sx={{ fontSize: "1rem", "@media (max-width: 480px)": { fontSize: "1rem" } }}>
          Don’t just take our word for it, have a look at what our clients had to say.
        </Typography>
      </Box>

  <Box padding={'4rem'}
  sx={{
    '@media(max-width:600px)':{
      padding:'0rem'
    }
  }}

  >
  <Slider {...settings}>


       {TestimonialsData.map(({id,pic, role, companyName, content, rating}) => (

   <Box gap={10} paddingTop={'3rem'}>
    <Box sx={{ padding: "2rem",  borderRadius: "15px" }} gap={10} >
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
        <Box sx={{ width: "25%", height: "auto", borderRadius: "50%", overflow: "hidden", "@media(min-width:600px) and (max-width:768px)": {
               width:'100%'

              }, }}>
          <img src={pic} alt="My Pic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box sx={{ paddingLeft: "1.5rem" }}>
          <Typography fontWeight={600} fontSize={'1rem'} sx={{'@media(max-width:480px)':{fontSize:'0.9rem'}}}>{role}</Typography>
          <Typography sx={{ color: "#1E4F8E", '@media(max-width:480px)':{fontSize:'0.9rem'} }} >{companyName}</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "#0F65A0", textAlign: "center", fontSize:'1rem', lineHeight:'20px',
        "@media(min-width:600px) and (max-width:768px)": {
                fontSize:'0.8rem'


              },

       }}>{content}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem" }}>
        <Typography fontWeight={'600'} paddingRight={'0.5rem'}>{rating}</Typography>
        <Stack spacing={1}>
          <Rating  defaultValue={rating} precision={0.5} readOnly/>
        </Stack>
      </Box>
    </Box>

   </Box>

        ))}


   </Slider>
  </Box>
    </Box>
  );
};


export default Testimonials;
