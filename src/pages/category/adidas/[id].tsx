import { useRouter } from 'next/router'
import adidas from '../../../assets/banner logos/adidas.svg'
import ProductContainer from '../../../components/ProductContainer'
import { useProducts } from '../../../hooks/useProducts'
import { Product as ProductType } from '../../../types/product'

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const { product } = useProducts<ProductType>('adidas', id)

  if ('title' in product) {
    return <ProductContainer product={product} logo={adidas} />
  }

  return null
}
