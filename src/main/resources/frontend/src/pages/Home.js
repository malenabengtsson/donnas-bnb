import React from 'react'
import SearchResidence from '../components/SearchResidence'
import HomeCarousel from '../components/HomeComponents/HomeCarousel'





const Home = () => {

  return (
    <div>
      <SearchResidence /> 
      <HomeCarousel residenceId={1}/>
    </div>
  )
}

export default Home