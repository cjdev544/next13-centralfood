import Image from 'next/image'
import Link from 'next/link'

import GuayWok from '@/public/logo-guaywok.svg'
import SushiGuay from '@/public/logo-sushi.svg'
import HamVzl from '@/public/logo-hamburgueseria.svg'
import Sabor from '@/public/logo-sabor.svg'
import Poke from '@/public/logo-pokes.svg'
import Burrito from '@/public/logo-burrito.png'
import Bebidas from '@/public/postres-bebidas.png'
import style from './RestaurantsPage.module.css'

export default function RestaurantsPage() {
  return (
    <div className={style.restaurants}>
      <h1>Nuestros Restaurantes</h1>
      <div className={style.logos}>
        <Link href='/sushiguay' className={style.restaurant}>
          <Image
            src={SushiGuay}
            alt='logo SushiGuay'
            width={100}
            height={100}
          />
          <h2>SushiGuay</h2>
          <span>Comida Japonesa</span>
        </Link>
        <Link href='/guaywok' className={style.restaurant}>
          <Image src={GuayWok} alt='logo GuayWok' width={100} height={100} />
          <h2>GuayWok</h2>
          <span>Comida China</span>
        </Link>
        <Link href='/sabor-casita' className={style.restaurant}>
          <Image
            src={Sabor}
            alt='logo Con sabor a casita'
            width={100}
            height={100}
          />
          <h2>Con Sabor a Casita</h2>
          <span>Comida Casera</span>
        </Link>
        <Link href='/hamburgueseria-venezuela' className={style.restaurant}>
          <Image
            src={HamVzl}
            alt='logo hamburguesería Venezuela'
            width={100}
            height={100}
          />
          <h2>Hamburguesería VZLA</h2>
          <span>Hamburguesas, Perros y Camperos</span>
        </Link>
        <Link href='/pokes-guay' className={style.restaurant}>
          <Image src={Poke} alt='logo Pokes Guay' width={100} height={100} />
          <h2>Pokes Guay</h2>
          <span>Comida Hawaiana</span>
        </Link>
        <Link href='/don-burrito' className={style.restaurant}>
          <Image
            src={Burrito}
            alt='logo Don Burrito'
            width={100}
            height={100}
          />
          <h2>Don Burrito</h2>
          <span>Comida Mexicana</span>
        </Link>
        <Link href='/postres-bebidas' className={style.restaurant}>
          <Image
            src={Bebidas}
            alt='Postres y bebidas'
            width={100}
            height={100}
          />
          <h2>Postres y Bebidas</h2>{' '}
        </Link>
      </div>
    </div>
  )
}
