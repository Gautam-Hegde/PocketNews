import { Card, CardContent,Grid ,Typography,styled} from "@mui/material";



const Image=styled('img')({

    height:268,
    width:'88%',
    objectFit:'cover',//maintain aspect ratio
    borderRadius:4,
});

const Componenet=styled(Card)`
margin-bottom:20px;
box-shadow : 0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%);
`;

const Container=styled(CardContent)`
padding:8px;
padding-bottom:4px !important;
`;

const Text=styled(Typography)`
font-weight:600;
font-size:22px;
line-height:27px;
`;
const Text1=styled(Typography)`
font-weight:200;
font-size:12px;
line-height:27px;
`;


const Article =({data})=>{

//responvie grids mui
    return(
       <Componenet>
        <Container>
            <Grid container>
                <Grid lg={5} sm={5} xs={12} item>
                    <Image src={data.url}/>
                </Grid>
                <Grid lg={7} md={7} sm={7} xs={12} item>
                    <Text>{data.title}</Text>
                    <Text1>
                        <i>Pocket by {data.author}</i>
                    </Text1>
                </Grid>
            </Grid>
           
        </Container>
       </Componenet>
    )
}
export default Article;