import Image from 'next/image'
import Link from 'next/link'

import style from './Restaurants.module.css'
import { RestaurantsConst } from './const'

export default function Restaurants() {
  return (
    <section className={style.restaurants}>
      <p className={style.titleSection}>Seis restaurantes, Seis estilos</p>
      <div className={style.grid}>
        {RestaurantsConst.map((restaurant) => (
          <Link key={restaurant.href} href={restaurant.href}>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={restaurant.imgSrc}
                  alt={restaurant.imgAlt}
                  width={100}
                  height={100}
                />
                <h2>{restaurant.title}</h2>
              </div>
              <p>{restaurant.description}</p>
              <p>{restaurant.slogan}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
