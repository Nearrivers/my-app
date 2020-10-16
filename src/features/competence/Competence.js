import React from 'react';

import {
    Favorite,
    Js,
    Css3,
    Html5,
    Tooltip   
} from 'grommet-icons';
import { Box, Card, CardBody, CardFooter, Text, Avatar, Button } from 'grommet';
import logoAngular from '../../img/Angular_full_color_logo.svg.png'
import logoBootstrap from '../../img/bootstrappng.png'
import logoMySql from '../../img/development+logo+mysql+icon-1320184807686758112.png'
import Cookies from 'universal-cookie';

const data = [
    {
        color : "blue",
        icon : <Tooltip size="large" color='white'/>,
        title : "Anglais",
        subTitle : "Niveau Bilingue"
    },
    {
        color: "lightblue",
        icon: <Css3 size='large' color='white'/>,
        title: "CSS",
        subTitle: "Bonnes bases" ,
        message: "No Module Connected"
    },
    {
        color: "darkblue",
        icon: <Avatar size='large' color='white' src={logoMySql}/>,
        title: "MySql",
        subTitle: "Bon niveau" ,
        message: "No Module Connected"
    },
    {
        color: "purple",
        icon: <Avatar size='large' color='white' src={logoBootstrap}/>,
        title: "Bootstrap",
        subTitle: "Très bon niveau" ,
        message: "No Module Connected"
    },
    {
        color: "red",
        icon: <Avatar size='large' color='white' src={logoAngular}/>,
        title: "Angular",
        subTitle: "Bonnes bases" ,
        message: "No Module Connected"
    },
    {
        color : "orange",
        icon : <Html5 size='large' color='white'/>,
        title: "HTML",
        subTitle: "Bon niveau" ,
        message: "No Module Connected"
    }, 
    {
        color: "yellow",
        icon: <Js size='large' color='plain'/>,
        title : "JavaScript",
        subTitle: "Front-end et Back-end" ,
        message: "No Module Connected"
    }
];

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
    <Box gap="small" align="center" {...rest}>
        {children}
        <Box>
            <Text size={size} weight="bold">
                {title}
            </Text>
            <Text size={size}>{subTitle}</Text>
        </Box>
    </Box>
);

const Competence = () => {
    const cookies = new Cookies();
    const [favorite, setFavorite] = React.useState(cookies.getAll());

    return (
        <Box pad="medium" direction="row-responsive" breakpoint="large">
            {data.map((value, i) => (
                
                <Card background={value.color} key={i} margin="small">
                    <CardBody pad="small">
                        <Identifier
                            pad="small"
                            title={value.title}
                            subTitle={value.subTitle}
                            size="small"
                            align="start"
                        >
                            {value.icon}                    
                        </Identifier>
                    </CardBody>
                    <CardFooter pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}>
                        <Box direction="row" pad="medium">
                            <Button
                                icon={<Favorite color={favorite[i] ? 'red' : undefined} />}
                                hoverIndicator
                                label = "J'aime"
                                onClick={() => {
                                    const newArray = [...favorite]
                                    newArray[i] = !favorite[i]
                                    setFavorite(newArray);
                                }}
                            />
                        </Box>      
                    </CardFooter>
                </Card>
            ))}
        </Box>
    )
};

export default Competence