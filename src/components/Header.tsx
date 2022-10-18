import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MagnifyingGlass, ShoppingCartSimple, User } from 'phosphor-react'
import mainLogo2 from '../assets/header logos/shoes.svg'

export default function Header() {
  const router = useRouter()

  return (
    <header className="flex gap-1">
      <div className="max-w-72 w-[20%] 2xl:border-l-2 border-b-2 border-r-2 h-28 flex items-center justify-center">
        <div className="absolute top-[-50px]">
          <Image src={mainLogo2} alt="" width="170px" height="170px" />
        </div>
      </div>
      <div className="flex items-center border-b-2 border-l-2 2xl:border-r-2 justify-between px-10 w-[80%]">
        <nav className="relative left-12 flex gap-10">
          <Link href="/category/nike">
            <a
              className={`${
                router.pathname === '/category/nike' &&
                'text-zinc-900 border-orange-500'
              }`}
            >
              Nike
            </a>
          </Link>
          <Link href="/category/adidas">
            <a
              className={`${
                router.pathname === '/category/adidas' &&
                'text-zinc-900 border-orange-500'
              }`}
            >
              Adidas
            </a>
          </Link>
          <Link href="/category/puma">
            <a
              className={`${
                router.pathname === '/category/puma' &&
                'text-zinc-900 border-orange-500'
              }`}
            >
              Puma
            </a>
          </Link>
          <Link href="/category/vans">
            <a
              className={`${
                router.pathname === '/category/vans' &&
                'text-zinc-900 border-orange-500'
              }`}
            >
              Vans
            </a>
          </Link>
          <Link href="/">
            <a className={`${router.pathname === '/' && ''}`}>Sneakers</a>
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
