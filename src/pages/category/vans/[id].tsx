import { useRouter } from 'next/router'
import vansLogo from '../../../assets/banner logos/vans.svg'
import ProductContainer from '../../../components/ProductContainer'
import { useProducts } from '../../../hooks/useProducts'
import { Product as ProductType } from '../../../types/product'

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const { product } = useProducts<ProductType>('vans', id)
  if ('title' in product) {
    return <ProductContainer product={product} logo={vansLogo} />
  }
  return null
}
