import type { NextPage } from 'next'
import Image from 'next/future/image'
import nikeLogo2 from '../assets/banner logos/nike-2.svg'
import Banner from '../components/Banner'
import MainContainer from '../components/MainContainer'
import ProductsContainer from '../components/ProductsContainer'

/* dependendo da categoria, muda o logo */
const Home: NextPage = () => {
  return (
    <MainContainer>
      <Banner>
        <div className="pl-8 flex gap-8">
          <Image className="h-20 w-20" src={nikeLogo2} alt="" />
          <h2 className="font-bold  xl:text-3xl text-xl w-60 text-left">
            Write the Future Just Do It!
          </h2>
        </div>
      </Banner>
      <ProductsContainer />
    </MainContainer>
  )
}

export default Home
