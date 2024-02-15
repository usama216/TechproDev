import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./Pages/Home/Index";
import PortfolioIndex from "./Pages/Portfolio/PortfolioIndex";
import AboutIndex from "./Pages/About/AboutIndex";
import ServicesIndex from "./Pages/Services/ServicesIndex";
import BlogsIndex from "./Pages/Blogs/BlogsIndex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactusIndex from "./Pages/Contactus/ContactusIndex";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
      textTransform: "none",
    },
  },
});

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/portfolio" element={<PortfolioIndex />} />
          <Route path="/aboutus" element={<AboutIndex />} />
          <Route path="/services" element={<ServicesIndex text="SERVICES" />} />
          <Route path="/blog" element={<BlogsIndex />} />
          <Route path="/contactus" element={<ContactusIndex />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
