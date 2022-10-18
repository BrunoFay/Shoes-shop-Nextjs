import type { NextPage } from 'next'
import Banner from '../components/Banner'
import MainContainer from '../components/MainContainer'
import ProductsContainer from '../components/ProductsContainer'

/* dependendo da categoria, muda o logo */
const Home: NextPage = () => {
  return (
    <MainContainer>
      <Banner />
      <ProductsContainer />
    </MainContainer>
  )
}

export default Home
