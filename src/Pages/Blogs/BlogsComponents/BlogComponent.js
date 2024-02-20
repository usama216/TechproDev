import { Grid, Box, Button, Typography, Avatar } from "@mui/material";

import UpparBanner from '../../../Assets/AboutUs/UpparBanner.svg'
import { BlogData } from "../../../Data/BlogData";


const BlogItem = ({pic, title, category1, category2, description, author, date }) => (
  <Box sx={{ boxShadow: '1px 2px 9px #cbcbcb', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box style={{ flex: 1, overflow: 'hidden' }}>

      <img src={pic} alt="Blog pic" style={{ objectFit: 'cover', width: '100%' }} />
    </Box>

    <Box paddingX={"1.5rem"} paddingTop={"1rem"} paddingBottom='2rem' style={{ flex: 1, overflowY: 'auto' }}>
      <Box display={"flex"} gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffc75d",
            '&:hover':{
backgroundColor:'#ffc75d'
            },
            borderRadius: "5px",
            textTransform: "none",
            color: "black",
          }}
        >
          {category1}
        </Button>
        <Button
          variant="contained"
          sx={{
            '&:hover':{
backgroundColor:'#ffc75d'
            },
            backgroundColor: "#ffc75d",
            borderRadius: "5px",
            textTransform: "none",
            color: "black",
          }}
        >
          {category2}
        </Button>
      </Box>
      <Box marginTop={"1.5rem"}>
        <Typography
          sx={{ lineHeight: "30px" }}
          variant="h1"
          fontSize={"1.3rem"}
        >
          {title}
        </Typography>
        <Box style={{ maxHeight: '150px', overflow: 'hidden' }}>
          <Typography color='#6C757D'
          fontSize={"0.9rem"}

          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} gap={2} alignItems={"center"}>
        <Box gap={1} display={'flex'} alignItems={'center'}>
        <Avatar height='50px' width='50px'/>
        <Typography color='#000000' fontSize={"0.8rem"}>{author}</Typography>
        </Box>
        <hr width='10%'/>
        <Typography color='#6C757D' fontSize={"0.8rem"}>{date}</Typography>
      </Box>
    </Box>
  </Box>
);

const BlogComponent = () => {

  return (
    <>

<Box
        sx={{
          backgroundImage: `url(${UpparBanner})`,

          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "none",
          height: "40vh",
          marginTop: "1rem",
          width: "100%",
          "@media(max-width:480px)": {
            height: "20vh",
            backgroundSize: "cover",
            marginTop: "0rem",
          },
          "@media(min-width:481px) ": {
            backgroundSize: "cover",
          },
        }}
      >
        <Box
        data-aos="fade-up"
        // data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
data-aos-delay="500"

     data-aos-duration="2000"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            height: "40vh",
            "@media(max-width:480px)": {
              height: "20vh",
            },
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
           BLOGS
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            TechProDev featured projects showcase.
          </Typography>
        </Box>
      </Box>

        <Grid container spacing={4} paddingLeft={'10%'} paddingRight={'10%'} marginTop={'4rem'}
data-aos="fade-up"
        // data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
data-aos-delay="500"

     data-aos-duration="2000"
        >
      {BlogData.map((blog, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}

        >
          <Box>
            <BlogItem {...blog} />
          </Box>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default BlogComponent;
