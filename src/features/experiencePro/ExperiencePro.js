import React from 'react';

import {
    Text,
    Box,
    Card,
    CardFooter,
    CardHeader,
    Heading,
    Paragraph,
} from 'grommet';

import experiencePro from '../../app/data/experiencePro.json'

const ExperiencePro = () => {
    return (
        <Box direction="row" pad="medium" align="start">
            {experiencePro.map((object, i) => {
                return (
                    <Card elevation="medium" width="large" margin="small" key={i} pad="medium">
                        <CardHeader>
                            <Heading level="1" align="center">
                                {object.poste}
                            </Heading>
                        </CardHeader>
                        <Box pad={{ horizontal: 'medium' }} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium' }}>
                                {object.entreprise}
                            </Heading>
                            <Paragraph margin={{ top: 'none' }}>
                                {object.description}
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Text>{object.lieu}</Text>
                            </Box>
                        </CardFooter>
                    </Card>
                )
            })}            
        </Box>
    );
};

export default ExperiencePro