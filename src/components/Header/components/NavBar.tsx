import Link from 'next/link'

import style from './NavBar.module.css'

export default function NavBar() {
  const authUser = true

  const currentPath = '/'

  return (
    <nav className={style.navBar}>
      <ul className={style.menu}>
        <li
          style={
            currentPath === '/'
              ? {
                  color: '#363636',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #363636',
                }
              : { fontWeight: 'normal' }
          }
        >
          <Link href='/' prefetch={false}>
            Inicio
          </Link>
        </li>
        <li
        // style={
        //   currentPath === '/restaurantes'
        //     ? {
        //         color: '#363636',
        //         fontWeight: 'bold',
        //         borderBottom: '2px solid #363636',
        //       }
        //     : { fontWeight: 'normal' }
        // }
        >
          <Link href='/restaurantes' prefetch={false}>
            Restaurantes
          </Link>
        </li>
        {authUser && (
          <li
          // style={
          //   currentPath === '/pedidos'
          //     ? {
          //         color: '#363636',
          //         fontWeight: 'bold',
          //         borderBottom: '2px solid #363636',
          //       }
          //     : { fontWeight: 'normal' }
          // }
          >
            <Link href='/pedidos' prefetch={false}>
              Mis pedidos
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
