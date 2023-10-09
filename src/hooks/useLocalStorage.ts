import { useEffect, useState } from 'react'
import { round } from 'mathjs'

import { useLocalStorageState } from '@/store/localStorage'

export function useLocalStorage() {
  const [totalCostProducts, setTotalCostProducts] = useState(0)

  const cartProducts = useLocalStorageState((state) => state.cartProducts)
  const addProductCart = useLocalStorageState((state) => state.addProduct)
  const updateProductCart = useLocalStorageState((state) => state.updateProduct)
  const deleteProductCart = useLocalStorageState((state) => state.deleteProduct)
  const removeAllProductsCart = useLocalStorageState(
    (state) => state.deleteAllProducts
  )

  useEffect(() => {
    if (cartProducts) {
      let total = 0
      cartProducts.forEach((product) => {
        if (product.number) {
          const price = round(Number(product?.precio) * product.number, 2)
          total = round(price + total, 2)
        }
      })
      setTotalCostProducts(total)
    }
  }, [cartProducts])

  return {
    cartProducts,
    totalCostProducts,
    addProductCart,
    updateProductCart,
    deleteProductCart,
    removeAllProductsCart,
  }
}
