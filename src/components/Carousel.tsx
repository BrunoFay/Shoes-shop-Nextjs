import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Product } from '../types/product'

export default function Carousel({
  product,
  logo,
}: {
  product: Product
  logo: string
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const secondariesImagesWithoutMainImage = product.secondariesImages.filter(
    (_, i) => i !== 0,
  )

  useEffect(() => {
    setImages([product.mainImage, ...secondariesImagesWithoutMainImage])
  }, [product.mainImage, secondariesImagesWithoutMainImage])

  const validateCardPerView = images.length > 4 ? 3.4 : images.length
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    mode: 'free',
    slides: { origin: 'center', perView: validateCardPerView, spacing: 12 },
    range: {
      min: -5,
      max: 5,
    },
  })

  function setCarouselImages() {
    if (
      product.secondariesImages &&
      typeof product.secondariesImages !== 'string'
    ) {
      return images.map((img, i) => (
        <Image
          tabIndex={0}
          onClick={() => setCurrentSlide(i)}
          key={product.id}
          className={`${
            currentSlide === i && 'shadow-brand ring-2'
          } keen-slider__slide cursor-pointer shadow-lg drop-shadow rounded`}
          alt=""
          src={img}
          width={170}
          height={152}
        />
      ))
    }
    return (
      <Image
        key={product.id}
        className="keen-slider__slide shadow-lg drop-shadow rounded"
        alt=""
        src={product.secondaryCardImage}
        width={170}
        height={152}
      />
    )
  }

  return (
    <div className=" border  items-center gap-1 flex flex-col 2xl:h-screen min-h-screen w-[70vw] lg:w-[80vw]">
      <div className="relative top-10 left-[42%] flex">
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        >
          <CaretLeft size={32} color="gray" />
        </button>
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        >
          <CaretRight size={32} />
        </button>
      </div>
      <div className="relative bottom-3 right-[45%] flex">
        <Image className="relative left-8" src={logo} alt="" width={70} />
      </div>
      <Image
        className="lg:w-[580px] w-[50vw]"
        alt=""
        src={images[currentSlide]}
        priority
        width={580}
        height={558}
      />
      <div ref={ref} className="keen-slider flex mt-8 shadow-lg max-w-[753px]">
        {setCarouselImages()}
      </div>
    </div>
  )
}
