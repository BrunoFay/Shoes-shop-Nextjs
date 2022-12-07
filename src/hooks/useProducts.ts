import { useEffect, useState } from 'react'
import { Api } from '../libs/axios'

export function useProducts(category: string) {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const productsList = await Api.get(`/${category}`)
    setProducts(productsList.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products }
}
