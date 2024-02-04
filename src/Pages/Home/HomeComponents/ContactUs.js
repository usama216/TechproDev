import { LocationCity, Phone } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Map from '../../../Assets/MAP.JPG'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';




const ContactUs = () => {
    const mapLink = 'https://maps.app.goo.gl/P9aHue6YQDzN1zbV7';

    const handleClick = () => {
      window.open(mapLink, '_blank');
    };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(180deg, #1E4F8E, #4fb0d8)",
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
                fontSize: "0.8rem",
                width: "100%",
              },
            }}
          >
            We would love to get in touch with you and bring your concepts to
            fruition.
          </Typography>
        </Box>
<Box>


<Grid container color={'white'} marginTop={'3rem'}>
<Grid item lg={'6'}>
<Typography sx={{fontSize:'2rem', fontWeight:'500'}}>Our Address</Typography>
<div style={{marginTop:'2rem'}}>
      <img src={Map} alt={'Location'} onClick={handleClick} style={{ cursor: 'pointer',maxWidth: '100%', // Set maximum width to 100% to make the image responsive
        height: 'auto', }} />
    </div>


    <Box display={'flex'} width='80%' justifyContent={'center'} alignItems={'center'} marginTop={'1rem'}>
        <FmdGoodOutlinedIcon sx={{width:'3rem', height:'auto'}}/>
        <Typography sx={{fontSize:'2rem', lineHeight:'30px'}}>R-690 Sector 7-D/3 Gulshan-e-Farooq,
North Karachi </Typography>
    </Box>
</Grid>




<Grid item lg={'6'}>

<Box>
<Typography sx={{fontSize:'2rem', fontWeight:'500'}}>Contact Details</Typography>

<Box display={'flex'} marginTop={'2rem'} justifyContent={'space-between'} width={'90%'}>
    <Box display={'flex'} alignItems={'center'}>
    <Phone sx={{width:'3rem', height:'auto'}}/>
    <Box display={'flex'} flexDirection={'column'} >
    <Typography sx={{fontSize:'1.5rem'}}>+923000080216</Typography>
        <Typography sx={{fontSize:'1.5rem'}}>+923000080216</Typography>

    </Box>
    </Box>

    {/* -------------------yeh box start-------- */}

     <Box display={'flex'} alignItems={'center'} paddingLeft={'3rem'}>
    <LanguageOutlinedIcon sx={{width:'3rem', height:'auto'}}/>
    <Box display={'flex'} flexDirection={'column'} >

        <Typography sx={{fontSize:'1.5rem'}}>www.techprodev.com/</Typography>
        <Typography sx={{fontSize:'1.5rem'}}>info@techprodev.com</Typography>

    </Box>
    </Box>

    {/* -------------------yeh box end-------- */}



</Box>
<form style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'2rem'}}>

<Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} width={'100%'}>
  <Box display={'flex'} flexDirection={'column'} width={'90%'}>
    <label>Name</label>
    <TextField
      sx={{
        marginTop: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '95%', // Set the width to 100%
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
      }}
    />
  </Box>
  <Box display={'flex'} flexDirection={'column'} width='90%'>
    <label>Email</label>
    <TextField
      sx={{
        marginTop: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '95%', // Set the width to 100%
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
      }}
    />
  </Box>
</Box>
<Box display={'flex'} flexDirection={'column'} width='100%' marginTop='2rem'>
    <label>Email</label>
    <TextField  multiline rows={9}  sx={{ marginTop:'1rem',

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



     }}/>
     </Box>

    <Box>
    <Button variant='contained' sx={{marginTop:'3rem'}}>Send Message</Button>
    </Box>

</form>
</Box>
</Grid>


</Grid>





</Box>


      </Box>
    </>
  );
};

export default ContactUs;
