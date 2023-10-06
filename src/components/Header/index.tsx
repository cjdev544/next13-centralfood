import Image from 'next/image'
import Link from 'next/link'
// import useOnclickOutside from 'react-cool-onclickoutside'
import { FaCartPlus } from 'react-icons/fa'

import Logo from '../../public/centralfood.svg'
// import Logo from '../../public/gorro.png'
// import Logo from '../../public/logoCentralValentin.png'
import NavBar from './components/NavBar'
import style from './Header.module.css'

export default function Header() {
  // const ref = useOnclickOutside(() => {
  //   setShowOptions(false)
  // })
  const authUser = true
  const cartProducts = ['']

  return (
    <header className={style.headerContainer}>
      <div className={`container ${style.header}`}>
        {/* Logo */}
        <Link href='/' prefetch={false}>
          <div className={style.logo}>
            <Image
              src={Logo}
              alt='Central Food logo'
              //width={143} navidad
              //height={97} navidad
              // width={100}
              // height={80}
              width={120}
              height={90}
              priority={true}
            />
          </div>
        </Link>

        {/* Menu */}
        <div className={style.firstMenu}>
          <NavBar />
        </div>

        {/* Profile */}
        <div className={style.cartSide}>
          <Link href='/carrito' prefetch={false}>
            <div className={style.cartIcon}>
              <FaCartPlus className={style.cart} />
              {cartProducts && (
                <span
                  style={
                    !cartProducts?.length
                      ? { display: 'none' }
                      : { color: '#fff' }
                  }
                >
                  {cartProducts?.length}
                </span>
              )}
            </div>
            <span className={style.hidden}>carrito de compras</span>
          </Link>
          {!authUser && <span className={style.auth}>INICIO / REGISTRO</span>}
        </div>
      </div>
      <div className={style.secundMenu}>
        <NavBar />
      </div>
    </header>
  )
}
