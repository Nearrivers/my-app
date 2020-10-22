import React, { useState, useRef } from 'react'
import photo from '../../img/V1qVvY_Y_400x400.jpg'
import navBar from '../../app/data/navbar.json'

import {
    Avatar,
    Button,
    Box,
    Drop,
    Nav,
    Text,
    Header,
    Anchor,
    ResponsiveContext,
    Menu
} from 'grommet';

import {
    ContactInfo,
    Music,
    Workshop,
    Analytics,
    Book,
    Menu as MenuIcon 
} from 'grommet-icons';

const iconsMap = color => [
    <Book color={color} />,
    <Analytics color={color} />,
    <Music color={color} />,
    <Workshop color={color} />,
    <ContactInfo color={color} />
];

const NavbarButton = ({ iconName, index }) => {
    const [over, setOver] = useState();
    const tooltipColor = { color: 'accent-1', opacity: 0.9 };

    const ref = useRef();
        return (
            <Box fill="horizontal">
                <Button
                    ref={ref}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                    onFocus={() => setOver(false)}
                    onBlur={() => setOver(false)}
                    plain
                >
                    {({ hover }) => (
                    <Box pad={{ vertical: 'small' }} align="center" round="true">
                        {iconsMap(hover ? 'accent-1' : 'white')[index]}
                    </Box>
                    )}
                </Button>
                {ref.current && over && (
                    <Drop align={{ top: 'bottom', right: 'right' }} target={ref.current} plain>
                        <Box
                            animation="slideDown"
                            margin="xsmall"
                            pad="small"
                            background={tooltipColor}
                        >
                            {iconName}
                        </Box>
                    </Drop>
                )}
            </Box>
        );
};

const Navbar = () => (        
    <Header background="brand" pad="small" justify="around">      
        <Avatar src={photo}/>
        <Text>Antoine Fourcade</Text>
        <ResponsiveContext.Consumer>
            {size =>
                size === 'small' ? (
                    <Box justify="end">
                        <Menu
                            a11yTitle="Navigation Menu"
                            dropProps={{ align: { top: 'bottom', right: 'right' } }}
                            icon={<MenuIcon color="white" />}
                            items={navBar}
                        />
                    </Box>
                ) : (
                <Nav direction="row">
                    {navBar.map((value, i) => (
                        <Anchor href={value.href} key={i}>
                            <NavbarButton                         
                                iconName={value.label} 
                                index={i}
                            />
                        </Anchor>
                    ))}
                </Nav> )}
        </ResponsiveContext.Consumer>
    </Header>
);

export default Navbar