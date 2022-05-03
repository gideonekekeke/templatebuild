const express = require('express')
const userReg = require("../Model/SecondModel")
const emailValidator = require('deep-email-validator');
const router = express.Router()
async function isEmailValid(email) {
  return emailValidator.validate(email)
}

router.post("/register", async (req, res) => {
try{
	const {email, phonenumber, fullname, password} = req.body
 const {valid, reason, validators} = await isEmailValid(email);
  if (valid){
   	const checkEmail = await userReg.findOne({email : email})
	if(checkEmail){
		return res.status(400).json({message : 'Email already exist'})
	}
	const SendingData = await userReg.create({
		fullname,
		email,
		phonenumber,
		password
	});

		res.status(201).json({
			message: "Succefull 💻",
			data: SendingData,
		});

  }else if(!valid){
	  return res.status(400).send({message : 'email is not a valid one'})
  }
	//  const validationRes = await client.validate.get(email);
    // console.log('validationRes', validationRes);



	
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: SendingData,
		});
	}
});
router.get("/regUser", async (req, res) => {
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