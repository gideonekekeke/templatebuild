const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
    
	},
	phonenumber: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: String,
		default : 'bdm1'
	},

}, {timestamps : true});

module.exports = mongoose.model("user", mySchema);