import React from 'react'
import { Box,Typography,styled } from '@mui/material'


const Container = styled(Box)`
    background-color: #ffa3f9;
    color: #fff;
    display: flex;
    align-items: center;
`;

const Text = styled(Typography)`
   font-weight: bold;
   margin-left: 7px;


`;

const InfoHeader = () => {
  return (
    <Container>
        <Text>
        PocketNews - All the news you need and more!
        </Text>
    </Container>
  )
}

export default InfoHeader