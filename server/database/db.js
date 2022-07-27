import mongoose from 'mongoose';




const Connection= async()=>{
    const URL=`mongodb://Gautam:geforcegtx1650ti@ac-1kvrpcu-shard-00-00.gulbrzn.mongodb.net:27017,ac-1kvrpcu-shard-00-01.gulbrzn.mongodb.net:27017,ac-1kvrpcu-shard-00-02.gulbrzn.mongodb.net:27017/?ssl=true&replicaSet=atlas-d9no94-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log('Connected to MongoDB');
    } catch (error) {
        console.log("Error connecting",error);
    }
        
    }
export default Connection;

