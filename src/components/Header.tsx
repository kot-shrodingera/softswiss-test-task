import clsx from 'clsx'
import { useState } from 'react'

import CartIcon from '@/assets/icons/cart.svg?react'
import CloseIcon from '@/assets/icons/close.svg?react'
import GoLogoIcon from '@/assets/icons/goLogo.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'
import MenuIcon from '@/assets/icons/menu.svg?react'

const links = [
  {
    id: 'home',
    path: '#',
    text: 'Home',
  },
  {
    id: 'products',
    path: '#',
    text: 'Products',
  },
  {
    id: 'cart',
    path: '#',
    text: <CartIcon />,
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header--container">
        <div className="header--logo">
          <LogoIcon className="header--logo-icon" />
          <GoLogoIcon className="header--go-logo-icon" />
        </div>
        <nav className={clsx('header--nav', isMenuOpen && 'opened')}>
          {links.map(({ id, path, text }) => (
            <a key={id} href={path} className="nav-link">
              {text}
            </a>
          ))}
          <CloseIcon
            className="header--nav--close-icon"
            onClick={() => {
              setIsMenuOpen((value) => !value)
            }}
          />
        </nav>
        <MenuIcon
          className="header--burger"
          onClick={() => {
            setIsMenuOpen((value) => !value)
          }}
        />
        {/* <nav className={clsx('menu-mobile', isMenuOpen ? 'opened' : 'closed')}>
          <CloseIcon
            className="menu-mobile--close-icon"
            onClick={() => {
              setIsMenuOpen((value) => !value)
            }}
          />
          {links.map(({ id, path, text }) => (
            <a key={id} href={path} className="nav-link">
              {text}
            </a>
          ))}
        </nav> */}
      </div>
    </header>
  )
}
export default Header
