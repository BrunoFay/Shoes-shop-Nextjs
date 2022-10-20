import { GetServerSideProps } from 'next'
import adidas from '../../../assets/banner logos/adidas.svg'
import ProductContainer from '../../../components/ProductContainer'
import { Api } from '../../../libs/axios'
import { Product as ProductType } from '../../../types/product'

export default function Product({ product }: { product: ProductType }) {
  return <ProductContainer product={product} logo={adidas} />
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id
  const product = await Api.get(`/adidas/${productId}`)

  return {
    props: {
      product: product.data,
    },
  }
}