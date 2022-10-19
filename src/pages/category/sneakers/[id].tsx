import { GetServerSideProps } from 'next'
import ProductContainer from '../../../components/ProductContainer'
import { Api } from '../../../libs/axios'
import { Product as ProductType } from '../../../types/product'
import nikeLogo from '../../../assets/banner logos/nike-2.svg'
import adidasLogo from '../../../assets/banner logos/adidas.svg'
import vansLogo from '../../../assets/banner logos/vans.svg'
import pumaLogo from '../../../assets/banner logos/puma.svg'

export default function Product({ product }: { product: ProductType }) {
  function changeProductLogo() {
    switch (true) {
      case product.title.includes('Vans'):
        return vansLogo
      case product.title.includes('Adidas'):
        return adidasLogo
      case product.title.includes('Nike'):
        return nikeLogo
      case product.title.includes('Puma'):
        return pumaLogo
      default:
    }
  }

  return <ProductContainer product={product} logo={changeProductLogo()} />
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id
  const product = await Api.get(`/allSneakers/${productId}`)

  return {
    props: {
      product: product.data,
    },
  }
}
