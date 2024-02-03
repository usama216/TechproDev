import './App.css';
import { Routes, Route} from 'react-router-dom'
import Index from './Pages/Home/Index';
import PortfolioIndex from './Pages/Portfolio/PortfolioIndex';
import AboutIndex from './Pages/About/AboutIndex';
import ServicesIndex from './Pages/Services/ServicesIndex';
import BlogsIndex from './Pages/Blogs/BlogsIndex';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
   <>
  <Routes>
    <Route path='/' element={<Index/>} exact/>
    <Route path='/portfolio' element={<PortfolioIndex/>}/>
    <Route path='/aboutus' element={<AboutIndex/>}/>
    <Route path='/services' element={<ServicesIndex/>}/>
    <Route path='/blogs' element={<BlogsIndex/>}/>
  </Routes>



   </>
  );
}

export default App;
