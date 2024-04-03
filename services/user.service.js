
const user = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userCreate = (reqBody) => {
    try{
        const createUser = user.create({
            name: reqBody.name,
            mobile: reqBody.mobile,
            role: reqBody.role,
            password: bcrypt.hashSync(reqBody.password, 10)
        });
        return createUser;
    }catch(err){
        console.log(err);
        return err;
    }
}


const loginDetails = async(req) => {
    try{
        // console.log(reqBody, "reqBody");
        // const loginData = await user.find({
        //     mobile: reqBody.mobile
        // });

        // console.log(loginData[0].password, "loginData");
        // // console.log(loginData.password, "password");
        // if(!loginData){
        //     throw new Error("user not found");
        // }

        // const compare = bcrypt.compareSync(loginData[0].password, reqBody.password);
        // console.log(compare, "compare");
        // if(!compare == false){
        //     throw new Error("password does not match");
        // }

        // const token = jwt.sign({
        //     id: compare.id,
        // }, "hj788n8@#$kl");

        // console.log(
        //     token, "token"
        // );
        // return token;
        const loginData = await user.findOne({
            mobile: req.body.mobile 
        });
        if(!loginData){
            res.status(httpStatus.BAD_REQUEST).json({
                message: "login data not fond",
            });
        }
        console.log(loginData.password, "old");
        console.log(req.body.password, "new");
        var password = bcrypt.compare(loginData.password, req.body.password);

        console.log(password, "password");
        if(!password){
            console.log("header");
            res.status(httpStatus.BAD_REQUEST).json({
                message:"Password does not match"
            })
        }
        console.log(loginData, "loginData");
        var token = jwt.sign({
            id: loginData._id
        },"$%^asdasJJJ%%SAJD&^*SaokmancdsakjnkAHDAHSD/sdjJHHSxsweEikdhnadbhnajbdwqhjgdqwuygiuY*We730E83Q0E0Q756787&^*W3e23e3", {
            expiresIn: 86400
        });
        console.log(token, "token");
        return token;
    }catch(err){
        console.log(err);
        return err;
    }
}
module.exports = { userCreate, loginDetails }