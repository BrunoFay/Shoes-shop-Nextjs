import type { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import MainContainer from '../components/MainContainer'
import PaginationFilter from '../components/PaginationFilter'
import ProductsContainer from '../components/ProductsContainer'
import { Api } from '../libs/axios'
import { Product } from '../types/product'

/* dependendo da categoria, muda o logo */
const Home = (products: Product[]) => {
  return (
    <MainContainer>
      <Banner />
      <PaginationFilter n={27} />
      <ProductsContainer {...products} />
    </MainContainer>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const product = await Api.get('/allSneakers')
  return {
    props: {
      products: product.data,
    },
  }
}
