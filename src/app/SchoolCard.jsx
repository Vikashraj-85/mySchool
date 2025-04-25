import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Fullscreen } from '@mui/icons-material'


const SchoolCard = ({Title}) => {
    return (
        <div className=' md:px-15 px-5 '>
            <h1  className='text-2xl font-medium py-2 my-3 md:text-left text-center border-b text-[#006afb]'><Link href={'/'}>{Title}</Link> </h1>
            <div className=' grid lg:grid-cols-4 sm:grid-cols-2  gap-3'>
                <Link href={'#'}>
                    <div className='my-5 shadow-xl/30 rounded-sm p-2    '>
                        <div className='overflow-hidden rounded-xl'>
                            <img src='https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='not found' className='h-48 w-96 object-cover rounded-xl mt-2 shadow-xl/20 hover:scale-125 duration-1000' />
                        </div>
                        <div>
                            <h2 className='text-xl font-medium my-5 '>Title hii hlo bye</h2>
                            <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officiis consequatur error sed temporibus autem </p>
                        </div>
                    </div>
                </Link>
                <Link href={'#'}>
                    <div className='my-5 shadow-xl/30 rounded-sm p-2    '>
                        <div className='overflow-hidden rounded-xl'>
                            <img src='https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='not found' className='h-48 w-96 object-cover rounded-xl mt-2 shadow-xl/20 hover:scale-125 duration-1000' />
                        </div>
                        <div>
                            <h2 className='text-xl font-medium my-5 '>Title hii hlo bye</h2>
                            <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officiis consequatur error sed temporibus autem </p>
                        </div>
                    </div>
                </Link>
                <Link href={'#'}>
                    <div className='my-5 shadow-xl/30 rounded-sm p-2    '>
                        <div className='overflow-hidden rounded-xl'>
                            <img src='https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='not found' className='h-48 w-96 object-cover rounded-xl mt-2 shadow-xl/20 hover:scale-125 duration-1000' />
                        </div>
                        <div>
                            <h2 className='text-xl font-medium my-5 '>Title hii hlo bye</h2>
                            <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officiis consequatur error sed temporibus autem </p>
                        </div>
                    </div>
                </Link>
                <Link href={'#'}>
                    <div className='my-5 shadow-xl/30 rounded-sm p-2    '>
                        <div className='overflow-hidden rounded-xl'>
                            <img src='https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='not found' className='h-48 w-96 object-cover rounded-xl mt-2 shadow-xl/20 hover:scale-125 duration-1000' />
                        </div>
                        <div>
                            <h2 className='text-xl font-medium my-5 '>Title hii hlo bye</h2>
                            <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officiis consequatur error sed temporibus autem </p>
                        </div>
                    </div>
                </Link>

                {/* <Link href={'/schoolCard/card-1'}>card-1</Link>
          <Link href={'/schoolCard/card-2'}>card-2</Link>
          <Link href={'/schoolCard/card-3'}>card-3</Link> */}
            </div>
        </div>
    )
}

export default SchoolCard
