const mongoose = require("mongoose");

const mySchema = mongoose.Schema({

	Report : {
		type : String
	},
	title: {
		type: String,
		
	},
	description: {
		type: String,
	
	},
	subContent: {
		type: String,
	
	},
	FirstForm: {
		type: String,
	
	},
	secondForm: {
		type: String,
	
	},



}, {timestamps : true});

module.exports = mongoose.model("templates", mySchema);