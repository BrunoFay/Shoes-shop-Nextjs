import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MagnifyingGlass, ShoppingCartSimple, User } from 'phosphor-react'
import { useEffect, useState } from 'react'
import mainLogo2 from '../assets/header logos/shoes.svg'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    setIsNavOpen(false)
  }, [router.pathname])

  return (
    <header className="flex gap-1 ">
      <div className="max-w-72 sm:w-[20%] w-[50%] 2xl:border-l-2 bg-white border-b-2 border-r-2 h-28 flex items-center justify-center">
        <div className="absolute top-[-50px] ">
          <Image src={mainLogo2} className="lg:w-40 lg:h-40 w-28 h-48" alt="" />
        </div>
      </div>
      <div className="flex items-center bg-white border-b-2 border-l-2 2xl:border-r-2 justify-between px-10 w-[80%]">
        <nav className="relative left-12 md:flex lg:text-base hidden text-sm lg:gap-10 gap-3">
          <Link
            className={`${
              router.pathname === '/category/nike' &&
              'text-zinc-900 border-brand'
            }`}
            href="/category/nike"
          >
            Nike
          </Link>
          <Link
            className={`${
              router.pathname === '/category/adidas' &&
              'text-zinc-900 border-brand'
            }`}
            href="/category/adidas"
          >
            Adidas
          </Link>
          <Link
            className={`${
              router.pathname === '/category/puma' &&
              'text-zinc-900 border-brand'
            }`}
            href="/category/puma"
          >
            Puma
          </Link>
          <Link
            className={`${
              router.pathname === '/category/vans' &&
              'text-zinc-900 border-brand'
            }`}
            href="/category/vans"
          >
            Vans
          </Link>
          <Link className={`${router.pathname === '/' && ''}`} href="/">
            Sneakers
          </Link>
        </nav>
        <div className="xl:flex hidden items-center ">
          <MagnifyingGlass size={23} className="relative left-7 " />
          <input
            placeholder="AirMax Scorpion "
            type="text"
            className="border w-52  rounded py-1 pl-8 pr-2 outline-none focus:ring-2"
          />
        </div>
        <nav className="flex gap-4">
          <Link href="#" className="hover:text-brand">
            <User size={24} />
          </Link>
          <Link href="#" className="hover:text-brand">
            <ShoppingCartSimple size={24} />
          </Link>
        </nav>
        <HamburgerMenu setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      </div>
    </header>
  )
}
