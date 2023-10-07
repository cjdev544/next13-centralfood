'use client'

import { Link } from 'react-scroll'

import { usePlatesCategory } from '../usePlatesCategory'
import { type Product, type Restaurant } from '@/types.d'
import styles from './Categories.module.css'

interface Props {
  restaurant: Restaurant
  productsRestaurant: Product[]
}

export default function Categories({ restaurant, productsRestaurant }: Props) {
  const { category, setCategory } = usePlatesCategory({
    productsRestaurant,
    restaurant,
  })

  return (
    <div className={styles.categories}>
      {restaurant?.categories.map((itemCategory, idx) => (
        <Link
          key={idx}
          className={styles.arrow}
          to='box'
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            className={category === itemCategory ? styles.category : ''}
            onClick={() => setCategory(itemCategory)}
          >
            {itemCategory}
          </p>
        </Link>
      ))}
    </div>
  )
}
