'use client'
import React, { useState } from 'react'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Schoolfrom from '@/components/Schoolfrom'
import Collegeform from '@/components/Collegeform'
import InterCollegeForm from '@/components/InterCollegeForm'



const Formpage = () => {

    const [formModel, setFormModel] = useState({
        school: true,
        inter: false,
        degree: false,
    })
    const handleOnClick = (e) => {

        if (e.target.value === 'school') {
            setFormModel({ [e.target.value]: true, [formModel.inter]: false, [formModel.degree]: false })
        }
        if (e.target.value === 'inter') {
            setFormModel({ [e.target.value]: true, [formModel.school]: false, [formModel.degree]: false })
        }
        if (e.target.value === 'degree') {
            setFormModel({ [e.target.value]: true, [formModel.inter]: false, [formModel.school]: false })
        }


    }
    return (

        <div className='max-w-[1200px] flex justify-center items-center p-5 mx-auto'>
            <div className='border p-5 max-w-[100%]  '>
                <div className='w-2xl   flex justify-between flex-col sm:flex-row'>
                    <div className='font-medium'> <input type='radio' className='mr-2' name='schoolForm' value='school' onClick={(e) => { handleOnClick(e) }} id='school'  defaultChecked/><label htmlFor='school'>School</label></div>
                    <div className='font-medium' > <input type='radio' className='mr-2' name='schoolForm' value='inter' onClick={(e) => { handleOnClick(e) }} id='inter' /><label htmlFor='inter'>Inter College</label></div>
                    <div className='font-medium' > <input type='radio' className='mr-2' name='schoolForm' value='degree' onClick={(e) => { handleOnClick(e) }} id='degree' /><label htmlFor='degree'>degree College</label></div>
                </div>
                {formModel.school && <Schoolfrom />}
                {formModel.inter && <InterCollegeForm />}
                {formModel.degree && <Collegeform />}
            </div>
        </div>
    )
}

export default Formpage;
