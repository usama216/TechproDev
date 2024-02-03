import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Mobile from '../../../Assets/Expertise/Mobile.png'
import WebApp from '../../../Assets/Expertise/WebApp.png'
import SMM from '../../../Assets/Expertise/SMM.png'
import SEO from '../../../Assets/Expertise/SEO.png'


const OurExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slider1 = useRef(null);

  useEffect(() => {
    if (slider1.current) {
      slider1.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const handleSectionClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Box sx={{ height: '150vh', background: 'linear-gradient(180deg, #1E4F8E, #4fb0d8)', paddingLeft: '8%', paddingRight: '8%', paddingTop: '4rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '2.5rem' }}>OUR EXPERTISE </Typography>
          <Typography>Empowering progress through innovative tech solutions at TechProdDev</Typography>
        </Box>

        <div>

          <div>
            {activeIndex === 0 && <div>

<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign:'center', color:'white', marginTop:'3rem', }}>

<img src={WebApp} alt='Web Application Development' width={'auto'} height={'auto'}/>

<Typography variant='h2' fontSize={'3rem'} marginTop={'1.5rem'}>Mobile App Design & Development</Typography>
<Typography variant='subtitle' fontSize={'1rem'} width='70%' marginTop={'1.5rem'}>
Transforming ideas into interactive and user-friendly mobile applications, we craft seamless digital
experiences tailored to your business objectives, ensuring scalability and performance at every stage.
</Typography>
<Button variant='contained' sx={{marginTop:'3rem', fontSize:'1rem', borderRadius:'15px'}}>Get Started</Button>

</Box>



            </div>}
            {activeIndex === 1 && <div>

              <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign:'center', color:'white', marginTop:'3rem'}}>
{/* <img src={Mobile} alt='Mobile Application Development' width={'30%'}/> */}


<img src={Mobile} alt='Mobile Application Development' width={'40%'} height={'auto'}/>

<Typography variant='h2' fontSize={'3rem'} marginTop={'1.5rem'}>Mobile App Design & Development</Typography>
<Typography variant='subtitle' fontSize={'1rem'} width='70%' marginTop={'1.5rem'}>
Transforming ideas into interactive and user-friendly mobile applications, we craft seamless digital
experiences tailored to your business objectives, ensuring scalability and performance at every stage.
</Typography>
<Button variant='contained' sx={{marginTop:'3rem', fontSize:'1rem', borderRadius:'15px'}}>Get Started</Button>
</Box>

            </div>}
            {activeIndex === 2 && <div>
              <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign:'center', color:'white', marginTop:'3rem', }}>

<img src={SEO} alt='Search Engine Optimization' width={'auto'} height={'auto'}/>

<Typography variant='h2' fontSize={'3rem'} marginTop={'1.5rem'}>Search Engine Optimization</Typography>
<Typography variant='subtitle' fontSize={'1rem'} width='70%' marginTop={'1.5rem'}>
Transforming ideas into interactive and user-friendly mobile applications, we craft seamless digital
experiences tailored to your business objectives, ensuring scalability and performance at every stage.
</Typography>
<Button variant='contained' sx={{marginTop:'3rem', fontSize:'1rem', borderRadius:'15px'}}>Get Started</Button>

</Box>

            </div>}
            {activeIndex === 3 && <div>

              <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign:'center', color:'white', marginTop:'3rem', }}>

<img src={SMM} alt='Web Application Development' width={'auto'} height={'auto'}/>

<Typography variant='h2' fontSize={'3rem'} marginTop={'1.5rem'}>Mobile App Design & Development</Typography>
<Typography variant='subtitle' fontSize={'1rem'} width='70%' marginTop={'1.5rem'}>
Transforming ideas into interactive and user-friendly mobile applications, we craft seamless digital
experiences tailored to your business objectives, ensuring scalability and performance at every stage.
</Typography>
<Button variant='contained' sx={{marginTop:'3rem', fontSize:'1rem', borderRadius:'15px'}}>Get Started</Button>

</Box>
            </div>}

          </div>


          <div style={{ display: 'flex', gap: '5px', paddingTop:'4rem' }}>
  <div onClick={() => handleSectionClick(0)} style={{ borderRadius:'15px 0px 0px 15px', backgroundColor: 'white', padding: '2rem', cursor: 'pointer', flex: 1 }}>
    <Box>
      Web Application Design & Development
    </Box>
  </div>
  <div onClick={() => handleSectionClick(1)} style={{backgroundColor: 'white', padding: '2rem', cursor: 'pointer', flex: 1 }}>
    <Box>
      Mobile Application Design & Development
    </Box>
  </div>
  <div onClick={() => handleSectionClick(2)} style={{ backgroundColor: 'white', padding:'2rem', cursor: 'pointer', flex: 1 }}>
    <Box>
      Search Engine Optimization
    </Box>
  </div>
  <div onClick={() => handleSectionClick(3)} style={{  borderRadius:'0px 15px 15px 0px', backgroundColor: 'white', padding:"2rem", cursor: 'pointer', flex: 1, }}>
    <Box>
      Social Media Marketing
    </Box>
  </div>
</div>




        </div>
      </Box>
    </>
  );
};

export default OurExpertise;
