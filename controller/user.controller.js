const User = require("../model/user.model")
const crypto = require("crypto-js")
const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        user ? user.password === crypto.SHA256(req.body.password).toString() ? res.json({ message: "Login Success", email: res.body.email, status: 200 }) : res.json({ message: "Password Incorrect", status: 400 }) : res.json({ message: "User doesn't Exist", status: 400 })
    }
    catch (e) {
        console.log(e)
        res.json({ status: 400, error: e, message: "Unexpected error occurred" })
    }
}
const registerUser = async (req, res) => {
    try {
        const user = new User({
            userId: crypto.SHA256(req.body.email).toString(),
            email: req.body.email,
            password: crypto.SHA256(req.body.password).toString(),
        })
        await user.save()
        res.json({ message: "Registered Successfully", status: 200 })
    }
    catch (e) {
        e.message.includes("duplicate key error") ? res.json({ status: 400, message: "User already Exist" }) : res.json({ status: 400, error: e, message: "Unexpected error occurred" })
    }
}
module.exports = { loginUser, registerUser }