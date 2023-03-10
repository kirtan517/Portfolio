import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact , Experience , Feedbacks , Hero , Navbar,
Tech, Works , StarsCanvas} from './components';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
    <Box>
      <Navbar/>
      <Hero/>
    </Box>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <Box>
      <Contact/>
      <StarsCanvas/>
    </Box>
    </BrowserRouter>
  );
}

export default App;
