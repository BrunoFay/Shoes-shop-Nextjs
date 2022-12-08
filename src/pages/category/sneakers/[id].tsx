import { useRouter } from 'next/router'
import adidasLogo from '../../../assets/banner logos/adidas.svg'
import nikeLogo from '../../../assets/banner logos/nike-2.svg'
import pumaLogo from '../../../assets/banner logos/puma.svg'
import vansLogo from '../../../assets/banner logos/vans.svg'
import ProductContainer from '../../../components/ProductContainer'
import { useProducts } from '../../../hooks/useProducts'
import { Product as ProductType } from '../../../types/product'

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const { product } = useProducts<ProductType>('sneakers', id)

  function changeProductLogo() {
    if ('title' in product) {
      switch (true) {
        case product?.title.includes('Vans'):
          return vansLogo
        case product?.title.includes('Adidas'):
          return adidasLogo
        case product?.title.includes('Nike'):
          return nikeLogo
        case product?.title.includes('Puma'):
          return pumaLogo
        default:
          return null
      }
    }
  }

  if ('title' in product) {
    return <ProductContainer product={product} logo={changeProductLogo()} />
  }
  return null
}
