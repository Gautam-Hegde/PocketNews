
import { data } from "./constants/data.js";
//validating daataaaaa!
import News from "./model/newSchema.js";
const DefaultData= async ()=>{

try {
    
    await News.insertMany(data);
    console.log("data inserted");
} catch (error) {
    console.log("error",error);
}
    
}

export default DefaultData;