import React from 'react'
import Wrapper from '../assets/wrappers/BestDealsProduct'


const BestDealsProduct = ({ item }) => {
    return (

        <Wrapper>
            <div className="Container">

                <div className="product_card">
                    <div className="pro_image">
                        <img src={item.image} alt="" />


                    </div>
                    <div className="pro_details">
                        <p>{item.name}</p>
                        <h5>{item.price}</h5>
                        <span>{item.rating}</span>
                    </div>
                </div>

            </div>



        </Wrapper>
    )
}

export default BestDealsProduct