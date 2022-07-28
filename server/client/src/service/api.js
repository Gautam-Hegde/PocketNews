//using axios to make http requests instea of fetch
import axios from 'axios';
//here only get is used as it is a get request from db also it is a async function
const URL='';
export const getNews= async()=>{
    
    try {
       return await axios.get(URL+'/news');
    } catch (error) {
        console.log("error caught",error);
    }

}