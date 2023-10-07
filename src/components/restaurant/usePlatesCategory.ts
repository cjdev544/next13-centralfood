import { Product, Restaurant } from '@/types'
import { useEffect, useState } from 'react'

interface Params {
  restaurant?: Restaurant
  productsRestaurant?: Product[]
}

export function usePlatesCategory({ restaurant, productsRestaurant }: Params) {
  const [category, setCategory] = useState<string | null>(null)
  const [productsCategory, setProductCategory] = useState<Product[]>([])

  useEffect(() => {
    if (!category) {
      const products = productsRestaurant?.filter(
        (product) => product.categoria === restaurant?.categories[0]
      )
      if (restaurant?.categories[0]) setCategory(restaurant?.categories[0])
      if (products) setProductCategory(products)
    } else {
      const products = productsRestaurant?.filter(
        (product) => product.categoria === category
      )
      if (products) setProductCategory(products)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  return {
    category,
    productsCategory,
    setCategory,
  }
}
