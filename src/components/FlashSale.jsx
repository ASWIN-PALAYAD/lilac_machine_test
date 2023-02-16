import React from 'react'
import Wrapper from '../assets/wrappers/FlashSaleWrapper'
import flashSaleBack from '../../src/assets/images/flashSaleBak.png'
const FlashSale = () => {
    return (
        <Wrapper>
            <div className="Container">
               <div className='Container_Items'>
                    <div className="Backgroundimage">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={flashSaleBack} alt="" />
                    </div>
                    <div className="Sale_Details">
                        

                    </div>
                    <div className="Flash_Product">

                    </div>
               </div >

            </div>

        </Wrapper>
    )
}

export default FlashSale