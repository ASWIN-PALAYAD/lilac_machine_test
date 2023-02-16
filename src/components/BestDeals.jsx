import React from 'react'
import Wrapper from '../assets/wrappers/BestDealsWrapper'
// import { bestDealsProducts } from '../data'
import BestDealsProduct from './BestDealsProduct'

import fridge from '../../src/assets/images/fridge.png'
import game from '../../src/assets/images/game.png'
import mouse from '../../src/assets/images/mouse.png'
import playstation from '../../src/assets/images/playstation.png';
import shoe from '../../src/assets/images/shoe.png'
import tshirt from '../../src/assets/images/tshirt.png'
import watch from '../../src/assets/images/watch.png'
import headphone from '../../src/assets/images/headphone.png'
import analogwatch from '../../src/assets/images/anlogwatch.png'
import earpode from '../../src/assets/images/earpod.png'

const bestDealProducts = [
    {
        id:1,
        name: 'Xbox White Joystick',
        image: fridge,
        price : '$33.3',
        rating: 4
    },
    {
        id:2,
        name: 'Xbox White Joystick',
        image: game,
        price : '$33.3',
        rating: 4
    },
    {
        id:3,
        name: 'Fitness and activity Tracker',
        image:watch,
        price : '$33.3',
        rating: 4
    },
    {
        id:4,
        name: 'Super Boost Headphones',
        image: headphone,
        price : '$33.3',
        rating: 4
    },
    {
        id:5,
        name: 'X-Ray 2 Square PACK',
        image: watch,
        price : '$33.3',
        rating: 4
    },
    {
        id:6,
        name: 'AX1326 Automatic Analog',
        image: analogwatch,
        price : '$33.3',
        rating: 4
    },
    {
        id:7,
        name: 'Ice White Airpods',
        image:  earpode,
        price : '$33.3',
        rating: 4
    },
    {
        id:8,
        name: 'Hazor Mouse Gaming',
        image:  mouse,
        price : '$33.3',
        rating: 4
    },
    {
        id:9,
        name: 'LG 260 L 3 Star Frost',
        image: fridge,
        price : '$33.3',
        rating: 4
    },
    {
        id:10,
        name: "Levi's Men's Printed T-Shirt",
        image: tshirt,
        price : '$33.3',
        rating: 4
    }

]

const BestDeals = () => {
    return (
        <Wrapper>
            <div className="BestDeals_heading">
                <h2><b>Best Deals</b></h2>
                <a href="/">View all</a>
            </div>
            <div className="BestDeals_products">
                {bestDealProducts.map((item)=> {
                    return (
                        <BestDealsProduct item={item} key={item.id} />
                    )
                })}
                
                


            </div>


        </Wrapper>
    )
}

export default BestDeals 