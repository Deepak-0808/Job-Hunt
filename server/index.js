const express=require("express");
const app =express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/JobProfile");
const jobRoutes = require("./routes/Job");
const contactUsRoute= require("./routes/Contact")


const database = require("./config/database");
const cookieParser = require("cookie-parser");

// cors is used to intertain backend and frontend
const cors = require("cors");

const{cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const PORT= process.env.PORT||4000;

// database connect
database.connect();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"https://www.jobsmela.online",
        // origin:"http://localhost:3000",
        Credential:true,

    })
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/job",jobRoutes);
app.use("/api/v1/reach",contactUsRoute);
app.use("/api/v1/save",contactUsRoute);
app.use("/api/v1/user",contactUsRoute);

//deffault route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your server is up and running'
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})
