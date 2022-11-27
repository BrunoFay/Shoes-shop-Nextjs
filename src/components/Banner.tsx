import { SlidersHorizontal } from 'phosphor-react'
import { PropsWithChildren, useContext } from 'react'
import { filterContext } from '../context/filterProvider'

export default function Banner({ children }: PropsWithChildren) {
  const {
    handleFilterVisibility,
    isFilterHidden,
    handleGridFilter,
    gridFilter,
  } = useContext(filterContext)
  return (
    <div
      className={`${
        !isFilterHidden && 'border-l-2 lg:border-r-2'
      } h-32  rounded-bl-lg rounded-br-lg border-b-2  bg-white items-center sm:flex hidden justify-between`}
    >
      <div className="pl-8 flex items-center  gap-6">{children}</div>
      <div className="flex lg:mx-0 mx-auto gap-8 transition-colors">
        <button onClick={() => handleGridFilter('two')} className="flex gap-1">
          <div
            className={`${
              gridFilter === 'two' && 'bg-brand'
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'two' && 'bg-brand'
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
        </button>
        <button
          onClick={() => handleGridFilter('tree')}
          className="sm:flex gap-1 hidden"
        >
          <div
            className={`${
              gridFilter === 'tree' && 'bg-brand'
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'tree' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'tree' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
        </button>
        <button
          onClick={() => handleGridFilter('four')}
          className="md:flex gap-1 hidden"
        >
          <div
            className={`${
              gridFilter === 'four' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'four' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'four' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'four' && 'bg-brand  '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
        </button>
        <button
          onClick={() => handleGridFilter('five')}
          className="hidden 2xl:visible 2xl:flex gap-1 md:grid-cols-3 "
        >
          <div
            className={`${
              gridFilter === 'five' && 'bg-brand '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'five' && 'bg-brand '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'five' && 'bg-brand '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'five' && 'bg-brand '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
          <div
            className={`${
              gridFilter === 'five' && 'bg-brand '
            } w-6 h-6 rounded border-2 border-zinc-500`}
          />
        </button>
      </div>

      <button
        onClick={handleFilterVisibility}
        className="lg:flex items-center lg:relative hidden right-10 gap-2"
      >
        {isFilterHidden ? 'Show Filters' : 'Hide Filters'}
        <SlidersHorizontal size={28} />
      </button>
    </div>
  )
}
