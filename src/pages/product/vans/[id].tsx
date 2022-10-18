import { GetServerSideProps } from 'next'
import ProductContainer from '../../../components/ProductContainer'
import { Api } from '../../../libs/axios'
import nikeLogo from '../../assets/banner logos/nike-2.svg'
import { Product as ProductType } from '../../../types/product'

export default function Product({ product }: { product: ProductType }) {
  return <ProductContainer product={product} logo={nikeLogo} />
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id
  const product = await Api.get(`/vans/${productId}`)

  return {
    props: {
      product: product.data,
    },
  }
}
