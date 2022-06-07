const get = (req,res)=>{
    res.status(200).send("SuccessFully Logout");
}

module.exports = {
    userLogoutGet : get,
}