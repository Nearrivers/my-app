import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Grommet, Box} from 'grommet';
import Cv from "./features/cv/Cv"

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
      <Box align="center" direction="row" gap="medium" justify="center">
        <Cv></Cv>
      </Box>
    </Grommet>
  );
}

export default App;
