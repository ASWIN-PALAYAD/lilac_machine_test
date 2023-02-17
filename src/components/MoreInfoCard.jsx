import React from 'react'
import Wrapper from '../assets/wrappers/MoreInfoCardWrapper'

const MoreInfoCard = ({ item }) => {
  return (
    <Wrapper>
        <div className="image">
          <img src={item.image} alt="" />
        </div>
    </Wrapper>
  )
}

export default MoreInfoCard