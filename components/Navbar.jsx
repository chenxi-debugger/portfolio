'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      className={
        // 小屏：固定底部；xl 以上：右上角绝对定位
        'fixed bottom-0 w-full z-50 bg-gray-800 text-white shadow-lg transition-all duration-300 ' +
        'xl:absolute xl:top-8 xl:right-8 xl:bottom-auto xl:w-auto ' +
        'xl:rounded-tr-2xl xl:rounded-bl-2xl'
      }
    >
      <ul className="flex justify-around xl:flex-row xl:items-end xl:gap-10 p-5">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-lg hover:text-gray-400 hover:text-md transition-all duration-300 ${
                pathname === item.href ? 'text-cyan-300' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
