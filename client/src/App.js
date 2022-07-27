import './App.css';
import { Box,Typography,styled } from '@mui/material';
//All the components are imported here
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';


const Container = styled(Box)`
  width: 60%;
  margin: auto;
`;

function App() {
  return (
   <Box>
      <Header/>
      <Container>
      <InfoHeader/>
      <Articles/>
      </Container>
      
    </Box>
  );
}

export default App;
