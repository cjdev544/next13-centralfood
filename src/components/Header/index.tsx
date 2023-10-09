'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'

const FormModal = dynamic(() => import('../modals/FormModal'), {
  suspense: true,
})
// import useFormModal from '../../hooks/useFormModal'
// import Auth from '../Auth'
// import Logo from '../../public/gorro.png'
// import Logo from '../../public/logoCentralValentin.png'
import NavBar from './components/NavBar'
import { useHeader } from './useHeader'
import Logo from '../../public/centralfood.svg'
import style from './Header.module.css'
import AuthForms from '../modals/FormModal/AuthForms'

export default function Header() {
  const {
    authUser,
    cartProducts,
    initialsName,
    openModal,
    showOptions,
    logout,
    ref,
    setOpenModal,
    setShowOptions,
  } = useHeader()

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
          {!authUser && (
            <span className={style.auth} onClick={() => setOpenModal(true)}>
              INICIO / REGISTRO
            </span>
          )}
          {authUser && (
            <div
              ref={ref}
              className={style.profile}
              onClick={() => setShowOptions(!showOptions)}
            >
              {authUser?.photoURL && (
                <Image
                  src={authUser.photoURL}
                  alt='Opciones de usuario'
                  width={50}
                  height={50}
                  className={style.photoUser}
                />
              )}
              {!authUser?.photoURL && (
                <div className={style.noPhoto}>
                  <span>{initialsName}</span>
                </div>
              )}
              <div
                className={style.options}
                style={
                  showOptions
                    ? { opacity: '1', top: '5rem' }
                    : { opacity: '0', top: '-10rem' }
                }
              >
                <Link href='/cuenta' prefetch={false}>
                  <span>Perfil de usuario</span>
                </Link>
                <span onClick={logout}>Cerrar sesión</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.secundMenu}>
        <NavBar />
      </div>
      {openModal && (
        <Suspense fallback={''}>
          <FormModal
            setOpenModal={setOpenModal}
            contentModal={<AuthForms setOpenModal={setOpenModal} />}
          />
        </Suspense>
      )}
    </header>
  )
}
