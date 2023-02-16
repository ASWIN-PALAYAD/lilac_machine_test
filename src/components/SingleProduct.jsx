import React from 'react'
import Wrapper from '../assets/wrappers/SingleProduct'

const SingleProduct = ({ item }) => {
    return (
        <Wrapper>
            <div className="Container">
                <div className="Product">
                    <div className="Pro_image">
                        <img src={item.image} alt="" />
                        <div className="offer">

                        </div>
                    </div>
                    <div className="Pro_Details">
                        <div className="Name">
                            <p>{item.name}</p>
                        </div>
                        <div className="Price">
                            <h5>{item.price}</h5>
                            <span>{item.price}</span>
                        </div>
                        <div className="rating">
                            <p>{item.rating}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProduct