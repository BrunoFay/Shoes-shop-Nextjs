import { useRouter } from 'next/router'
import { useContext } from 'react'
import { filterContext } from '../context/filterProvider'
import { useFilters } from '../hooks/useFilters'

export default function Filters() {
  const { isFilterHidden } = useContext(filterContext)
  const router = useRouter()
  const currentCategory = router.pathname.split('/')[2]
  const { handleChangeProductByFilter, handleCategoriesFilters } =
    useFilters(currentCategory)

  return (
    <div
      className={`${
        isFilterHidden
          ? 'w-[0%]  '
          : 'w-[19.96%] overflow-hidden lg:border-l-2 border-r-2 '
      } py-20  transition-all duration-150 items-center bg-white`}
    >
      <div
        className={`${
          isFilterHidden && 'hidden'
        } flex flex-col  text-center items-center `}
      >
        <strong className="text-2xl first-letter:uppercase text-zinc-800 drop-shadow-lg shadow-black">
          {currentCategory || 'Sneakers'}
        </strong>
        <div className="mt-9  w-fit items-center flex flex-col gap-6 ">
          {handleCategoriesFilters().map((category, i) => (
            <button
              key={i}
              onClick={() => handleChangeProductByFilter(category)}
              className={`focus:border-brand border-b-4 border-b-transparent rounded px-2 uppercase`}
            >
              {category}
            </button>
          ))}
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
                className="rounded px-2 border text-zinc-700  w-28 h-7"
                type="number"
              />
            </label>
            <label className="flex flex-col text-left">
              Max
              <input
                placeholder="R$ 3.000"
                className="rounded px-2 border text-zinc-700  w-28 h-7"
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
            <button
              onClick={() => handleChangeProductByFilter('vermelho')}
              className="w-5 h-5 rounded-full bg-red-500"
            />
            <button
              onClick={() => handleChangeProductByFilter('azul')}
              className="w-5 h-5 rounded-full bg-blue-500"
            />
            <button
              onClick={() => handleChangeProductByFilter('laranja')}
              className="w-5 h-5 rounded-full bg-brand"
            />
            <button
              onClick={() => handleChangeProductByFilter('preto')}
              className="w-5 h-5 rounded-full bg-black"
            />
            <button
              onClick={() => handleChangeProductByFilter('rosa')}
              className="w-5 h-5 rounded-full bg-pink-500"
            />
            <button
              onClick={() => handleChangeProductByFilter('branco')}
              className="w-5 h-5 border rounded-full bg-white"
            />
            <button
              onClick={() => handleChangeProductByFilter('cinza')}
              className="w-5 h-5 rounded-full bg-gray-500"
            />
            <button
              onClick={() => handleChangeProductByFilter('verde')}
              className="w-5 h-5 rounded-full bg-green-500"
            />
            <button
              onClick={() => handleChangeProductByFilter('marrom')}
              className="w-5 h-5 rounded-full bg-yellow-900"
            />
            <button
              onClick={() => handleChangeProductByFilter('roxo')}
              className="w-5 h-5 rounded-full bg-purple-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
