import React from 'react';
import { Box, Image, Stack, Card, CardHeader, CardBody, Heading } from 'grommet';


const sources = [
    {
        type: "Code",
        image: require("../../img/interets/code.jpg"),
        footer: "Programmation"
    },
    {
        type: "Dessin",
        image: require("../../img/interets/dessin.jpg"),
        footer: "Dessin"
    },
    {
        type: "Games",
        image: require("../../img/interets/games.jpg"),
        footer: "Jeux vidéos"
    },
    {
        type: "Musculation",
        image: require("../../img/interets/musculation.jpg"),
        footer: "Musculation"
    }
]

const Interet = () => (
    <Box direction="row-responsive" align="center" pad="large" gap="small" fill>        
        {sources.map((value,i) => (
            <Card width="medium" key={value.type}>
            {/* Stacked CardBody and CardHeader on top of each other 
            in that order */}
                <Stack anchor="bottom-left">
                    <CardBody height="medium">
                        <Image
                            fit="cover"
                            src={value.image}
                            a11yTitle={value.type}
                        />
                    </CardBody>
                    <CardHeader
                        pad={{ horizontal: 'small', vertical: 'small' }}
                        // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                        background="#000000A0"
                        width="medium"
                        justify="start"
                    >
                        <Box>
                            <Heading level="3" margin="none">
                            {value.footer}
                            </Heading>
                        </Box>
                    </CardHeader>
                </Stack>
            </Card>
        ))}
    </Box>
)

export default Interet