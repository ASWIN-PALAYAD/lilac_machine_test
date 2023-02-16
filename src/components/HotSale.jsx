import React from 'react'
import Wrapper from '../assets/wrappers/HotSaleWrapper'


import beanBag from '../../src/assets/images/beanBag.png';
import deskTop from '../../src/assets/images/deskTop.png'
import jbl from '../../src/assets/images/jbl.png'
import maxBook from '../../src/assets/images/macBook.png'
import playStation from '../../src/assets/images/playstation.png'
import SingleProduct from './SingleProduct';


const hotSaleProducts = [
    {
        id: 1,
        name: 'PVC Bean Bag Black 80x80x50centimeter',
        image: beanBag,
        price: '$33.3',
        location: 'india',
        offer: 30,
        rating:4
    },
    {
        id: 2,
        name: 'U2520D 25-Inch UltraSharp QHD USB-C Monitor Black',
        image: deskTop,
        price: '$33.3',
        location: 'india',
        urgent: true,
        rating:4
        
    },
    {
        id: 3,
        name: 'Flip 5 Waterproof Portable Bluetooth Speaker Black',
        image: jbl,
        price: '$33.3',
        location: 'india',
        urgent: 25,
        rating:4
    },
    {
        id: 4,
        name: 'MacBook Pro With Touch Bar And Touch ID, 13.3-Inch Dis...',
        image: maxBook,
        price: '$33.3',
        location: 'india',
        urgent: true,
        rating:4
    },
    {
        id: 5,
        name: 'PlayStation 5 Console (Disc Version) With Extra Contro...',
        image: playStation,
        price: '$33.3',
        location: 'india',
        urgent: true,
        rating:4
    },


]

const HotSale = () => {
  return (
    <Wrapper>
        <div className="Container">
            <div className="Title">
                <h2>Hot Sale</h2>
            </div>

            <div className="Products">
                {hotSaleProducts.map(item => (
                    <SingleProduct item={item} button={true} />
                ))}
            </div>
        </div>


    </Wrapper>
  )
}

export default HotSale