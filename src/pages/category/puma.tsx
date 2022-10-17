import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import pumaLogo2 from '../../assets/banner logos/puma-2.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'

export default function puma() {
  return (
    <MainContainer>
      <Banner>
        <Image
          className="h-auto w-28 relative right-10"
          src={pumaLogo2}
          alt=""
        />
        <h2 className="font-bold relative right-8 xl:text-3xl text-xl w-60 text-left">
          Forever Faster!
        </h2>
      </Banner>
      <ProductsContainer />
    </MainContainer>
  )
}
