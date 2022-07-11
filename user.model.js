const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
})
const User = mongoose.model("users", userSchema)

module.exports = User