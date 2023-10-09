'use client'

import { useState } from 'react'

import Product from './Product'
import ModalProduct from '@/components/modals/ModalProduct'
import { useProducts } from '@/hooks/useProducts'
import { type Restaurant, type Product as ProductType } from '@/types.d'
import styles from './Products.module.css'

interface Props {
  products: ProductType[]
  productsToMap: ProductType[]
  restaurants: Restaurant[]
}

export default function Products({
  products,
  productsToMap,
  restaurants,
}: Props) {
  const openOrCloseModal = (value: boolean) => setOpenModal(value)
  const { loadProducts, selectProduct } = useProducts({
    restaurants,
    openOrCloseModal,
  })
  loadProducts(products)

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.products}>
      {productsToMap.map((product) => (
        <Product
          key={product.id}
          product={product}
          selectProduct={selectProduct}
          openOrCloseModal={openOrCloseModal}
        />
      ))}
      {openModal && (
        <ModalProduct
          restaurants={restaurants}
          openOrCloseModal={openOrCloseModal}
        />
      )}
    </div>
  )
}
