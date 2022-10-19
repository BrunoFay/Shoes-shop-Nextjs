import React, { useContext, useEffect } from 'react'
import { filterContext } from '../context/filterProvider'
import { productContext } from '../context/productsProvider'
import { Product } from '../types/product'
import ProductCard from './ProductCard'

export default function ProductsContainer({
  products,
  pagination = false,
}: any) {
  const { setGridColumns } = useContext(filterContext)
  const { productsContext, changeProductContext } = useContext(productContext)

  useEffect(() => {
    changeProductContext([])
  }, [])

  function setProducts() {
    if (!pagination) {
      return products
    }
    return productsContext ?? products
  }

  return (
    <main
      className={`${setGridColumns()} bg-white grid gap-8 px-8 py-10 flex-1`}
    >
      {setProducts().map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  )
}
