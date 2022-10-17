import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import nikeLogo2 from '../../assets/banner logos/nike-2.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'

export default function nike() {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={nikeLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Write the Future Just Do It!
        </h2>
      </Banner>
      <ProductsContainer />
    </MainContainer>
  )
}
