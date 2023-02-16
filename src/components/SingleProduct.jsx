import React from 'react'
import Wrapper from '../assets/wrappers/SingleProduct'

const SingleProduct = ({ item }) => {
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
                            <p>{item.rating}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProduct