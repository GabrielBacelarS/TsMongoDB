import mongoose from "mongoose";
import config from "config";

async function connect(){
     const dbUri = config.get<string>("dbUri");

     try {
        await mongoose.connect(dbUri)
        console.log("connected to db")
     }
     catch(err){
        console.log(`Error connecting: + ${err}`)
     }
}

export default connect;