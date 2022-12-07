import Image from 'next/image'
import nikeLogo2 from '../../../assets/banner logos/nike-2.svg'
import Banner from '../../../components/Banner'
import MainContainer from '../../../components/MainContainer'
import ProductsContainer from '../../../components/ProductsContainer'
import { useProducts } from '../../../hooks/useProducts'

export default function Nike() {
  const { products } = useProducts('nike')
  return (
    <MainContainer>
      <Banner>
        <Image className="h-20 w-20" src={nikeLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Write the Future Just Do It!
        </h2>
      </Banner>
      <ProductsContainer products={products} pagination />
    </MainContainer>
  )
}
