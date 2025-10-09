import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

// function connectDB() {}

// connectDB()

//IIFE , semicolon before it is must

/* 

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", ( ) => {
            console.log("ERRR: ",error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        });
            
        
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
        
        
    }
})() 
*/
connectDB();