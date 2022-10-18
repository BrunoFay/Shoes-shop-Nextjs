import React, { useContext } from 'react'
import { filterContext } from '../context/filterProvider'
import { Product } from '../types/product'
import ProductCard from './ProductCard'

export default function ProductsContainer({ products }: any) {
  const { setGridColumns } = useContext(filterContext)
  return (
    <main
      className={`${setGridColumns()} bg-white grid gap-8 px-8 py-10 flex-1`}
    >
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  )
}
