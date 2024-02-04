import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assets/Logo.svg";
import facebook from "../Assets/SocialIcons/facebook.svg";
import Instagram from "../Assets/SocialIcons/instagram.svg";
import Linkedin from "../Assets/SocialIcons/linkedin.svg";
import twitter from "../Assets/SocialIcons/twitter.svg";
import Divider from '@mui/material/Divider';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
       <Grid container>
       <Grid item lg={6}>
       <Box
          sx={{
            "@media(max-width:480px)": {
              display: "none",
            },
          }}
        >
          <img src={Logo} alt="Logo" width={"35%"} height={"auto"} />
        </Box>
        <Box
          sx={{
            "@media(min-width:481px)": {
              display: "none",
            },
          }}
        >
          <img src={Logo} alt="Logo" width={"90rem"} />
        </Box>
        <Box marginTop={'2rem'}>
          <Typography color={'#83858B'} fontSize={'1.2rem'}>
            Welcome to TechProDev, where innovation meets excellence in web and
            mobile app development, design, SEO, and SMM services. With a
            dedicated team of experts, we craft tailored solutions to elevate
            your digital presence.{" "}
          </Typography>
        </Box>

        <Box marginTop={'1.5rem'}>
          <Typography sx={{fontSize:'1.5rem', fontWeight:'bold'}}>Follow us</Typography>
          <Box sx={{ display: "flex" }}>
            <Box padding="1rem">
              <img src={facebook} alt="Facebook" />
            </Box>
            <Box padding="1rem">
              <img src={Instagram} alt="Facebook" />
            </Box>
            <Box padding="1rem">
              <img src={Linkedin} alt="Facebook" />
            </Box>
            <Box padding="1rem">
              <img src={twitter} alt="Facebook" />
            </Box>
          </Box>
        </Box>

       </Grid>







       <Grid item lg={6}>

<Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
<Box>
<Typography sx={{fontSize:'1.7rem'}}>Services</Typography>

<Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Web Application Development</Typography>
  </Box>
  <Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Web Application Design</Typography>
  </Box>
  <Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Mobile Application Development</Typography>
  </Box>
  <Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Mobile Application Design</Typography>
  </Box>
  <Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Search Engine Optimization</Typography>
  </Box>
  <Box padding='1rem 0rem' color={'#494C49'} >
    <Typography sx={{fontSize:'1.4rem'}} >Social Media Marketing</Typography>
  </Box>
</Box>
</Box>

       </Grid>

       </Grid>


       <Divider sx={{ width: '100%', backgroundColor: '#0F65A0', marginTop:'1rem' }} />




<Grid container marginTop={'3rem'}>
<Grid item lg={3.5} sm={12}>
<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
    <Phone sx={{width:'3rem', height:'auto'}}/>
    <Box display={'flex'} flexDirection={'column'} >
    <Typography sx={{fontSize:'1.3rem'}}>+923000080216</Typography>
        <Typography sx={{fontSize:'1.3rem'}}>+923000080216</Typography>

    </Box>
    </Box>

</Grid>

<Grid item lg={3.5} sm={12}>
<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
    <LanguageOutlinedIcon sx={{width:'3rem', height:'auto'}}/>
    <Box display={'flex'} flexDirection={'column'} >

        <Typography sx={{fontSize:'1.3rem'}}>www.techprodev.com/</Typography>
        <Typography sx={{fontSize:'1.3rem'}}>info@techprodev.com</Typography>

    </Box>
    </Box>
</Grid>
<Grid item lg={5} sm={12}>

<Box display={'flex'} width='80%' justifyContent={'center'} alignItems={'center'} >
        <FmdGoodOutlinedIcon sx={{width:'3rem', height:'auto'}}/>
        <Typography sx={{fontSize:'1.3rem', lineHeight:'30px'}}>R-690 Sector 7-D/3 Gulshan-e-Farooq,
North Karachi </Typography>
</Box>
</Grid>

</Grid>

    {/* -------------------yeh box start-------- */}


<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>
    <Typography sx={{color:'#68769F', fontSize:'1.3rem'}}>
    © 2024, TECHPRODEV. All rights reserved.
    </Typography>
</Box>


</Box>





    </>
  );
};

export default Footer;
