import dbConnect from "@/app/lib/dbConnect"

dbConnect();
export async function GET(){
    return Response.json({message:'login/logout'})
}