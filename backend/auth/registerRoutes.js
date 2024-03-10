// require('dotenv').config()
// const nodemailer=require('nodemailer')
// const User=require('./model')
// const bcrypt=require('bcryptjs')
// const transporter=require('../transporter')

// module.exports=(app)=>{
//         var email;

//         //
//         var =Math.random();
//         =*10000;
//         =parseInt();
//         console.log()

//         //send  
//         app.post("/send",(req,res)=>{
//                 email=req.body.email;
//                 //console.log(req.body.roll)
//                 //console.log(req.body.email)
                
//                 var mailOptions={
//                     to:req.body.email,
//                     subject:" for registration : ",
//                     html:"<h3> for account verification is </h3>"+"<h1 style='font-weight:bold'>"++"</h1>"
//                 };
//                 //send 
//                 transporter.sendMail(mailOptions,(error,info)=>{
//                     if(error){
//                         return console.log(error);
//                     }
//                     console.log('Message sent : %s',info.messageId);
//                     console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
        
//                     res.send('  sent');
//                 })
                
//                res.send('sent')
//         })

//         //resend 
//         app.post("/resend",(req,res)=>{
    
//                 var mailOptions={
//                     to:email,
//                     subject:" for registration : ",
//                     html:"<h3> for account verification is </h3>"+"<h1 style='font-weight:bold'>"++"</h1>"
//                 };
//                 //resend 
//                 transporter.sendMail(mailOptions,(error,info)=>{
//                     if(error){
//                         return console.log(error);
//                     }
//                     console.log('Message sent : %s',info.messageId);
//                     console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
//                     return res.json({msg:" has been sent"});
//                 })
//         })
        
        
        
//         //register to ms-team
//         app.post('/api/auth/register',(req,res)=>{
//             //console.log(req.body)
//             const {name,email,password}=req.body

//             //check if all details are provided
//             if(!name||!email||!password)
//                 return res.status(404).json({msg:'Please enter all details ...'})
            
//             //verify 
//             if(req.body.==)
//             {
//                 console.log('matches');
//                 //find if user already registered
//                 User.findOne({email})
//                 .then(user=>{
//                     if(user)
//                     {
//                         return res.status(401).json({msg:'user already exist. You can login to proceed..'})
//                     }
//                     else
//                     {
//                         //check if username already taken
//                         //console.log(name)
//                         User.findOne({name})
//                             .then(username=>{
//                                 if(username)
//                                     return res.status(401).json({msg:'username already taken'})
//                                 else
//                                 {
//                                     const newUser=new User({
//                                         name,
//                                         email,
//                                         password
//                                     })
                
//                                     //hash password before storing
//                                     bcrypt.genSalt(10,(err,salt)=>{
//                                         bcrypt.hash(newUser.password,salt,(err,hash)=>{
//                                             if(err) throw err;
//                                             newUser.password=hash;
                
//                                             //save new user
//                                             newUser.save()
//                                                 .then(data=>{
//                                                     return res.json({
//                                                     user:{
//                                                         id:data.id,
//                                                         name:data.name,
//                                                         email:data.email
//                                                     }
//                                                     })                                                                                                   
//                                                 })
//                                                 .catch(err=>{
//                                                     return res.status(404).json(err)
//                                                 })
//                                         })
//                                     })
//                                 }
//                             })
                        

//                     }
//                 })
//                 .catch(err=>{
//                     return res.status(404).json(err)
//                 })
            
//             }
//             else
//             {
//                 console.log('not match')
//                 return res.status(400).json({msg:"incorrect "})
//             }

//         })        


        
// }

// require('dotenv').config()
// const nodemailer=require('nodemailer')
// const User=require('./model')
// const bcrypt=require('bcryptjs')
// // const transporter=require('../transporter')

// module.exports=(app)=>{


// app.post('/api/auth/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if all details are provided
//         if (!name || !email || !password) {
//             return res.status(400).json({ msg: 'Please enter all details' });
//         }

//         // Check if user already exists by email or name
//         const existingUser = await User.findOne({ $or: [{ email }, { name }] });
//         if (existingUser) {
//             if (existingUser.email === email) {
//                 return res.status(401).json({ msg: 'User already exists with this email. You can login to proceed.' });
//             } else {
//                 return res.status(401).json({ msg: 'Username already taken. Please choose another username.' });
//             }
//         }

//         // Hash password before storing
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword
//         });

//         // Save new user
//         const savedUser = await newUser.save();
//         return res.json({
//             user: {
//                 id: savedUser.id,
//                 name: savedUser.name,
//                 email: savedUser.email
//             }
//         });
//     } catch (error) {
//         // Handle duplicate key errors
//         if (error.code === 11000) {
//             if (error.keyPattern && error.keyPattern.email) {
//                 return res.status(400).json({ msg: 'User already exists with this email. You can login to proceed.' });
//             } else if (error.keyPattern && error.keyPattern.name) {
//                 return res.status(400).json({ msg: 'Username already taken. Please choose another username.' });
//             }
//         }
//         console.error('Error registering user:', error);
//         return res.status(500).json({ msg: 'Internal server error' });
//     }
// });
// }        

// **********************************************************************************************************

require('dotenv').config();
const User = require('./model');
const bcrypt = require('bcryptjs');

module.exports = (app) => {
    app.post('/api/auth/register', async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Check if all details are provided
            if (!name || !email || !password) {
                return res.status(400).json({ msg: 'Please enter all details' });
            }

            // Check if user already exists by email or name
            const existingUser = await User.findOne({ $or: [{ email }, { name }] });
            if (existingUser) {
                if (existingUser.email === email) {
                    return res.status(401).json({ msg: 'User already exists with this email. You can login to proceed.' });
                } else {
                    return res.status(401).json({ msg: 'Username already taken. Please choose another username.' });
                }
            }

            // Hash password before storing
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });

            // Save new user
            const savedUser = await newUser.save();
            return res.json({
                user: {
                    //id: savedUser.id,
                    name: savedUser.name,
                    email: savedUser.email
                }
            });
        } catch (error) {
            // Handle duplicate key errors
            if (error.code === 11000) {
                if (error.keyPattern && error.keyPattern.name) {
                    return res.status(400).json({ msg: 'Username is already in use. Please choose another username.' });
                } else if (error.keyPattern && error.keyPattern.email) {
                    return res.status(400).json({ msg: 'User already exists with this email. You can login to proceed.' });
                }
            }
            console.error('Error registering user:', error);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    });
};

