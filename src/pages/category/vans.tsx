import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import vansLogo2 from '../../assets/banner logos/vans-2.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'

export default function vans() {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={vansLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Of the Wall!
        </h2>
      </Banner>
      <ProductsContainer />
    </MainContainer>
  )
}
