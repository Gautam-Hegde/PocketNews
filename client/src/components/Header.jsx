import React from 'react'
import {AppBar, Toolbar} from '@mui/material'
import { styled } from '@mui/material/styles';
import {Menu} from '@mui/icons-material';

//using styled component to style the header from mui
const StyledHeader = styled(AppBar)`
    background-color: #fafAf7;
    height: 70px;
    `;
const StyledMenu = styled(Menu)`
    color: #000;
    `;

//styled component cant be used directly with html <say for img tag>
//so we enclose as string and make an object

const Image= styled('img')({
    height: '60px',
    margin:'auto',

});

const Header = () => {

//<a href="https://www.flaticon.com/free-icons/news" title="news icons">News icons created by Mehwish - Flaticon</a>
const url="https://user-images.githubusercontent.com/85569489/181305542-6e0fc800-7f37-4f74-b42a-5171def5fbad.png";

return (
    <StyledHeader position='static'>
         <Toolbar> 
            <StyledMenu/>
            
            <Image src={url} alt="logo" />
        </Toolbar>
    </StyledHeader>
  )
}

export default Header