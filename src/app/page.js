import React from 'react'
import Carousel from './Carousel'
import SchoolCard from './SchoolCard'

const page = () => {
  return (
    <>
      <Carousel/>
      <SchoolCard Title={'Play School'}/>
      <SchoolCard Title={'Inter Colleges'}/>
      <SchoolCard Title={'Degree Colleges'}/>
    </>
  )
}

export default page

