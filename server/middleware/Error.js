module.exports = (err, req, res,next)=>{
     err.statusCode  = err.ststusCode || 500;
     err.message = err.message || `Internal server Error`

//Duplicate key error


if(err.code === 11000){
    const message = `Duplicate key ${object.keys(err.keyValue)} Entered`
    err= new ErrorHandler(message , 400);
}

//wrong JWT

if(err.name === "JsonWEbTokenError"){
    const message = "Your URL is Invalid";
    err = new ErrorHandler(message, 400);

}

//JWT expired

if(err.name === 'TokenExpiredError'){
    const message = "your URL is expired ";
    err  = new ErrorHandler(message, 400);

}

req.statue(err.statusCode).json ({
    success:false ,
    message: err.message,

});



};