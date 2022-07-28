//using axios to make http requests instea of fetch
import axios from 'axios';
//here only get is used as it is a get request from db also it is a async function
//heroku setup pending
const URL='';
//use http://localhost:8000/ for local dev test
export const getNews= async()=>{
    
    try {
       return await axios.get(URL+'/news');
    } catch (error) {
        console.log("error caught",error);
    }

}