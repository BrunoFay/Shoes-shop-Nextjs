import {
  FigmaLogo,
  GithubLogo,
  Heart,
  LinkedinLogo,
  Tote,
} from 'phosphor-react'
import { Product } from '../types/product'
import Carousel from './Carousel'
/* import RecommendedCarousel from './RecommendedCarousel' */

export default function ProductContainer({
  logo,
  product,
}: {
  logo: string
  product: Product
}) {
  if ('title' in product) {
    return (
      <div className="flex bg-white min-w-screen">
        <Carousel logo={logo} product={product} />
        <div className=" items-center border justify-between py-10 flex flex-col 2xl:h-screen min-h-screen w-[30vw] lg:w-[20vw]">
          <div className="flex flex-col px-8 gap-7">
            <div className="flex items-center">
              <h1 className=" xl:text-3xl text-xl font-bold">
                {product?.title?.replace('Tenis', '').replace('Tênis', '')}
              </h1>
            </div>
            <h2 className="font-semibold italic text-2xl self-start ">
              R$ {product?.price}
            </h2>
            <p className="text-[#636262] mt-6 text-left text-sm leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              eligendi consequuntur ab neque, similique mollitia consectetur
              totam sed fugit sapiente illo commodi, facilis nobis repellendus,
              ipsam magnam ipsum provident deleniti.
            </p>
          </div>
          <div className="flex px-8 max-w-[310px] gap-5 flex-col">
            <strong>Sizes</strong>
            <div className="gap-2 flex flex-wrap">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  className="xl:w-10 xl:h-7 h-5 w-8 text-sm xl:text-base rounded text-white bg-zinc-400"
                >
                  3{i}
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-52 gap-4 flex-col items-center">
            <button className="rounded-md items-center justify-center shadow bg-zinc-700 hover:bg-black hover:text-white transition-colors text-zinc-100 flex gap-2 border w-full py-2 font-semibold text-sm">
              Add to bag
              <Tote color="white" size={20} />
            </button>
            <button className="rounded-md hover:text-black text-zinc-700 items-center justify-center shadow flex gap-2 border w-full py-2 font-semibold transition-colors hover:bg-gray-100 text-sm">
              favorite
              <Heart color="red" size={20} />
            </button>
          </div>
          {/*  <RecommendedCarousel /> */}
          <div className="flex gap-2">
            <LinkedinLogo size={32} color={'#0072b1'} />
            <FigmaLogo size={32} color={'#ee1eb0'} />
            <GithubLogo size={32} />
          </div>
        </div>
      </div>
    )
  }
  return null
}
