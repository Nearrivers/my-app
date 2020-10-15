import React from 'react';
import { Grommet, Box} from 'grommet';
import Navbar from './features/navbar/Navbar'

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
      <Box fill align="center" direction="row" gap="medium" justify="center">
        <Navbar/>
      </Box>
    </Grommet>
  );
}

export default App;
