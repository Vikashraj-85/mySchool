import dbConnect from "@/app/lib/dbConnect";
import School from '@/models/school/school'
dbConnect();

export async function GET(req,{params}) {
    try {
        const {id} =params ;
        
        let myschool=await School.findById(id);

        console.log("yes",myschool)
          
       
       
        return Response.json({ message: 'school found successfully', myschool })
    } catch (err) {
        console.log("error", err)
    }
}


