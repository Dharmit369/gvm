const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyToken = (req, res, next) => {
    console.log(req.headers.authorization, "jkll");
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], "$%^asdasJJJ%%SAJD&^*SaokmancdsakjnkAHDAHSD/sdjJHHSxsweEikdhnadbhnajbdwqhjgdqwuygiuY*We730E83Q0E0Q756787&^*W3e23e3", function (err, decode) {
        console.log(err, "error");
        console.log(decode, "decode");
        if (err) {
            req.user = undefined;
            next(err); 
        } else {
            User.findOne({
                _id: decode.id
            }).then(user => {
                req.user = user;
                if(req.user.role == "admin"){
                    next(); 
                }
            }).catch(err => {
                res.status(500).send({ message: err });
            });
        }
        });
  } else {
    req.user = undefined;
    next();
  }
};

module.exports = verifyToken;