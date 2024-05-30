import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Expenseportion from './Expenseportion'
import LastPortion from './LastPortion' 
import { DataContext } from '../DataProviderContex'
const Home = () => {
   
  const {data} = useContext(DataContext);

  
  return (
     <>
     <Navbar/>
     <Expenseportion data={data}/>
     <LastPortion data={data}/>
     </>
  )
}

export default Home
