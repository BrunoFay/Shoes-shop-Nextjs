import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import adidasLogo2 from '../../assets/banner logos/adidas-2.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'

export default function adidas() {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={adidasLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Impossible is Nothing!
        </h2>
      </Banner>
      <ProductsContainer />
    </MainContainer>
  )
}
