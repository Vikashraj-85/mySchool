import dbConnect from "@/app/lib/dbConnect";
import School from '@/models/school/school'
dbConnect();
export async function POST(req) {
    try {
        const { name, principal, address, description, thumbnailImg ,age} = await req.json();
        
          
        let myschool =  {
            name:name,
            principal:principal,
            address:address,
            description:description,
            thumbnailImg:thumbnailImg,
            age:age,
        }
        console.log(myschool)
        let newschool=new School(myschool)
        await newschool.save();
        return Response.json({ message: 'school saved successfully', newschool })
    } catch (err) {
        console.log("error", err)
    }
}

export async function GET(req) {
            let allSchool= await School.find({})
            console.log(allSchool);
            return Response.json({message:'find all school',allSchool})
}

// export async function GET(req) {
//     const fakeSchools = [
//         {
//           name: "Green Valley High School",
//           principal: "Mr. John Smith",
//           address: "123 Forest Lane, Springfield",
//           description: "A prestigious school known for academic excellence.",
//           thumbnailImg: "https://images.unsplash.com/photo-1549404055-6d9a16e0a6ea", // Working image
//           age: 25,
//         },
//         {
//           name: "Sunrise Public School",
//           principal: "Ms. Olivia Johnson",
//           address: "45 Sunrise Street, Austin",
//           description: "Empowering young minds for a brighter future.",
//           thumbnailImg: "https://images.unsplash.com/photo-1576676971479-9d85a8d544c1", // Working image
//           age: 18,
//         },
//         {
//           name: "Riverdale Academy",
//           principal: "Mr. Liam Brown",
//           address: "99 River Road, Rivertown",
//           description: "Leading the way in education and innovation.",
//           thumbnailImg: "https://images.unsplash.com/photo-1556761177-b9b3a1b2ef89", // Working image
//           age: 30,
//         },
//         {
//           name: "Hillside International School",
//           principal: "Ms. Sophia Davis",
//           address: "7 Hillside Ave, San Francisco",
//           description: "Nurturing global citizens with quality education.",
//           thumbnailImg: "https://images.unsplash.com/photo-1579533747685-3e43114c04f6", // Working image
//           age: 15,
//         },
//         {
//           name: "Bright Future Academy",
//           principal: "Mr. Noah Wilson",
//           address: "120 Beacon Street, Boston",
//           description: "Creating leaders of tomorrow.",
//           thumbnailImg: "https://images.unsplash.com/photo-1606656715391-7a251acbe4b4", // Working image
//           age: 22,
//         },
//         {
//           name: "Maple Leaf High School",
//           principal: "Ms. Emma Martinez",
//           address: "321 Maple Avenue, Toronto",
//           description: "Building strong foundations for future success.",
//           thumbnailImg: "https://images.unsplash.com/photo-1570166545133-f2c4a06ad3b9", // Working image
//           age: 28,
//         },
//         {
//           name: "Everest Public School",
//           principal: "Mr. Oliver Anderson",
//           address: "88 Summit Lane, Denver",
//           description: "Climbing to excellence together.",
//           thumbnailImg: "https://images.unsplash.com/photo-1598361134029-cf5516ff01c1", // Working image
//           age: 20,
//         },
//         {
//           name: "Ocean Breeze Academy",
//           principal: "Ms. Ava Thomas",
//           address: "5 Seaside Blvd, Miami",
//           description: "Where learning meets inspiration by the sea.",
//           thumbnailImg: "https://images.unsplash.com/photo-1506972014441-42a6c5c75e5f", // Working image
//           age: 16,
//         },
//         {
//           name: "Silver Oaks School",
//           principal: "Mr. William Garcia",
//           address: "77 Oak Drive, Portland",
//           description: "Rooted in tradition, growing towards the future.",
//           thumbnailImg: "https://images.unsplash.com/photo-1581572225100-4788ecfa5571", // Working image
//           age: 24,
//         },
//         {
//           name: "Golden Horizon Academy",
//           principal: "Ms. Isabella Lee",
//           address: "65 Horizon Lane, Los Angeles",
//           description: "Expanding young minds to limitless horizons.",
//           thumbnailImg: "https://images.unsplash.com/photo-1560253970-bc6c4a944db2", // Working image
//           age: 19,
//         }
//       ];
      
//     let newschool=await School.insertMany(fakeSchools)
//     return Response.json({message:' all school added',newschool})
// }
