import Image from 'next/image'
import pumaLogo2 from '../../../assets/banner logos/puma.svg'
import Banner from '../../../components/Banner'
import MainContainer from '../../../components/MainContainer'
import ProductsContainer from '../../../components/ProductsContainer'
import { useProducts } from '../../../hooks/useProducts'

export default function Puma() {
  const { products } = useProducts('puma')
  return (
    <MainContainer>
      <Banner>
        <Image className="h-auto w-28" src={pumaLogo2} alt="" />
        <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
          Forever Faster!
        </h2>
      </Banner>
      <ProductsContainer products={products} />
    </MainContainer>
  )
}
