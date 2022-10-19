import Image from 'next/future/image'
import { CaretLeft, CaretRight, Heart, Tote } from 'phosphor-react'
import { Product } from '../types/product'

export default function ProductContainer({
  logo,
  product,
}: {
  logo: string
  product: Product
}) {
  function setCarouselImages() {
    if (
      product.secondariesImages &&
      typeof product.secondariesImages !== 'string'
    ) {
      return product?.secondariesImages.map((img) => (
        <Image
          key={product.id}
          className="shadow-lg drop-shadow rounded"
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
        className="shadow-lg drop-shadow rounded"
        alt=""
        src={product.secondariesImages}
        width={170}
        height={152}
      />
    )
  }

  return (
    <div className="flex bg-white">
      <div className=" border  items-center gap-1 flex flex-col h-screen w-[80vw]">
        <div className="relative top-10 left-[42%] flex">
          <button>
            <CaretLeft size={32} color="gray" />
          </button>
          <button>
            <CaretRight size={32} />
          </button>
        </div>
        <div className="relative bottom-3 right-[45%] flex">
          <Image
            className="relative left-8"
            src={logo}
            alt=""
            width={70}
            height="auto"
          />
        </div>
        <Image
          className=""
          alt=""
          src={product.mainImage}
          width={580}
          height={558}
        />
        <div className="flex  gap-5 max-w-[854px] w-auto">
          {setCarouselImages()}
        </div>
      </div>

      <div className=" items-center border justify-between py-10 flex flex-col h-screen w-[20vw]">
        <div className="flex flex-col px-8 gap-7">
          <div className="flex items-center">
            <h1 className=" xl:text-3xl text-xl font-bold">
              {product.title.replace('Tenis', '').replace('Tênis', '')}
            </h1>
          </div>
          <h2 className="font-semibold italic text-2xl self-start ">
            R$ {product.price}
          </h2>
          <p className="text-[#636262] mt-6 text-left text-sm leading-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            eligendi consequuntur ab neque, similique mollitia consectetur totam
            sed fugit sapiente illo commodi, facilis nobis repellendus, ipsam
            magnam ipsum provident deleniti.
          </p>
        </div>
        <div className="flex max-w-[310px] gap-5 flex-col">
          <strong>Sizes</strong>
          <div className="gap-2 flex flex-wrap">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                className="w-10 h-7 rounded text-white bg-zinc-400"
              >
                3{i}
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-52 gap-4 flex-col items-center">
          <button className="rounded-md items-center justify-center shadow bg-zinc-700 hover:bg-black hover:text-white transition-colors text-zinc-100 flex gap-2 border min-w-full py-2 font-semibold text-sm">
            Add to bag
            <Tote color="white" size={20} />
          </button>
          <button className="rounded-md hover:text-black text-zinc-700 items-center justify-center shadow flex gap-2 border min-w-full py-2 font-semibold transition-colors hover:bg-gray-100 text-sm">
            favorite
            <Heart color="red" size={20} />
          </button>
        </div>
        <div>
          <span>saad</span>
          <span>saad</span>
          <span>saad</span>
        </div>
      </div>
    </div>
  )
}
