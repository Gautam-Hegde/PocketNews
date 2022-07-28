import React from 'react'
import { Box,Typography,styled } from '@mui/material'


const Container = styled(Box)`
    background-color: #ffa3f9;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const Text = styled(Typography)`
   font-weight: bold;
   margin:auto;


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