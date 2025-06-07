let express = require('express')
let Student  = require('../models/student')

let studentRoutes = express.Router()

// multer
let multer = require('multer')
//diskstorage
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// let upload = multer({storage: storage})

//buffer
let storage = multer.memoryStorage()
let upload = multer({ storage: storage})

studentRoutes.post('/create',upload.single("photo") ,async (req, res) => {
    try {
        console.log(req.file, req.body);
        
        let {name, age, email, address, phone} = req.body
        // diskstorage
        // let photopath = req.file ? req.file.filename : null

        // let newStudent =  new Student({
        //     name, age, email, address, phone, 
        //     photo :photopath
        // })

        // await newStudent.save()
        // res.status(201).json({student: newStudent, message: 'Student created successfully'})
       // diskstorage

        //buffer

        let photobase64 = req.file ? req.file.buffer.toString('base64') : null

        let newStudent =  new Student({
            name, 
            age, 
            email, 
            address, 
            phone, 
            photo : photobase64
        })

        await newStudent.save()
        res.status(201).json({student: newStudent, message: 'Student created successfully'})


    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server error'})
    }
})


module.exports = studentRoutes