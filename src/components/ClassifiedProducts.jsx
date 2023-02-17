import React from 'react'
import Wrapper from '../assets/wrappers/ClassifiedProductsWrapper'
import helicam from '../../src/assets/images/helicam.png';
import speaker from '../../src/assets/images/speaker.png'
import car from '../../src/assets/images/car.png'
import applePhone from '../../src/assets/images/applePhone.png'
import ClassifiedProduct from './ClassifiedProduct';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const ClassifiesItems = [
    {
        id: 1,
        name: 'Foldable GPS RC Drone',
        image: helicam,
        price: '$33.3',
        location: 'india',
        urgent: true
    },
    {
        id: 2,
        name: 'Marshall Stockwell II Portable Speaker',
        image: speaker,
        price: '$33.3',
        location: 'india',
        urgent: false
    },
    {
        id: 3,
        name: '2020 Ford Mustang GT Fastback',
        image: car,
        price: '$33.3',
        location: 'india',
        urgent: true
    },
    {
        id: 4,
        name: 'Iphone 11 pro max',
        image: applePhone,
        price: '$33.3',
        location: 'india',
        urgent: false
    },
    {
        id: 5,
        name: '2020 Ford Mustang GT Fastback',
        image: car,
        price: '$33.3',
        location: 'india',
        urgent: true
    },
    {
        id: 6,
        name: 'Marshall Stockwell II Portable Speaker',
        image: speaker,
        price: '$33.3',
        location: 'india',
        urgent: false
    },
]

const ClassifiedProducts = () => {
    return (
        <Wrapper>
            <div className="Container">
                
                <div className='Products' >
                    {ClassifiesItems.map((item) => {
                        return (
                            <ClassifiedProduct item={item} />
                        )
                    })}
                </div >




            </div>



        </Wrapper>
    )
}

export default ClassifiedProducts