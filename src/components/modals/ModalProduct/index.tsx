'use cliente'

import { useRef } from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'

import ProductsComplements from './components/ProductsComplements'
import { useProducts } from '@/hooks/useProducts'
import { type Restaurant } from '@/types.d'
import styles from './ProductModal.module.css'
import IsPlatePepper from './components/IsPlatePepper'
import IsPlateWhitJalapeños from './components/IsPlateWithJalapeño/IsPlateWithJalapeño'

interface Props {
  restaurants: Restaurant[]
  openOrCloseModal: (value: boolean) => void
}

export default function ModalProduct({ restaurants, openOrCloseModal }: Props) {
  const boxRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const {
    counterProduct,
    isJalapeño,
    isPepper,
    product,
    products,
    selectJalapeño,
    selectPepper,
    total,
    addToCart,
    minusProduct,
    plusProduct,
    setComplements,
    setSelectJalapeño,
    setSelectPepper,
  } = useProducts({ restaurants, openOrCloseModal })

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
          {isPepper && (
            <IsPlatePepper
              selectPepper={selectPepper}
              setSelectPepper={setSelectPepper}
            />
          )}
          {isJalapeño && (
            <IsPlateWhitJalapeños
              selectJalapeño={selectJalapeño}
              setSelectJalapeño={setSelectJalapeño}
            />
          )}
          <span className={styles.productPrice}>{product.precio}€</span>
          <div className={styles.numberProducts}>
            <div className={styles.circle} onClick={minusProduct}>
              <FaMinus />
            </div>
            <span className={styles.spanNumber}>{counterProduct}</span>
            <div className={styles.circle} onClick={plusProduct}>
              <FaPlus />
            </div>
          </div>
          <div className={styles.button}>
            <button className='button' onClick={addToCart}>
              Añadir por {total}€
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
