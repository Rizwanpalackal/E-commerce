const connectDatabase = require('./DB/Database');
const app = require('./utils/app')


process.on('uncaughtException' , (err)=>{
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server for handling uncaught exception");

});
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}
//connect DB

connectDatabase();
// create server

const server = app.listen(process.env.PORT,
    ()=>{
        console.log(`server is running on http://localhost:${process.env.PORT}`);
    });

    //unhandled promise rejection 

    process.on('unHandledRejection', (err)=>{
         console.log(`shutting down the server for:${err.message}`);
         console.log('shutting down for unhandled promise rejection');

         server.close(()=>{
            process.exit(1);
         })
    });

