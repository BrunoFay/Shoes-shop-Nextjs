import React from 'react'
import Banner from '../../components/Banner'
import MainContainer from '../../components/MainContainer'
import adidasLogo2 from '../../assets/banner logos/adidas-2.svg'
import Image from 'next/future/image'
import ProductsContainer from '../../components/ProductsContainer'
import { Product } from '../../types/product'
import { Api } from '../../libs/axios'
import { GetServerSideProps } from 'next'
import PaginationFilter from '../../components/PaginationFilter'

export default function adidas(products: Product[]) {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={adidasLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Impossible is Nothing!
        </h2>
      </Banner>
      <PaginationFilter numPages={3} apiURL={'adidas'} />
      <ProductsContainer {...products} pagination />
    </MainContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const product = await Api.get('/adidas')
  return {
    props: {
      products: product.data,
    },
  }
}
