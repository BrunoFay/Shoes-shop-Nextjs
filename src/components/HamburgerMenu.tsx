import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function HamburgerMenu({ setIsNavOpen, isNavOpen }: any) {
  const router = useRouter()
  return (
    <section className="flex lg:hidden">
      <div
        className="space-y-2 group"
        onClick={() => setIsNavOpen((prev: boolean) => !prev)}
      >
        <span className="block h-0.5 w-8 animate-pulse group-hover:bg-brand bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse group-hover:bg-brand bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse group-hover:bg-brand bg-gray-600"></span>
      </div>

      <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link
              className={`${
                router.pathname === '/category/nike' &&
                'text-zinc-900 border-brand'
              }`}
              href="/category/nike"
            >
              Nike
            </Link>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link
              className={`${
                router.pathname === '/category/adidas' &&
                'text-zinc-900 border-brand'
              }`}
              href="/category/adidas"
            >
              Adidas
            </Link>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link
              className={`${
                router.pathname === '/category/puma' &&
                'text-zinc-900 border-brand'
              }`}
              href="/category/puma"
            >
              Puma
            </Link>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link
              className={`${
                router.pathname === '/category/vans' &&
                'text-zinc-900 border-brand'
              }`}
              href="/category/vans"
            >
              Vans
            </Link>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link className={`${router.pathname === '/' && ''}`} href="/">
              Sneakers
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
