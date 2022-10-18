import { createContext, PropsWithChildren, useState } from 'react'

interface FilterContext {
  isFilterHidden: boolean
  handleFilterVisibility: () => void
  setGridColumns: () => string
  handleGridFilter: (s: string) => void
  gridFilter: string
}

export const filterContext = createContext({} as FilterContext)

export function FilterProvider({ children }: PropsWithChildren) {
  const [isFilterHidden, setIsFilterHidden] = useState(false)
  const [gridFilter, setGridFilter] = useState('')

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
        return 'grid-cols-2'
      case 'tree':
        return 'grid-cols-3'
      case 'five':
        return 'grid-cols-5'
      case 'four':
        return 'grid-cols-4'
      default:
        return `2xl:grid-cols-5 ${
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
  }
  return (
    <filterContext.Provider value={valueToProvider}>
      {children}
    </filterContext.Provider>
  )
}
