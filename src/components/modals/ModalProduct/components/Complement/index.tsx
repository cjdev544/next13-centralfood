import { useEffect, useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'

import { type Product } from '@/types.d'
import styles from './Complement.module.css'

interface Props {
  product: Product
  setComplements: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function Complement({ product, setComplements }: Props) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    product.number = 1
  }, [product])

  useEffect(() => {
    if (isChecked) {
      setComplements((products) => [...products, product])
    } else {
      setComplements((products) =>
        products.filter((complement) => complement.id !== product.id)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, product])

  return (
    <div
      className={isChecked ? styles.itemBoxCheck : styles.itemBox}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span>{product.nombre}</span>
      <div className={styles.right}>
        <span>{product.precio}€</span>
        <div className={isChecked ? styles.circleItemCheck : styles.circleItem}>
          {isChecked ? <FaCheck /> : <FaPlus />}
        </div>
      </div>
    </div>
  )
}
