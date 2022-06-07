const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.send("Acess Denied Please Login ")
    }
    try{
        const secretKey = "qwertyuiop";
        const verify = jwt.verify(token,secretKey);
        req.user = verify;
        next();
    }
    catch{
        res.status(404).send("Invalid token ");
    }
}