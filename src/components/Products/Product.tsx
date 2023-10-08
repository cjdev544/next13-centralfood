import Image from 'next/image'

import { type Product } from '@/types.d'
import styles from './Products.module.css'

interface Props {
  product: Product
  changeProduct: (product: Product) => void
  openOrCloseModal: (value: boolean) => void
}

export default function Product({
  product,
  changeProduct,
  openOrCloseModal,
}: Props) {
  const cutDescription = product?.descripcion?.substring(0, 80)

  const handleClick = () => {
    changeProduct(product)
    openOrCloseModal(true)
  }

  return (
    <article className={styles.product} onClick={handleClick}>
      <div className={styles.image}>
        <Image
          className={styles.imageBox}
          src={product.image}
          alt={product.nombre}
          width={100}
          height={100}
          quality={30}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.headerInfo}>
          <h3>{product.nombre}</h3>
          <p>{product.precio}€</p>
        </div>
        <p>{cutDescription}...</p>
      </div>
    </article>
  )
}
