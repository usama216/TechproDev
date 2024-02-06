import { Grid, Box, Button, Typography, Avatar } from "@mui/material";
import Blog1 from '../../../Assets/Blogs/Blog1.svg'
import UpparBanner from '../../../Assets/AboutUs/UpparBanner.svg'


const BlogItem = ({ title, category1, category2, description, author, date }) => (
  <Box sx={{boxShadow:'1px 2px 9px #cbcbcb'}}>
    <Box>
      <img src={Blog1} alt="Blog 1 image" style={{ objectFit: 'cover' }} width={'100%'} />
    </Box>

    <Box paddingLeft={"1.5rem"} marginTop={"1rem"} paddingBottom='2rem'>
      <Box display={"flex"} gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffc75d",
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
          fontSize={"2rem"}
        >
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Box>
      <Box display={"flex"} gap={2} alignItems={"center"}>
        <Avatar />
        <Typography>{author}</Typography>
        <Typography>{date}</Typography>
      </Box>
    </Box>
  </Box>
);

const BlogComponent = () => {
  const blogs = [
    {
      title: "Blog 1",
      category1: "Development",
      category2: "AI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
      author: "Author Name",
      date: "Date posted",
    },
    {
        title: "Blog 1",
        category1: "Development",
        category2: "AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
        author: "Author Name",
        date: "Date posted",
      },{
        title: "Blog 1",
        category1: "Development",
        category2: "AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
        author: "Author Name",
        date: "Date posted",
      },{
        title: "Blog 1",
        category1: "Development",
        category2: "AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
        author: "Author Name",
        date: "Date posted",
      },
      {
        title: "Blog 1",
        category1: "Development",
        category2: "AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
        author: "Author Name",
        date: "Date posted",
      },{
        title: "Blog 1",
        category1: "Development",
        category2: "AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iure.",
        author: "Author Name",
        date: "Date posted",
      },
    // Add more blog data objects as needed
  ];

  return (
    <>

<Box
        sx={{
          backgroundImage: `url(${UpparBanner})`,

          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "none",
          height: "30vh",
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            height: "30vh",
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

        <Grid container spacing={4} paddingLeft={'10%'} paddingRight={'10%'} marginTop={'4rem'}>
      {blogs.map((blog, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
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
