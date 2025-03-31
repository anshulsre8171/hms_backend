import express from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(express.json());


const PORT = process?.env?.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Hi your server is running on ${PORT} port`); 
})
