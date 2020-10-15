import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Grommet, Box, Text } from 'grommet';
import Name from "./features/name/Name"

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
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Name/>
      </Box>
    </Grommet>
  );
}

export default App;
