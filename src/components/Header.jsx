import React from 'react'
import Wrapper from '../assets/wrappers/HeaderWrapper'



const Header = () => {
  return (
    <Wrapper>
      <div className="container">

        <div className="container-left">
            <div className='items'>
                <i class="ri-phone-line"></i>
                <p> +221 33 66 22</p>
            </div>
            <div className='items'>
                <i class="ri-mail-line"></i>
                <p>support@elextra.io</p>
            </div>
        </div>

        <div className="container-right">
             <div className='items'>
                 <i class="ri-map-pin-2-line"></i>
                 <p>Locations</p>
             </div>
             <div className="items">
                <h3>|</h3>
             </div>
            <div className='items'>
                <select className='' name="" id="">
                    <option  value="">$ Dollar (US)</option>
                </select>
                <select className='items' name="" id="">
                    <option value="">EN</option>
                </select>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header