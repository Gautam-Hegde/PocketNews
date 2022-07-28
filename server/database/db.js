import mongoose from 'mongoose';




const Connection= async(URL)=>{
    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log('Connected to MongoDB');
    } catch (error) {
        console.log("Error connecting",error);
    }
        
    }
export default Connection;

