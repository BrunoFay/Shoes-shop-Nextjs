import { GetServerSideProps } from 'next'
import ProductContainer from '../../../components/ProductContainer'
import { Api } from '../../../libs/axios'
import { Product as ProductType } from '../../../types/product'
import puma from '../../../assets/banner logos/puma.svg'

export default function Product({ product }: { product: ProductType }) {
  return <ProductContainer product={product} logo={puma} />
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id
  const product = await Api.get(`/puma/${productId}`)

  return {
    props: {
      product: product.data,
    },
  }
}
