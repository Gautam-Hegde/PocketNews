import React from 'react'
import { Box,Typography,styled } from '@mui/material'


//handling s screen size theme (boom baam😂)
const Container = styled(Box)(({theme})=>({
    backgroundColor: "#ffa3f9",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    marginBottom: "30",
    // [theme.breakpoints.down('md')]: {
    //   display:'none'
    // }
}));

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