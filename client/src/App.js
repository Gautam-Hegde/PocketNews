import './App.css';
import { Box,Typography,styled } from '@mui/material';
//All the components are imported here
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';



const Container = styled(Box)`
  width: 30%;
  margin: auto;
`;

function App() {
  return (
   <Box>
      <Header/>
      <Container>
      <InfoHeader/>
      </Container>
      
    </Box>
  );
}

export default App;
