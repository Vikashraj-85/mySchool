import dbConnect from "@/app/lib/dbConnect"
import User from '@/models/user/user.js'

dbConnect();
export async function POST(request){

    const {username,password}= await request.json();
    console.log("my data",username,password)
    let user={
        username:username,password:password,
    }
    let newUser= new User(user);
    await newUser.save();
    return Response.json({message:'datasend',user})
}