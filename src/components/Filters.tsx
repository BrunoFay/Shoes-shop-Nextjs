import React, { useContext } from 'react'
import { filterContext } from '../context/filterProvider'

export default function Filters() {
  const { isFilterHidden } = useContext(filterContext)
  return (
    <div
      className={`${
        isFilterHidden
          ? 'w-[0%]  '
          : 'w-[19.96%] overflow-hidden lg:border-l-2 border-r-2 '
      } py-20  transition-all duration-150 items-center `}
    >
      <div
        className={`${
          isFilterHidden && 'hidden'
        } flex flex-col  text-center items-center `}
      >
        <strong className="text-2xl text-zinc-800 drop-shadow-lg shadow-black">
          Nike
        </strong>
        <div className="mt-9  w-fit items-center flex flex-col gap-6 ">
          <button>NIKE SPORTSWEAR</button>
          <button>NIKE SB</button>
          <button>AIR MAX</button>
          <button>JORDAN</button>
        </div>
        <div className="mt-14">
          <strong className="text-2xl text-zinc-800 drop-shadow-lg shadow-black">
            Price
          </strong>
          <form action="" className="flex mt-9 gap-4 flex-col">
            <label className="flex flex-col text-left">
              Min
              <input
                placeholder="R$ 200"
                className="rounded px-2 ring-2 w-28 h-7"
                type="number"
              />
            </label>
            <label className="flex flex-col text-left">
              Max
              <input
                placeholder="R$ 3.000"
                className="rounded px-2 ring-2 w-28 h-7"
                type="number"
              />
            </label>
          </form>
        </div>
        <div className="mt-14">
          <strong className="text-2xl text-zinc-800 drop-shadow-lg shadow-black">
            Colors
          </strong>
          <div className="rounded shadow-md border gap-2 w-44 h-20 m-7 px-4 py-3 flex flex-wrap">
            <button className="w-5 h-5 rounded-full bg-red-500" />
            <button className="w-5 h-5 rounded-full bg-blue-500" />
            <button className="w-5 h-5 rounded-full bg-orange-500" />
            <button className="w-5 h-5 rounded-full bg-black" />
            <button className="w-5 h-5 rounded-full bg-pink-500" />
            <button className="w-5 h-5 border rounded-full bg-white" />
            <button className="w-5 h-5 rounded-full bg-gray-500" />
            <button className="w-5 h-5 rounded-full bg-cyan-500" />
            <button className="w-5 h-5 rounded-full bg-yellow-900" />
            <button className="w-5 h-5 rounded-full bg-purple-700" />
          </div>
        </div>
      </div>
    </div>
  )
}