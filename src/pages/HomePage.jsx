import React from 'react'
import BestDeals from '../components/BestDeals'
import Carosals from '../components/Carosals'
import Categories from '../components/Categories'
import ClassifiedProducts from '../components/ClassifiedProducts'
import FlashSale from '../components/FlashSale'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import RecomendedProducts from '../components/RecomendedProducts'

const HomePage = () => {
  return (
    <>
      <Header />
      <div style={{padding:'0 4rem'}}>
        <NavBar />
        <Categories/>
        {/* <Slider/> */}
        <Carosals/>
        <BestDeals/>
        <ClassifiedProducts/>
        <RecomendedProducts/>
        <FlashSale/>
        <NewsLetter/>
        <Footer/>

      </div>
    </>

  )
}

export default HomePage