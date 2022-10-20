import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Api } from '../libs/axios'
import { Product } from '../types/product'

export default function RecommendedCarousel() {
  const [products, setProducts] = useState<Product[]>([])

  async function getRandomSneakers() {
    const randomSneakers: { data: Product[] } = await Api.get(
      '/allSneakers/random',
    )
    const productsFormatted = randomSneakers.data.map((product) => ({
      ...product,
      secondariesImages: product.secondariesImages.filter((_, i) => i !== 0),
    }))
    setProducts(productsFormatted)
  }

  useEffect(() => {
    getRandomSneakers()
  }, [])

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 3 },
  })

  function setCarouselImages() {
    return products.map((product) => {
      return (
        <Link
          key={product.id}
          href={`/category/sneakers/${product.id}`}
          as={`/category/sneakers/${product.id}`}
        >
          <Image
            className="keen-slider__slide object-cover pointer shadow-lg drop-shadow rounded"
            alt=""
            src={product.primaryCardImage}
            width={440}
            height={342}
          />
        </Link>
      )
    })
  }

  return (
    <div
      ref={ref}
      className="keen-slider h-auto  overflow-hidden  flex  mt-8 shadow-lg "
    >
      {setCarouselImages()}
    </div>
  )
}
