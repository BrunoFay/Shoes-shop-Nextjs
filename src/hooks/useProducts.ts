import { useEffect, useState } from 'react'
import { Api } from '../libs/axios'

export function useProducts<t>(category: string, id?: string | string[]) {
  const [products, setProducts] = useState<t>([] as t)
  const [product, setProduct] = useState<t>({} as t)

  async function getProduct() {
    const productObj = await Api.get(`/${category}/${id}`)
    setProduct(productObj.data)
  }

  async function getProducts() {
    const productsList = await Api.get(`/${category}`)
    setProducts(productsList.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (id) {
      getProduct()
    }
  }, [id])

  return { products, product }
}
