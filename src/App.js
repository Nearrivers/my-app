import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { 
  Grommet, 
  Box,
  Heading
} from 'grommet';
import Navbar from './features/navbar/Navbar'
import Diplome from './features/diplome/Diplome'
import ExperiencePro from './features/experiencePro/ExperiencePro';
import Competence from './features/competence/Competence'
import Interet from './features/interet/Interet'

const theme = {
  global: {
    font: {
      family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      size: '16px',
      height: '20px',
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      lightblue: '#00a0dc',
      purple: '#563d7c',
      red: '#dd1b16',
      orange: '#f06529',
      yellow: '#f0db4f',
      darkblue: '#3765af'
    }
  },
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
  carousel: {
    animation: {
      duration: 400,
    },
    icons: {
      color: 'blue',
    },
    disabled: {
      icons: {
        color: 'grey',
      },
    },
  },
}

function App() {
  return (
    <CookiesProvider>
      <Grommet theme={theme} full>      
        <Navbar/>      
        <Box direction="row">
          <Box fill>

            <Heading margin="medium">
              Diplômes
            </Heading>
            <Box margin="small" direction="row">
              <Diplome/>
            </Box>

            <Heading margin="medium">
              Compétences
            </Heading>
            <Box direction="row-responsive">
              <Competence/>
            </Box>

            <Heading margin="medium">
              Centres d'intérêt
            </Heading>
            <Box direction="row-responsive">
              <Interet/>
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
    </CookiesProvider>
  );
}

export default App;
