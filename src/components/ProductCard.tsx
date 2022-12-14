import Image from 'next/image'
import Link from 'next/link'
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
        setProductHref(`/category/nike/${product?.id}`)
        break
      case '/category/adidas':
        setProductHref(`/category/adidas/${product?.id}`)
        break
      case '/category/vans':
        setProductHref(`/category/vans/${product?.id}`)
        break
      case '/category/puma':
        setProductHref(`/category/puma/${product?.id}`)
        break

      default:
        setProductHref(`/category/sneakers/${product?.id}`)
        break
    }
  }, [product?.id, router.pathname])
  return (
    <div
      className={`${
        (product?.mainImage.includes('assets') ||
          ARRAYTOREMOVEPRODUCTS.includes(product?.title)) &&
        'hidden'
      } w-auto items-center flex flex-col`}
    >
      {
        <Link
          href={`${productHref}`}
          className="rounded hover:shadow-brand transition-shadow shadow-md drop-shadow-lg"
        >
          <Image
            className="rounded w-auto"
            src={
              product?.mainImage.includes('assets')
                ? product?.primaryCardImage
                : product?.mainImage
            }
            alt=""
            width={386}
            height={328}
            quality={50}
            priority
          />
        </Link>
      }
      <div className="px-2 mt-2 text-lg flex md:flex-col justify-between w-full gap-1">
        <span
          className={`${productSizes} lowercase text-gray-700 font-semibold first-letter:uppercase`}
        >
          {product?.title.replace('Tenis', '').replace('Tênis', '')}
        </span>
        <span className={`${productSizes} font-semibold text-gray-400`}>
          R$ {product?.price}
        </span>
      </div>
    </div>
  )
}
