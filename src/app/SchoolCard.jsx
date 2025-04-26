"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fullscreen } from '@mui/icons-material'


const SchoolCard = ({Title}) => {

     const [school,setschool]=useState([])   
       
         
     useEffect(() => {
         
         async function fetchdata() {
             const res = await fetch('/api/schoolform');
             const data = await res.json();
             
             setschool(data.allSchool);
            }
            fetchdata()
        },[])
        
    return (
        <div className=' md:px-15 px-5 '>
            <h1  className='text-2xl font-medium py-2 my-3 md:text-left text-center border-b text-[#006afb]'><Link href={'/'}>{Title}</Link> </h1>

            <div className=' grid lg:grid-cols-4 sm:grid-cols-2  gap-3'>
                {
                    school.map((item,index)=>{
                        
                        return(
                            <Link href={`/Carddetail/${item?._id}`} key={index}>
                    <div className='my-5 shadow-xl/30 rounded-sm p-2    '>
                        <div className='overflow-hidden rounded-xl'>
                            <img src={item?.thumbnailImg} alt='not found' className='h-48 w-96 object-cover rounded-xl mt-2 shadow-xl/20 hover:scale-125 duration-1000' />
                        </div>
                        <div>
                            <h2 className='text-xl font-medium my-5 '>{item.name}</h2>
                            <p className='font-medium text-lg text-gray-450 mb-4'>{item?.description} </p>
                            <p className='font-medium'>{item?.address} </p>
                        </div>
                    </div>
                </Link>
                        )
                    })
                }
                         
            </div>
        </div>
    )
}

export default SchoolCard
