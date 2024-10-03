import React from 'react'
import Banner from '../../components/Banner'
// import Categories from '../../components/Categories'
// import Services from '../../components/Services'
// import Crousal from '../../components/Crousal'
import FoodContainer from '../../components/FoodCart'



function Home() {
  return (
    <div>
      <Banner/>
      {/* <Categories/>
      <Services/>
      <Crousal/> */}
      <FoodContainer/>
    </div>
  )
}

export default Home