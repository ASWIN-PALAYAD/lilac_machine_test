import React from 'react'
import Wrapper from '../assets/wrappers/SliderWrapper'
import slider from '../assets/images/slider.png'

const Slider = () => {
  return (
    <Wrapper>
        <div className="Container">
            <div className="SliderImage">
                <img src={slider} alt="" />
            </div>
            
        </div>



    </Wrapper>
  )
}

export default Slider