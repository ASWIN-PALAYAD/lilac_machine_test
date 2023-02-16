import React from 'react'
import Wrapper from '../assets/wrappers/ClassifiesProduct.Wrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ClassifiedProduct = ({item}) => {
  return (
    <Wrapper>
        <div className="Container">

            <div className="ProductCard">
                <div className="Pro_Image">
                  <img src={item.image} alt="" />
                  {item.urgent ? (
                    <div className="urgent_sale">
                    <p>Urgent Selling</p>
              </div>
                  ):( '')}
                </div>
                <div className="Pro_Details">
                    <div className="Pro_name" style={{display:'flex'}}>
                        <div className="left" style={{flex:'2'}} >
                        <h6>{item.name}</h6> 
                        </div>
                        <div className="right"  style={{flex:'1'}}>

                        </div>
                       
                    </div>
                    <div className="Pro_price">
                        <p>{item.price}</p>
                        <span><LocationOnIcon style={{width:'10px'}} />{item.location}</span>
                    </div>
                    
                </div>

            </div>
        </div>

    </Wrapper>
  )
}

export default ClassifiedProduct