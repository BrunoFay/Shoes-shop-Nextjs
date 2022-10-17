import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MagnifyingGlass, ShoppingCartSimple, User } from 'phosphor-react'
import Image from 'next/image'
import nikeLogo from '../assets/header logos/nike.svg'
import pumaLogo from '../assets/header logos/puma.svg'
import vansLogo from '../assets/header logos/vans.svg'
import adidasLogo from '../assets/header logos/adidas.svg'

export default function Header() {
  const router = useRouter()
  function switchLogoImage() {
    switch (router.pathname) {
      case '/category/nike':
        return nikeLogo
      case '/category/adidas':
        return adidasLogo
      case '/category/puma':
        return pumaLogo
      case '/category/vans':
        return vansLogo
      default:
        return ''
    }
  }

  return (
    <header className="flex gap-1">
      <div className="max-w-72 w-[20%] 2xl:border-l-2 border-b-2 border-r-2 h-28 flex items-center justify-center">
        <Image src={switchLogoImage()} alt="" width="100px" height="100px" />
      </div>
      <div className="flex items-center border-b-2 border-l-2 2xl:border-r-2 justify-between px-10 w-[80%]">
        <nav className="relative left-12 flex gap-10">
          <Link href="/category/nike">
            <a
              className={
                router.pathname === '/category/nike' ? 'font-semibold ' : ''
              }
            >
              Nike
            </a>
          </Link>
          <Link href="/category/adidas">
            <a
              className={
                router.pathname === '/category/adidas' ? 'font-semibold ' : ''
              }
            >
              Adidas
            </a>
          </Link>
          <Link href="/category/puma">
            <a
              className={
                router.pathname === '/category/puma' ? 'font-semibold ' : ''
              }
            >
              Puma
            </a>
          </Link>
          <Link href="/category/vans">
            <a
              className={
                router.pathname === '/category/vans' ? 'font-semibold ' : ''
              }
            >
              Vans
            </a>
          </Link>
          <Link href="/">
            <a className={router.pathname === '/' ? '' : ''}>Sneakers</a>
          </Link>
        </nav>
        <form className="flex items-center " action="">
          <MagnifyingGlass size={23} className="relative left-7 " />
          <input
            placeholder="AirMax Scorpion "
            type="text"
            className="border w-52  rounded py-1 pl-8 pr-2 outline-none focus:ring-2"
          />
        </form>
        <nav className="flex gap-4">
          <Link href="#">
            <a>
              <User size={24} />
            </a>
          </Link>
          <Link href="#">
            <a>
              <ShoppingCartSimple size={24} />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
