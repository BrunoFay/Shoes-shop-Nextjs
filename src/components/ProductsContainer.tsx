import { useContext } from 'react'
import { filterContext } from '../context/filterProvider'
import { Product } from '../types/product'
import ProductCard from './ProductCard'

export default function ProductsContainer({
  products: productsApi,
  pagination = false,
}: any) {
  const { setGridColumns } = useContext(filterContext)

  return (
    <main
      className={`${setGridColumns()} bg-white grid gap-8 px-8 py-10 flex-1`}
    >
      {productsApi.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  )
}
