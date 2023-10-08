'use client'

import Categories from './Categories'
import Plates from './Plates'
import { type Product, type Restaurant } from '@/types.d'
import { usePlatesCategory } from './usePlatesCategory'

interface Props {
  restaurant: Restaurant
  productsRestaurant: Product[]
}

export default function RestaurantCategories({
  restaurant,
  productsRestaurant,
}: Props) {
  const { category, productsCategory, changeCategory } = usePlatesCategory({
    productsRestaurant,
    restaurant,
  })

  return (
    <>
      <Categories
        restaurant={restaurant}
        category={category}
        changeCategory={changeCategory}
      />
      <div id='box' />
      <Plates category={category} productsCategory={productsCategory} />
    </>
  )
}
