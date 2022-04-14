const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},

}, {timestamps : true});

module.exports = mongoose.model("templates", mySchema);