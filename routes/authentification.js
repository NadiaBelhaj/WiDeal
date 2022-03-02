const router = require('express').Router();
let Utilisateur = require('../models/Utilisateur');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");


router.route('/register').post( async (req, res) => {




        try {
            const name = req.body.name;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            const email = req.body.email;
            const phone=req.body.phone
//NEW
            const latitude=req.body.latitude
            const longitude=req.body.longitude
            const gendre=req.body.gendre
            const image=req.body.image;
            const nbcoins=0;
            const nbnft=0;
            const nbengagement=0;

            const error = {
                name:"",
                email:"",
                //
                phone:"",
                password:"",
                confirmPassword: "",
                //
                latitude:"",
                longitude:"",
                gendre:"",
                image:"",

                e:false
            };


            // validation


            if(name === ""){
                error.name="This field is required";
                error.e = true;
            }
            if(email === ""){
                error.email="This field is required";
                error.e = true;
            }

            //
            if(phone === ""){
                error.phone="This field is required";
                error.e = true;
            }

            //
            if(latitude === ""){
                error.classe="This field is required";
                error.e = true;
            }
            //
            if(longitude === ""){
                error.role="This field is required";
                error.e = true;
            }

            if(gendre === ""){
                error.role="This field is required";
                error.e = true;
            }

            if(password === ""){
                error.password="This field is required";
                error.e = true;
            }
               //
         if(image === ""){
                error.image="This field is required";
                error.e = true;
            }
            if(confirmPassword === ""){
                error.confirmPassword="This field is required";
                error.e = true;
            }

            if (password.length < 8){
                error.password = "Enter a password of at least 8 characters.";
                error.e = true;
            }

            if (password !== confirmPassword) {
                error.confirmPassword="Please enter the same password twice.";
                error.e=true;

            }
          

            try{
                const existingUser = await Utilisateur.findOne({email:email}, function (err, result) {
                    if (result){
                        error.email="This email is already used.";
                        error.e=true;
                        return res.status(400).json(error);
                    }
                });
              }
             catch(err){
                   console.log(err);
        }

            if (error.e)
                return res.status(400).json(error);


            //hash password
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);

            //save new user to db
            const newUser = await new Utilisateur({name, email, passwordHash,phone,latitude,longitude,gendre,image});
            const savedUser = await newUser.save();

            res.send("req.statusCode+");


        } catch (err) {
            console.error(err);
            res.status(500).send();
        }

    }
);


router.route('/login').post( async (req, res) => {
    try{

        const email = req.body.email;
        const passwordEntered = req.body.password;

        console.log(email)

        // validate

        if (!email || !passwordEntered)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        const existingUser = await Utilisateur.findOne({ email });
        if (!existingUser)
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        const passwordCorrect = await bcrypt.compare(
            passwordEntered,
            existingUser.passwordHash
        );
        if (!passwordCorrect) {
            console.log("hey");
            return res.status(401).json({ errorMessage: "Wrong email or password." });

        }
        require('dotenv').config();

        console.log(process.env.JWT_SECRET)
        //sign the token
        const token = jwt.sign(
            {
                user: existingUser._id,
            },
            process.env.JWT_SECRET
        );

        //send the token in a HTTP-only cookie
        res
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            }).send();

    }catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.route('/logout').get(auth, (req, res) => {
    //console.log("logging out");
    res
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: true,
            sameSite: "none",
        })
        .send();
    // console.log(req.cookies + " :: user logged out");

});

router.route('/loggedIn').get((req,res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (err) {
        res.json(false);
    }
});

router.route('/show').get( async (req, res,next) => {

    Utilisateur.find()
    .then(response => {

        res.json(
            response
        )
    })
 .catch(error=>{
     res.json({
        message:'an error Occured'
    })
 })   
});

module.exports = router;