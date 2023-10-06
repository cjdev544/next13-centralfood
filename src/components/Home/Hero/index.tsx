import Image from 'next/image'
import Link from 'next/link'

// import CentralFood from '../../public/logoCentralValentin.png'
import CentralFood from '@/public/centralfood10.svg'
import GuayWok from '@/public/logo-guaywok.svg'
import SushiGuay from '@/public/logo-sushi.svg'
import HamVzl from '@/public/logo-hamburgueseria.svg'
import Sabor from '@/public/logo-sabor.svg'
import Pokes from '@/public/logo-pokes.svg'
import Burrito from '@/public/logo-burrito.png'
import Bebidas from '@/public/postres-bebidas.png'
import { AnimateIcon } from './components/AnimateIcon'
import style from './Hero.module.css'

export default function Hero() {
  return (
    <div className={`container ${style.hero}`}>
      {/* LeftSide */}
      <div className={style.leftSide}>
        <div className={style.moto}>
          <AnimateIcon />
        </div>
        <div className={style.title}>
          <h1>
            CentralFood <span>Málaga</span>
          </h1>
          <span>En la variedad está el gusto</span>
        </div>
        <p className={style.phone}>
          También puedes hacer tus pedidos al número: 649-71-88-31
        </p>
      </div>

      {/* RightSide */}
      <div className={style.rightSide}>
        <div className={style.images}>
          <div className={style.principalImage}>
            <Image
              src={CentralFood}
              alt='Logo CentralFood'
              width={400}
              height={300}
              /* width={400}
              height={300} */
              priority={true}
            />
          </div>
          <p className={style.styles}>
            Seis restaurantes, Seis estilos.
            <span>Dale click en el logo y ve todos sus platos</span>
          </p>
          <div className={style.restaurants}>
            <Link href='/sushiguay' prefetch={false}>
              <Image
                src={SushiGuay}
                alt='logo SushiGuay'
                width={100}
                height={100}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/guaywok' prefetch={false}>
              <Image
                src={GuayWok}
                alt='logo GuayWok'
                width={100}
                height={100}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/sabor-casita' prefetch={false}>
              <Image
                src={Sabor}
                alt='logo Con sabor a casita'
                width={100}
                height={100}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/hamburgueseria-venezuela' prefetch={false}>
              <Image
                src={HamVzl}
                alt='logo hamburguesería Venezuela'
                width={100}
                height={100}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/pokes-guay' prefetch={false}>
              <Image
                src={Pokes}
                alt='logo Pokes Guay'
                width={100}
                height={100}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/don-burrito' prefetch={false}>
              <Image
                src={Burrito}
                alt='logo Don Burrito'
                width={80}
                height={80}
                className={style.restaurant}
                priority={true}
              />
            </Link>
            <Link href='/postres-bebidas' prefetch={false}>
              <Image
                src={Bebidas}
                alt='Postres y bebidas'
                width={80}
                height={80}
                className={style.restaurant}
                priority={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
