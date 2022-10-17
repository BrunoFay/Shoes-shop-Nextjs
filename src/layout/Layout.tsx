import { PropsWithChildren } from 'react'
import Header from '../components/Header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      {children}
    </div>
  )
}
