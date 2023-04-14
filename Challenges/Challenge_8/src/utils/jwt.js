const jwt = require('jsonwebtoken');
//const { createHash } = require('./bcrypt');

//const RANDOM_PRIVATE_KEY = createHash('secretoConHashRandom');

const RANDOM_PRIVATE_KEY = 'secretRandom';

const generateToken = (user) => {
    const token = jwt.sign({ user }, RANDOM_PRIVATE_KEY);
    return token;
}

const authToken = (req, res, next) => {

    const token = req.signedCookies.sessionToken;

    //if(!token) return res.status(401).json({ error: 'Not authenticated' });
    if(!token) return res.status(401).render('login', { error: 'Not authenticated' });
    jwt.verify(token, RANDOM_PRIVATE_KEY, (error, credentials) => {
        //if(error) return res.status(403).json({ error: 'Not authorized' });
        if(error) return res.status(403).render('login', { error: 'Not authorized' });
        req.user = credentials.user;
        //Test
        //req.asd = JSON.stringify(credentials.user);
        //const asd = JSON.stringify(req.user);
        //console.log(`credentials: ${asd}`);
        next();
    })
}

module.exports = { generateToken, authToken };