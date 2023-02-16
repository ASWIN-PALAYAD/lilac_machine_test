import React from 'react'
import Wrapper from '../assets/wrappers/RecomendedProductsWrapper'

import television from '../../src/assets/images/television.png'
import camera from '../../src/assets/images/camera.png'
import laptop from '../../src/assets/images/laptop.png'
import perfume from '../../src/assets/images/perfume.png'
import shoe from '../../src/assets/images/shoe.png'
import SingleProduct from './SingleProduct'


const recomendedProducts = [
  {
    id:1,
    name: 'iPhone 12 With Facetime',
    image: television,
    price : '$33.3',
    rating: 4
},
{
  id:2,
  name: 'EOS M200 Mirrorless Camera',
  image: camera,
  price : '$33.3',
  rating: 4,
  offer : 30
},
{
  id:3,
  name: 'Ultra Book Thin Laptop XL-01',
  image: laptop,
  price : '$33.3',
  rating: 4
},
{
  id:4,
  name: 'Magic Perfume',
  image: perfume,
  price : '$33.3',
  rating: 4,
  offer: 40
},
{
  id:5,
  name: 'Convers Gray',
  image: shoe,
  price : '$33.3',
  rating: 4
},


]

const RecomendedProducts = () => {
  return (
    <Wrapper>
      <div className="Container">

        <div className="info">
          <h3><b>Recomended</b></h3>
          <a href='/' >View all</a>
        </div>

        <div className="Products">
          {recomendedProducts.map(item => (
            <SingleProduct item={item} />
          ))}
        </div>


      </div>
    </Wrapper>
  )
}

export default RecomendedProducts