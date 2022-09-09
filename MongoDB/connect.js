import mongoose from 'mongoose';

const connection=function(req,res,next){
    mongoose.connect(process.env.Mongodburl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('success')).catch((err)=>console.log('error',err))
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
next()
}
export default connection