import Banner from '../components/Banner'
import MainContainer from '../components/MainContainer'
import ProductsContainer from '../components/ProductsContainer'
import { useProducts } from '../hooks/useProducts'

/* dependendo da categoria, muda o logo */
const Home = () => {
  const { products } = useProducts('allSneakers')
  console.log(products)
  return (
    <MainContainer>
      <Banner />
      <ProductsContainer products={products} pagination />
    </MainContainer>
  )
}

export default Home
