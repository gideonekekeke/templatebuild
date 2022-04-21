const express = require("express");
const router = express.Router();
const temp = require("../Model/TemplateModel");

//getting all the files
router.get("/template", async (req, res) => {
	const AllData = await temp.find();
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
router.get("/template/:id", async (req, res) => {
	const gettingId = await temp.findById(req.params.id);
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

router.post("/template", async (req, res) => {
	const SendingData = await temp.create({
		Report: req.body.Report,
		title: req.body.title,
		description: req.body.description,
		subContent: req.body.subContent,
		FirstForm: req.body.FirstForm,
		secondForm: req.body.secondForm,

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

router.patch("/template/:id", async (req, res) => {
	try {
		const updated = await temp.findByIdAndUpdate(
			req.params.id,
			req.body,
		);
		res.status(200).json({
			message: "Succefull 💻",
			data: updated,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: updated,
		});
	}
});

router.delete("/template/:id", async (req, res) => {
	const deleteUser = await temp.deleteOne(
		{ username: req.params.id },
		req.body,
	);
	try {
		res.status(201).json({
			message: " Delected Succefully 💻",
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: deleteUser,
		});
	}
});

module.exports = router;