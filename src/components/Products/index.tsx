'use client'

import { useState } from 'react'

import Product from './Product'
import ModalProduct from '@/components/modals/ModalProduct'
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
  const [product, setProduct] = useState<ProductType | null>(null)
  const [openModal, setOpenModal] = useState(false)

  const changeProduct = (product: ProductType) => setProduct(product)
  const openOrCloseModal = (value: boolean) => setOpenModal(value)

  return (
    <div className={styles.products}>
      {productsToMap.map((product) => (
        <Product
          key={product.id}
          product={product}
          changeProduct={changeProduct}
          openOrCloseModal={openOrCloseModal}
        />
      ))}
      {openModal && (
        <ModalProduct
          product={product}
          products={products}
          restaurants={restaurants}
          openOrCloseModal={openOrCloseModal}
        />
      )}
    </div>
  )
}
