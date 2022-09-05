function logger(req, rers, next){
    console.log(`${req.method} ${req.originalurl} ${req.statusCode}`);

    next();
}
module.exports=logger