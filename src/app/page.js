import React from 'react'
import Carousel from './Carousel'
import SchoolCard from './SchoolCard'

const page = () => {
  return (
    <div>
      <Carousel/>
      <SchoolCard Title={'Play School'}/>
      <SchoolCard Title={'Inter Colleges'}/>
      <SchoolCard Title={'Degree Colleges'}/>
    </div>
  )
}

export default page

