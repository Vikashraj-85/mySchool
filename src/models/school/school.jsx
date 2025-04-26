 
import mongoose from "mongoose";

 const schoolSchema= new mongoose.Schema({
    name:String,
    principal:String,
    address:String,
    description:String,
    thumbnailImg:{
      type:String,
      default:"https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
    age:Number,
   
 })

 export default mongoose.models.Schol || mongoose.model('Schol',schoolSchema);