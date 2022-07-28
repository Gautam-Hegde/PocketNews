import './App.css';
import { Box,Typography,styled } from '@mui/material';
//All the components are imported here
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';


const Container = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "auto",
  [theme.breakpoints.down('md')]: {
    width: "75%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "85%",
  }
}));

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
