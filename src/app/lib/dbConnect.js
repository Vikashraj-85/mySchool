import mongoose from "mongoose";

import React from 'react'

const dbConnect =async () => {
   await  mongoose.connect('mongodb://127.0.0.1:27017/mySchool')
    .then(() => console.log('Connected!')).catch(err=>console.log('Connection failed!!!'))
}

export default dbConnect
