import { useContext } from 'react'
import { productContext } from '../context/productsProvider'
import { Api } from '../libs/axios'

const DEFAULT_CATEGORIES = ['air jordan', 'yeezy', 'old skool', 'rs-x']
const NIKE_CATEGORIES = [
  'air jordan',
  'air force',
  'nike sb',
  'air max',
  'dunk',
]
const ADIDAS_CATEGORIES = ['yeezy', 'nmd', 'nite jogger', 'tyshawn']
const PUMA_CATEGORIES = ['suede', 'cali', 'rs-x', 'wild rider rollin']
const VANS_CATEGORIES = ['old skool', 'sk8', 'authentic', '']

export function useFilters(currentCategory: string) {
  const { changeProductContext } = useContext(productContext)

  function handleCategoriesFilters() {
    switch (currentCategory) {
      case 'vans':
        return VANS_CATEGORIES
      case 'puma':
        return PUMA_CATEGORIES
      case 'adidas':
        return ADIDAS_CATEGORIES
      case 'nike':
        return NIKE_CATEGORIES
      default:
        return DEFAULT_CATEGORIES
    }
  }
  async function handleChangeProductByFilter(payload: string) {
    if (!currentCategory) {
      const { data } = await Api.get(`allSneakers?filter=${payload}`)
      changeProductContext(data)
      return
    }
    const { data } = await Api.get(`${currentCategory}?filter=${payload}`)
    changeProductContext(data)
  }
  return { handleCategoriesFilters, handleChangeProductByFilter }
}
