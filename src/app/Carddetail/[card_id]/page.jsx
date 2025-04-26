"use client"
import { use } from 'react'; 
import React,{useState,useEffect} from 'react'


// this is the card from {params.card_id}
const page = ({ params }) => {
  const resolvedParams = use(params); 
  const [school,setschool]=useState({
      name:'',
      principal:'',
      address:'',
      description:'',
      age:'',
      thumbnailImg:'',
   })   
         
           
       useEffect(() => {
           
           async function fetchdata() {
               const res = await fetch(`/api/schoolform/${resolvedParams.card_id}`);
               const data = await res.json();
               
               setschool(data.myschool);
              console.log(data)
              }
              fetchdata()
          },[])

  return (
    <>
      <div className='  w-[90%]  mx-auto ' >
        <div className='text-xl text-center my-5'>
          <h1 className='text-[#051923] text-3xl font-medium my-2'>Welcome TO  </h1>
          <p className='text-[#00a6fb] text-3xl font-medium my-2'>{school?.name} </p>
        </div>
      </div>
      <div className='  w-[90%]  mx-auto ' >

        <div>
          <h2 className='text-xl font-medium text-[#00a6fb] underline my-5 text-center sm:text-left '>Our School/College</h2>
        </div>
        <div className='grid gap-5  lg:grid-cols-3 sm:grid-cols-2 '>
          <div className=''>
            <img src={school?.thumbnailImg} alt="" className=' my-2 w-sm h-[251px] ' />
          </div>
          <div className=''>
            <img src={school?.thumbnailImg} alt="" className=' my-2 w-sm h-[251px] ' />
          </div>
          <div className=''>
            <img src={school?.thumbnailImg} alt="" className=' my-2 w-sm h-[251px] ' />
          </div> 

        </div>
      </div>
      <div className='  w-[90%]  mx-auto ' >

<div>
  <h2 className='text-xl font-medium text-[#00a6fb] underline my-5 text-center sm:text-left '>Our Staff</h2>
</div>
<div className='grid gap-5  lg:grid-cols-3 sm:grid-cols-2 '>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>

</div>
</div>
<div className='  w-[90%]  mx-auto ' >

<div>
  <h2 className='text-xl font-medium text-[#00a6fb] underline my-5 text-center sm:text-left '>Our Achievments</h2>
</div>
<div className='grid gap-5  lg:grid-cols-3 sm:grid-cols-2 '>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className=' my-2' />
  </div>

</div>
</div>
    
    </>
  )
}

export default page
