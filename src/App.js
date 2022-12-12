import './App.css';
import React from 'react'
import { Box } from '@mui/material';
import Banner from './page/Banner';
import TaleTo from './page/TaleTo';
import Weeding from './page/Weeding';
import About from './page/About';
import Think from './page/Think';
import TimeLEss from './page/TimeLEss';
import Services from './page/Services';
import Haldi from './page/Haldi';
import Service from './page/Service';

const App = () => {
  return (
    <Box
      sx={{
        fontFamily: "'Anek Devanagari', sans-serif"
      }}
    >
      <Banner />
      <TaleTo />
      <Weeding />
      <About />
      <Think />
      <TimeLEss />
      <Services />
      <Haldi />
      <Service />
    </Box>
  )
}

export default App