import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import pumaLogo2 from '../../assets/banner logos/puma.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'
import { Product } from '../../types/product'
import { GetServerSideProps } from 'next'
import { Api } from '../../libs/axios'

export default function puma(products: Product[]) {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-auto w-28" src={pumaLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Forever Faster!
        </h2>
      </Banner>
      <ProductsContainer {...products} />
    </MainContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const product = await Api.get('/puma')
  return {
    props: {
      products: product.data,
    },
  }
}
