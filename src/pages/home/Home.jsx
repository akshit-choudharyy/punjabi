import React from 'react'
import Banner from '../../components/Banner'
// import Categories from '../../components/Categories'
// import Services from '../../components/Services'
// import Crousal from '../../components/Crousal'
import FoodContainer from '../../components/FoodCart'
import Counters from '../../components/Counters'



function Home() {
  return (
    <div>
      <Banner/>
      <Counters/>
      {/* <Categories/>
      <Services/>
      <Crousal/> */}
      <br/>
      <h1 className="text-4xl font-bold text-center mb-12 text-shadow-3xl ">𝓞𝓾𝓻 𝓓𝓮𝓵𝓲𝓬𝓲𝓸𝓾𝓼 𝓕𝓸𝓸𝓭 𝓜𝓮𝓷𝓾</h1>
      <FoodContainer/>
    </div>
  )
}

export default Home