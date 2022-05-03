const express = require('express')
const userReg = require("../Model/RegisterModel")
const emailValidator = require('deep-email-validator');
// const DOMAIN = 'sandbox68a4decd2d964bcf99dda6e58b27ed25.mailgun.org';

// const formData = require('form-data');
// const Mailgun = require('mailgun.js');

// const mailgun = new Mailgun(formData);

// const client = mailgun.client({ username: 'codelab', key: 'af9687e997a4f1556979cf97680f7dc4-2ac825a1-f6de1a17' || '' });
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