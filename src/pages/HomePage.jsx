import React from 'react'
import BestDeals from '../components/BestDeals'
import Carosals from '../components/Carosals'
import Categories from '../components/Categories'
import ClassifiedProducts from '../components/ClassifiedProducts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'

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
        <NewsLetter/>
        <Footer/>

      </div>
    </>

  )
}

export default HomePage