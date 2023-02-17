import React from 'react'
import Wrapper from '../assets/wrappers/MoreInfoWrapper'

import handJoin from '../../src/assets/images/handJoin.png'
import paperBag from '../../src/assets/images/paperBag.png'
import lense from '../../src/assets/images/lense.png';
import box from '../../src/assets/images/box.png'
import MoreInfoCard from './MoreInfoCard'; 



const moreInfo = [
    {
        title:'Explore classifieds',
        data:'Over 5000 + Products',
        image:lense

    },
     {
        title:'Add classifieds',
         data:'ads, event ads service requests etc',
         image:box
     },
     {
         title:'Explore Products',
         data:'Over 25000 + Products',
         image:paperBag
     },
     {
         title:'Partner With us',
          data:'Sell your products',
        image:handJoin
     }

]


const MoreInfo = () => {
  return (
    <Wrapper>

       <div className='Container'>
            <div className='main_container'>
                <div className='Product'>
                    {moreInfo.map(item=>(
                        <MoreInfoCard item={item} />
                    ))}
                </div >
            </div >
       </div >
    </Wrapper>
  )
}

export default MoreInfo