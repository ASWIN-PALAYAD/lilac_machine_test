import React from 'react'
import Wrapper from '../assets/wrappers/CategoriesWrapper'

const categories = ['Book','Electronics','RealEstate','Cars-Bike','Dom-Furniture','Men','Women','Music','Hobies']

const Categories = () => {
  return (
    <Wrapper>
      {categories.map((item)=>(
        <div className='Category-name'>
          <p>{item}</p>
        </div>
      ))}
    </Wrapper>
  )
}

export default Categories