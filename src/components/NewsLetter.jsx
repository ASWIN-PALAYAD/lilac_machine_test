import React from 'react'
import vector from '../assets/images/Vector.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Wrapper from '../assets/wrappers/NewsLetterWrapper'

const NewLetter = () => {
  return (
    <Wrapper>
      <div className="Container">
        <div className="Navigation">
          <p>Back to Top <KeyboardArrowUpIcon /></p>
        </div>

        <div className="NewsLetter">
          <div className="Newletter_Content">
            <div className='NewsLetter_heading'>
              <p>Sign Up for Newsletter <br />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </p>
              <dv className='Vector_image' >
                <img style={{width:'60px'}} src={vector} alt="" />
              </dv >
            </div >

          </div>
          <div className="Newsletter_SearchBox">
            <div className="InputBox">
              <input type="text" placeholder='Enter your email here' />
              <button>SUBSCRIBE</button>
            </div>

          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default NewLetter