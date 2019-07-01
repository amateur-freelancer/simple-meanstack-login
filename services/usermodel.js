const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    useremail: { type: String, requierd: true },
    hash: { type: String, required: true }
})
module.exports = User = mongoose.model('users', UserSchema);