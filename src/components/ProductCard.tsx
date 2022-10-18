import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { filterContext } from '../context/filterProvider'
import { Product } from '../types/product'

const ARRAYTOREMOVEPRODUCTS = [
  'Camisa',
  'Camiseta',
  'Moletom',
  'Tênis vans skate sk8 mid bege',
]

export default function ProductCard(product: Product) {
  const { productSizes } = useContext(filterContext)
  const router = useRouter()
  const [productHref, setProductHref] = useState('')

  useEffect(() => {
    switch (router.pathname) {
      case '/category/nike':
        setProductHref(`/product/nike/${product.id}`)
        break
      case '/category/adidas':
        setProductHref(`/product/adidas/${product.id}`)
        break
      case '/category/vans':
        setProductHref(`/product/vans/${product.id}`)
        break
      case '/category/puma':
        setProductHref(`/product/puma/${product.id}`)
        break

      default:
        setProductHref(`/product/${product.id}`)
        break
    }
  }, [router.pathname])

  return (
    <div
      className={`${
        (product.mainImage.includes('assets') ||
          ARRAYTOREMOVEPRODUCTS.includes(product.title)) &&
        'hidden'
      } w-auto items-center flex flex-col`}
    >
      <a href={`${productHref}`} className="rounded shadow-md drop-shadow-lg">
        <Image
          className="rounded w-auto"
          src={
            product.mainImage.includes('assets')
              ? product.primaryCardImage
              : product.mainImage
          }
          alt=""
          width={386}
          height={328}
        />
      </a>
      <div className="px-1 mt-2 text-lg flex flex-col gap-1">
        <span
          className={`${productSizes} lowercase text-gray-700 font-semibold first-letter:uppercase`}
        >
          {product.title}
        </span>
        <span className={`${productSizes} font-semibold text-gray-400`}>
          R$ {product.price}
        </span>
      </div>
    </div>
  )
}
