import { Link } from 'react-scroll'

import { type Restaurant } from '@/types.d'
import styles from './Categories.module.css'

interface Props {
  restaurant: Restaurant
  category: string | null
  changeCategory: (category: string) => void
}

export default function Categories({
  category,
  restaurant,
  changeCategory,
}: Props) {
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
            onClick={() => {
              changeCategory(itemCategory)
            }}
          >
            {itemCategory}
          </p>
        </Link>
      ))}
    </div>
  )
}
