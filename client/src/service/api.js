//using axios to make http requests instea of fetch
import axios from 'axios';
//here only get is used as it is a get request from db also it is a async function

export const getNews= async()=>{
    const URL='https://localhost:8000';
    try {
       return await axios.get("${URL}/news");
    } catch (error) {
        console.log("error caught",error);
    }

}