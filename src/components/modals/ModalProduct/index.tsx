'use cliente'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'
import { toast } from 'react-toastify'

import ProductsComplements from './components/ProductsComplements'
import { type Restaurant, type Product } from '@/types.d'
import styles from './ProductModal.module.css'

interface Props {
  product: Product | null
  products: Product[]
  restaurants: Restaurant[]
  openOrCloseModal: (value: boolean) => void
}

export default function ModalProduct({
  product,
  products,
  restaurants,
  openOrCloseModal,
}: Props) {
  const boxRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [complements, setComplements] = useState<Product[]>([])

  useEffect(() => {
    const restaurantProduct = restaurants.find(
      (restaurant) => restaurant.page === product?.restaurante
    )
    if (restaurantProduct) setRestaurant(restaurantProduct)
  }, [product, restaurants])

  const addCar = () => {
    if (!restaurant?.isOpen) {
      toast.warning(
        `${restaurant?.name} se encuentra cerrado en estos momentos`
      )
      return
    }
    console.log('Añadiendo al carrito')
    // if (isPepper) {
    //   addProductCart({ ...pepperPlate, number: counterProduct })
    //   complements.forEach((complement) => {
    //     addProductCart({ ...complement, number: 1 })
    //   })
    // } else if (isJalapeño) {
    //   addProductCart({ ...jalapeñoPlate, number: counterProduct })
    //   complements.forEach((complement) => {
    //     addProductCart({ ...complement, number: 1 })
    //   })
    // } else {
    //   addProductCart({ ...product, number: counterProduct })
    //   complements.forEach((complement) => {
    //     addProductCart({ ...complement, number: 1 })
    //   })
    // }
    // setOpenModal(false)
    // router.push('/carrito')
  }

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
            <button className='button' onClick={addCar}>
              Añadir por TOTAL€
            </button>
          </div>
          ProductsComplements
        </div>
      </div>
    </div>
  )
}
