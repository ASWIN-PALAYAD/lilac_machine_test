import React from 'react'
import Wrapper from '../assets/wrappers/SingleProduct'
import StarRateIcon from '@mui/icons-material/StarRate';
const SingleProduct = ({ item,button}) => {
    return (
        <Wrapper>
            <div className="Container">
                <div className="Product">
                    <div className="Pro_image">
                        <img src={item.image} alt="" /> 
                        {item.offer ? (
                            <div className="Offer_card">
                            {item.offer}% off
                        </div>
                        ):('')}
                        
                         
                    </div>
                    
                    <div className="Pro_Details">
                        <div className="Name">
                            <p>{item.name}</p>
                        </div>
                        <div className="Price">
                            <h5>{item.price}</h5>

                        </div>
                        <div className="Rating">
                            <span>{item.price}</span>
                            <p><StarRateIcon  style={{width:'15px', color:'rgba(49, 135, 237, 1)'}} />{item.rating}</p>
                        </div>
                        {button ? (
                            <button className='Cart_Button' >Add to Cart</button>
                        ):('')}
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProduct