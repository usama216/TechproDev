import React from "react";
import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import Mypic from "../../../Assets/Testimonials/mypic.png";

const testimonialsData = [
  // Add your testimonial data here
  {
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },
  {
    id: 2,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },
  {
    id: 3,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },
  {
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },
  {
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },{
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },{
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },{
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },{
    id: 1,
    role: "Marketing Manager",
    companyName: "Company 1",
    content: "They communicated smoothly and were always available. Customers can expect a cost-effective and effective team.",
    rating: 5.0,
  },
  // Add more testimonial data as needed
];

const TestimonialCard = ({ id, role, companyName, content, rating }) => (
  <Grid item key={id} xs={12} md={12} lg={3.5}>
    <Box sx={{ padding: "2rem", boxShadow: "5px 5px 4px gray", borderRadius: "15px" }}>
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
        <Box sx={{ width: "25%", height: "auto", borderRadius: "50%", overflow: "hidden" }}>
          <img src={Mypic} alt="My Pic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box sx={{ paddingLeft: "1.5rem" }}>
          <Typography>{role}</Typography>
          <Typography sx={{ color: "#1E4F8E" }}>{companyName}</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "#0F65A0", textAlign: "center" }}>{content}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem" }}>
        <Typography>{rating}</Typography>
        <Stack spacing={1}>
          <Rating name={`size-medium-${id}`} defaultValue={rating} />
        </Stack>
      </Box>
    </Box>
  </Grid>
);

const Testimonials = () => (
  <Box sx={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "4rem", paddingBottom: "4rem" }}>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "#1E4F8E", textAlign: "center" }}>
      <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold", "@media (max-width: 480px)": { fontSize: "1.5rem" } }}>
        TESTIMONIALS
      </Typography>
      <Typography sx={{ fontSize: "1rem", "@media (max-width: 480px)": { fontSize: "1rem" } }}>
        Don’t just take our word for it, have a look at what our clients had to say.
      </Typography>
    </Box>

    <Grid container gap={"2rem"} marginTop={"3rem"}>
      {testimonialsData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </Grid>
  </Box>
);

export default Testimonials;
