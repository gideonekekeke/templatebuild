const mongoose = require("mongoose");

const mySchema = mongoose.Schema({

	userName : {
		type : String
	},

    desc : {
        type : String
    }




}, {timestamps : true});

module.exports = mongoose.model("testMod", mySchema);