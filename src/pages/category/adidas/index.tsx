import { GetServerSideProps } from 'next'
import Image from 'next/image'
import adidasLogo2 from '../../../assets/banner logos/adidas-2.svg'
import Banner from '../../../components/Banner'
import MainContainer from '../../../components/MainContainer'
import ProductsContainer from '../../../components/ProductsContainer'
import { Api } from '../../../libs/axios'
import { Product } from '../../../types/product'

export default function adidas(products: Product[]) {
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={adidasLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Impossible is Nothing!
        </h2>
      </Banner>
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
