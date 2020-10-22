import React from 'react'

import { 
    Box,
    Text,
    Anchor,
    Heading
} from "grommet";

import infos from '../../app/data/infos.json'
import styled from 'styled-components';

const StyledAnchor = styled(Anchor)`
    font-weight: 200;
`;

const FooterAnchor = ({ ...rest }) => (
    <StyledAnchor href="/" size="small" color="white" {...rest} />
);

const FooterContent = () => {
    return infos.map((value) => (
        <Box gap="medium" justify="between" key={value.label}>
            <Text weight="bold" size="small">
                {value.label}
            </Text>
            <Box>                
                <FooterAnchor>{value.data}</FooterAnchor>
            </Box>
        </Box>
    ));
};

const Infos = () => (
    <Box fill background="brand" align="center">
        <Heading >Informations supplémentaires</Heading>
        <Box fill direction="row-responsive" pad="large" justify="between">            
            <FooterContent />
        </Box>
    </Box>
)

export default Infos