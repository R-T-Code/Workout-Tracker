const jwt = require('jsonwebtoken');

// middleware funcion
module.exports = (req,res,next) => {
    // get token from request headers
    if(!req.headers.authorization) return res.status(400).send('unauthorized');
    // if we do not return, we have 2 responses
    // error type will be can no set headers after they have been sent
    
    const token = req.headers.authorization.split(' ')[1];
    // verify token, if its invalid, it makes server error
    try{
        const user = jwt.verify(token, process.env.JWT_KEY);
        console.log(user);
        // req.user goes to next functions so we have access to req.user
        req.user=user;
        // if token is correct, call next function in router
        next()
    } catch(e){
        console.log(e)
        res.status(400).send('unauthorized');
    }
}