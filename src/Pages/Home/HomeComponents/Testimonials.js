import React from "react";
import { Box, Grid, Rating, Stack, Typography,  useMediaQuery } from "@mui/material";
import Mypic from "../../../Assets/Testimonials/mypic.png";

const testimonialsData = [
  // Add your testimonial data here
  {
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },
  {
    id: 2,
    role: "Marketing Manager",
    companyName: "Company 2",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },
  {
    id: 3,
    role: "Marketing Manager",
    companyName: "Company 3",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },
  {
    id: 4,
    role: "Marketing Manager",
    companyName: "Company 4",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },
  {
    id: 5,
    role: "Marketing Manager",
    companyName: "Company 5",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },{
    id: 6,
    role: "Marketing Manager",
    companyName: "Company 6",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },{
    id: 7,
    role: "Marketing Manager",
    companyName: "Company 7",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },{
    id: 8,
    role: "Marketing Manager",
    companyName: "Company 8",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },{
    id: 9,
    role: "Marketing Manager",
    companyName: "Company 9",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: '5.0',
  },
  // Add more testimonial data as needed
];

const TestimonialCard = ({ id, role, companyName, content, rating }) => (

   <Grid item key={id} xs={12} sm={5.5} md={3.5} lg={3.7} >
    <Box sx={{ padding: "2rem", boxShadow: "5px 5px 4px gray", borderRadius: "15px" }}>
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
        <Box sx={{ width: "25%", height: "auto", borderRadius: "50%", overflow: "hidden", "@media(min-width:600px) and (max-width:768px)": {
               width:'100%'

              }, }}>
          <img src={Mypic} alt="My Pic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
  </Grid>

);

const Testimonials = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

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

      <Grid container gap={"2rem"} marginTop={"3rem"} sx={{"@media(max-width:779px) ": {
              gap:'1rem'
            },}}>
        {testimonialsData.slice(0, isMobile ? 3 : undefined).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Grid>
    </Box>
  );
};


export default Testimonials;
