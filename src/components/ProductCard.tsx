import React from 'react'
import Image from 'next/future/image'

export default function ProductCard() {
  const imageTeste =
    'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20221017115318_8265991735_DZ.png'
  return (
    <div className="w-64 items-center flex flex-col">
      <div className="rounded shadow-md drop-shadow-lg">
        <Image
          className="rounded"
          src={imageTeste}
          alt=""
          width={256}
          height={228}
        />
      </div>
      <div className="px-1 mt-2  flex flex-col gap-1">
        <span className="lowercase first-letter:uppercase text-sm ">
          NIKE AIR MAX 1 PRM (CREPE HEMP) BEGE
        </span>
        <span className="text-sm font-semibold text-gray-400">R$ 1.299,90</span>
      </div>
    </div>
  )
}
