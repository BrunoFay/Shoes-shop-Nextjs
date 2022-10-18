import { createContext, PropsWithChildren, useState } from 'react'

interface FilterContext {
  isFilterHidden: boolean
  handleFilterVisibility: () => void
  setGridColumns: () => string
  handleGridFilter: (s: string) => void
  gridFilter: string
  productSizes: string
}

export const filterContext = createContext({} as FilterContext)

export function FilterProvider({ children }: PropsWithChildren) {
  const [isFilterHidden, setIsFilterHidden] = useState(false)
  const [gridFilter, setGridFilter] = useState('')
  const [productSizes, setProductSizes] = useState('')

  function handleGridFilter(type: string) {
    if (gridFilter === type) {
      setGridFilter('')
    } else {
      setGridFilter(type)
    }
  }
  function setGridColumns() {
    switch (gridFilter) {
      case 'two':
        setProductSizes('text-2xl')
        return 'grid-cols-2'
      case 'tree':
        setProductSizes('text-xl')
        return 'grid-cols-3'
      case 'five':
        setProductSizes('text-sm')
        return 'grid-cols-5'
      case 'four':
        setProductSizes('text-md')
        return 'grid-cols-4'
      default:
        setProductSizes('text-sm')
        return `2xl:grid-cols-5 grid-cols-4 ${
          gridFilter !== 'four' || (!isFilterHidden && ' md:grid-cols-3')
        }`
    }
  }
  function handleFilterVisibility() {
    setIsFilterHidden(!isFilterHidden)
  }
  const valueToProvider = {
    isFilterHidden,
    handleFilterVisibility,
    handleGridFilter,
    setGridColumns,
    gridFilter,
    productSizes,
  }
  return (
    <filterContext.Provider value={valueToProvider}>
      {children}
    </filterContext.Provider>
  )
}
