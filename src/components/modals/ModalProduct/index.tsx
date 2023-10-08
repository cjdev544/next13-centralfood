'use cliente'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'

import { type Product } from '@/types.d'
import styles from './ProductModal.module.css'
import ProductsComplements from './components/ProductsComplements'

interface Props {
  product: Product | null
  products: Product[]
  openOrCloseModal: (value: boolean) => void
}

export default function ModalProduct({
  product,
  products,
  openOrCloseModal,
}: Props) {
  const boxRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const [complements, setComplements] = useState<Product[]>([])

  if (!product) return null

  return (
    <div className={styles.modal}>
      <div ref={boxRef} className={styles.box}>
        <FaRegWindowClose
          className={styles.close}
          onClick={() => openOrCloseModal(false)}
        />

        <ProductsComplements
          product={product}
          products={products}
          setComplements={setComplements}
        />

        <div className={styles.right}>
          <div className={styles.product}>
            <Image
              src={product.image}
              alt={product.nombre}
              width={200}
              height={200}
              quality={50}
            />
          </div>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <span className={styles.productPrice}>{product.precio}€</span>
          <div className={styles.numberProducts}>
            <div className={styles.circle}>
              <FaMinus />
            </div>
            <span className={styles.spanNumber}>COUNTER</span>
            <div className={styles.circle}>
              <FaPlus />
            </div>
          </div>
          <div className={styles.button}>
            <button className='button'>Añadir por TOTAL€</button>
          </div>
          ProductsComplements
        </div>
      </div>
    </div>
  )
}
