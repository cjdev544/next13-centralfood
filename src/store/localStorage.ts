import { create } from 'zustand'

import { type Product } from '@/types.d'
import { devtools, persist } from 'zustand/middleware'

interface State {
  cartProducts: Product[]
  addProduct: (product: Product) => void
  updateProduct: (product: Product, number: number) => void
  deleteProduct: (product: Product) => void
  deleteAllProducts: () => void
}

export const useLocalStorageState = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        cartProducts: [],

        addProduct: (product) => {
          set((state) => ({ cartProducts: [...state.cartProducts, product] }))
        },

        updateProduct: (product, number) => {
          product.number = number
          const cart = get().cartProducts
          const newStorage = cart?.map((productCart) =>
            productCart.id === product.id ? product : productCart
          )
          set(() => ({ cartProducts: newStorage }))
        },

        deleteProduct: (product) => {
          const cartProducts = get().cartProducts
          const changeProducts = cartProducts.filter(
            (prod) => prod.id !== product.id
          )
          set(() => ({ cartProducts: changeProducts }))
        },

        deleteAllProducts: () => set(() => ({ cartProducts: [] })),
      }),
      { name: 'centralFood' }
    )
  )
)
