class ErrorHandler extends Error{
         constructor(message,statusCode){
            super(message);
            this.statusCode = statusCode;

          Error.captureStackTrace(this, this.constructor);// globel context of all error
    
         }
}
module.exports =ErrorHandler;

//this: the error object to which the stack trace should be captured

//this.constructor: the constructor function to omit from the stack trace 