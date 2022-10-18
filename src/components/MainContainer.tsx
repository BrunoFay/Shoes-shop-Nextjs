import { PropsWithChildren } from 'react'
import Filters from './Filters'

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className="flex gap-1 min-h-[88.4vh]">
        <Filters />
        <div className="flex-1 flex flex-col ">{children}</div>
      </div>
    </div>
  )
}
