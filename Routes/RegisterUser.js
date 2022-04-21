const express = require('express')
const userReg = require("../Model/RegisterModel")
const router = express.Router()
router.post("/register", async (req, res) => {
	const SendingData = await userReg.create({
		fullname: req.body.fullname,
		email: req.body.email,
		phonenumber: req.body.phonenumber,
		password: req.body.password,
         
	});
	try {
		res.status(201).json({
			message: "Succefull 💻",
			data: SendingData,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: SendingData,
		});
	}
});
router.get("/register", async (req, res) => {
	const SendingData = await userReg.find()
	try {
		res.status(201).json({
			message: "Succefull 💻",
			data: SendingData,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: SendingData,
		});
	}
});

module.exports = router