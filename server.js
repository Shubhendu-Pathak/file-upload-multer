let express = require('express')
let {config} = require('dotenv')
const connectDB = require('./utils/db')
const studentRoutes = require('./routes/studentRoutes')

config()

//connect databese
connectDB(process.env.DB_URL)

const app = express()
app.use(express.json())

//routes
app.use('/student', studentRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
