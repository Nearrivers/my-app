import React, { useState, useRef } from 'react'
import photo from '../../img/V1qVvY_Y_400x400.jpg'

import {
    Avatar,
    Button,
    Box,
    Drop,
    grommet,
    Grommet,
    Nav,
    Text,
} from 'grommet';

import {
    ContactInfo,
    Music,
    Workshop,
    Analytics,
    Book
} from 'grommet-icons';

import { Sidebar } from 'grommet';

const SidebarFooter = () => (
<Box align="center">
    <Avatar size="large" margin="small" src={photo}/>
</Box>
);

const SidebarHeader = () => (
<Box pad="small">
    <Text>Fourcade Antoine</Text>
</Box>
);

const iconsMap = color => [
    <Book color={color} />,
    <Analytics color={color} />,
    <Music color={color} />,
    <Workshop color={color} />,
    <ContactInfo color={color} />
];

const SidebarButton = ({ iconName, index }) => {
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
            hoverIndicator={tooltipColor}
            plain
        >
            {({ hover }) => (
            <Box pad={{ vertical: 'small' }} align="center">
                {iconsMap(hover ? 'black' : 'white')[index]}
            </Box>
            )}
        </Button>
        {ref.current && over && (
            <Drop align={{ left: 'right' }} target={ref.current} plain>
            <Box
                animation="slideRight"
                margin="xsmall"
                pad="small"
                background={tooltipColor}
                round={{ size: 'medium', corner: 'right' }}
            >
                {iconName}
            </Box>
            </Drop>
        )}
        </Box>
    );
};

const Navbar = () => (
    <Grommet theme={grommet} full>
        <Box direction="row" height={{ min: '100%' }}>
        <Sidebar
            overflow="auto"
            background="brand"
            header={<SidebarHeader />}
            footer={<SidebarFooter />}
            pad="none"
        >
            <Nav>
            {['Diplômes', 'Compétences', "Centres d'intérêt", "Expériences professionnelles", "Informations supplémentaires"].map((iconName, index) => (
                <SidebarButton key={iconName} iconName={iconName} index={index} />
            ))}
            </Nav>
        </Sidebar>
        </Box>
    </Grommet>
);

export default Navbar
//storiesOf('Sidebar', module).add('Tooltips', () => <TooltipsSidebar />);