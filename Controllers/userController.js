const users = require('../Models/userModel');
// import jsonwebtoken module
const jwt = require('jsonwebtoken');


// register
exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("Inside register controller", username, email, password);
        const existingUSer = await users.findOne({ email: email });
        if (existingUSer) {
            res.status(406).json("Account already exists")
        }
        else {
            const newUser = new users({
                username: username,
                email: email,
                password: password
            })
            await newUser.save();
            res.status(201).json("Successfully created")
        }


    }
    catch (err) {
        res.status(401).json(err)
    }
}

// 
exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUSer = await users.findOne({ email: email, password: password })
        if (existingUSer) {
            const token = jwt.sign({ userId: existingUSer._id }, process.env.JWTSECRET);
            console.log(token);
            res.status(200).json(
                { existingUSer, token }
            )
        }
        else {
            res.status(401).json("Invalid email or password")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
