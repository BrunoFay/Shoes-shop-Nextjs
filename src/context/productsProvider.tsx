import { createContext, PropsWithChildren, useState } from 'react'
import { Product } from '../types/product'

interface ProductContext {
  productsContext: Product[]
  changeProductContext: (s: Product[]) => void
}
export const productContext = createContext({} as ProductContext)

export function ProductProvider({ children }: PropsWithChildren) {
  const [productsContext, setProductsContext] = useState<Product[]>([])

  async function changeProductContext(products: Product[]) {
    setProductsContext(products)
  }

  const valueToProvide = { productsContext, changeProductContext }
  return (
    <productContext.Provider value={valueToProvide}>
      {children}
    </productContext.Provider>
  )
}
