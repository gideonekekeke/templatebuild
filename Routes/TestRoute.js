const express = require("express");
const router = express.Router();
const tes = require("../Model/TestModel");

//getting all the files
router.get("/testing", async (req, res) => {
	const AllData = await tes.find();
	try {
		res.status(200).json({
			message: "Succefull 💻 ",
			data: AllData,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: AllData,
		});
	}
});

//getting a files by id
router.get("/testing/:id", async (req, res) => {
	const gettingId = await tes.findById(req.params.id);
	try {
		res.status(200).json({
			message: "Succefull 💻",
			data: gettingId,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: gettingId,
		});
	}
});

router.post("/testing", async (req, res) => {
	const SendingData = await tes.create({
		userName: req.body.userName,
		desc: req.body.desc,
	});
	try {
		res.status(200).json({
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


module.exports = router;