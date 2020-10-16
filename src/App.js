import React from 'react';
import { 
  Grommet, 
  Box,
  Heading
} from 'grommet';
import Navbar from './features/navbar/Navbar'
import Diplome from './features/diplome/Diplome'
import ExperiencePro from './features/experiencePro/ExperiencePro';

const theme = {
  global: {
    font: {
      family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      size: '16px',
      height: '20px',
    },
  },
}

function App() {
  return (
    <Grommet theme={theme} full>      
      <Navbar/>      
      <Box direction="row">
        <Box fill>

          <Heading margin="small">
            Diplômes
          </Heading>
          <Box margin="small" direction="row">
            <Diplome/>
          </Box>

          <Heading margin="medium">
            Expériences professionnelles
          </Heading>
          <Box direction="row">
            <ExperiencePro/>
          </Box>

        </Box>        
      </Box>
    </Grommet>
  );
}

export default App;
