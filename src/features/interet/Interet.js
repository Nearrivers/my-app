import React from 'react';
import { Box, Carousel, Image } from 'grommet';


const sources = [
    {
        type: "Code",
        image: require("../../img/interets/code.jpg")
    },
    {
        type: "Dessin",
        image: require("../../img/interets/dessin.jpg")
    },
    {
        type: "Games",
        image: require("../../img/interets/games.jpg")
    },
    {
        type: "Musculation",
        image: require("../../img/interets/musculation.jpg")
    }
]

const Interet = ({ controls, ...rest }) => (
    <Box align="center" pad="large" fill>
        <Carousel controls={controls} {...rest}>
            {sources.map((value,i) => (
                <Box pad="medium" background="accent-1" key={i}>
                    <Image fit="cover" src={value.image} width="medium" height="medium"/>
                </Box>
            ))}
        </Carousel>
    </Box>
)

export default Interet