const userService = require("../services/user.service");


const createUser = async(req,res) => {
    try{
        console.log(req.body);
        const reqBody = req.body;
        console.log(reqBody);
        const userCreation = await userService.userCreate(reqBody);
        res.status(200).json({
            message: "user creation successfully",
            data:userCreation
        });
    }catch(err){
        console.log("err");
        return err;
    }
}


const loginData = async(req, res) => {
    try{
        const reqBody = req;
        const loginDetails = await userService.loginDetails(reqBody);
        console.log(loginDetails);
        res.status(200).json({
            message: "user login successfully",
            accessToken:loginDetails
        });
    }catch(err){
        console.log(err);
        return err;
    }
}
module.exports = { createUser, loginData }