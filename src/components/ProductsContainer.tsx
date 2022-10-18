import React, { useContext } from 'react'
import { filterContext } from '../context/filterProvider'
import ProductCard from './ProductCard'

export default function ProductsContainer() {
  const { setGridColumns } = useContext(filterContext)
  return (
    <main
      className={`${setGridColumns()} bg-white grid gap-8 px-8 py-10 flex-1`}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </main>
  )
}
