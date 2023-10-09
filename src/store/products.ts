import { create } from 'zustand'
import { type Product } from '@/types.d'
import { devtools } from 'zustand/middleware'

interface State {
  product: Product | null
  products: Product[]
  loadProducts: (products: Product[]) => Promise<void>
  selectProduct: (product: Product) => void
}

export const useProductsStore = create<State>()(
  devtools((set) => ({
    product: null,
    products: [],

    loadProducts: async (products) => {
      set((state) => ({ ...state, products }))
    },

    selectProduct: (product) => {
      set((state) => ({ ...state, product }))
    },
  }))
)
