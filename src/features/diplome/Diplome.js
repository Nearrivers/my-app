import React from 'react';

import { Accordion, AccordionPanel, Box, Text } from 'grommet';
import diplome from '../../app/data/diplome.json'

const Diplome = props => {
    const { animate, multiple } = props;
    return (        
        <Box fill>
            <Accordion animate={animate} multiple={multiple} >
                {diplome.map((object, i) => {
                    return (
                        <AccordionPanel key={i} label={object.nom}>
                            <Box overflow="hidden" height="small">
                                <Box height="large" flex={false} margin="small">
                                    <Text margin="small">
                                        {object.annee}
                                    </Text>
                                    <Text margin="small">  
                                        {object.spécialite}
                                    </Text>
                                    <Text margin="small">  
                                        {object.etablissement}
                                    </Text>
                                </Box>
                            </Box>
                        </AccordionPanel>
                    )
                })}
            </Accordion>
        </Box>       
    );
};


export default Diplome