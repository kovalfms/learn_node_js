import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-router.js";

const app = express();
const PORT = process.env.PORT || 3000
const DB_URL = 'mongodb+srv://admin:root@users.6ssp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(express.json());
app.use('/api', userRouter)


async function start() {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`Server start on ${PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}
start()