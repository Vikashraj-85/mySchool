import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const InterCollegeform = () => {
    const[formdata,setformdata]=useState({
        name:'',
        principal:'',
        address:'',
        description:'',
        thumnailImg:'',

    })
    const handleOnChange=(e)=>{
        setformdata({...formdata, [e.target.name]:e.target.value});
        
    }
    const handleOnSubmit=()=>{
        console.log(formdata);
        setformdata({});
    }
    return (
        <div className='my-5  py-5 '>
            <h1 className='text-center text-3xl font-medium mt-2 mb-7 underline text-[#00A6FB]'>Place Your Inter College</h1>
            <div className='mb-5'>
                <label htmlFor="name" className="block text-xl font-medium text-gray-900">
                    Your College Name
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#00a6fb]">
                        <input
                            onChange={(e)=>{handleOnChange(e)}}
                            value={formdata.name}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Your School Name"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <label htmlFor="pricipal" className="block text-xl font-medium text-gray-900">
                    Your Pricipal Name
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#00A6FB]">
                        <input
                            onChange={(e)=>{handleOnChange(e)}}
                            value={formdata.principal}
                            id="pricipal"
                            name="principal"
                            type="text"
                            placeholder="Enter Your School Name"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div className='mb-5 '>
                <label htmlFor="address" className="block text-xl font-medium text-gray-900">
                    Your College Address
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#00A6FB] ">
                        <input
                            onChange={(e)=>{handleOnChange(e)}}
                            value={formdata.address}
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Enter Your School Name"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="about" className="block text-xl font-medium text-gray-900">
                   About Your College
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 border-[#00a6fb] ">
                        <textarea
                            onChange={(e)=>{handleOnChange(e)}}
                            id="about"
                            name="description"
                            type="text"
                            value={formdata.description}
                            placeholder="give a description about your school"
                            className="block  outline-[#00a6fb] border border-gray-300 rounded-md  grow py-1.5 pr-3 pl-1 text-base  placeholder:text-gray-400  sm:text-sm/6"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className='mb-5 mt-5'>
                <label htmlFor="img" className="block text-xl font-medium text-gray-900">
                   Add Your College Image
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#00A6FB] ">
                        <input
                            onChange={(e)=>{handleOnChange(e)}}
                            id="img"
                            name="thumnailImg"
                            type="file"
                            value={formdata.thumnailImg}
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            
            <div className=''> 
                <button className='bg-[#00a6fb] px-10 py-2 text-xl rounded-md text-white w-full sm:w-50 hover:bg-[#7fb3dd]' onClick={handleOnSubmit}>Place</button>
            </div>
        </div>

    )
}

export default InterCollegeform;

