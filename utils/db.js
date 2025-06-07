let mongoose = require('mongoose')


 const connectDB = async(para)=>{
    await mongoose
    .connect(
       para
          )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(`MongoDB connection error: ${err.message}`));
}

module.exports = connectDB;