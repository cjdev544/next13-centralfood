import Image from 'next/image'

import RestaurantCategories from '@/components/restaurant'
import { getProducts, getRestaurants } from '@/services/products'
import { Restaurants } from '@/types.d'
import style from './RestaurantPage.module.css'

interface Params {
  restaurant: Restaurants
}

export default async function RestaurantPage({ params }: { params: Params }) {
  const restaurants = await getRestaurants()
  const products = await getProducts()
  const restaurant = restaurants.find((rest) => rest.page === params.restaurant)
  const productsRestaurant = products.filter(
    (product) => product.restaurante === params.restaurant
  )

  if (!restaurant) return null

  return (
    <main style={{ overflow: 'hidden' }}>
      <div className={style.restaurant}>
        <div className={style.info}>
          <div className={style.logo}>
            <Image
              src={restaurant?.image}
              alt={`logo de ${restaurant.name}`}
              width={200}
              height={200}
              className={style.restaurant}
            />
            <h1>{restaurant.name}</h1>
            <h2 className={style.subtitle}>{restaurant.type}</h2>
          </div>
          <div>
            {restaurant?.firstContent?.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </div>
        {!restaurant.isOpen && (
          <span className={style.close}>
            {restaurant.name} se encuentra cerrado en estos momentos
          </span>
        )}
      </div>
      <RestaurantCategories
        products={products}
        restaurant={restaurant}
        restaurants={restaurants}
        productsRestaurant={productsRestaurant}
      />
      <div className={style.restaurantInfo}>
        <h2>{restaurant.subTitle}</h2>
        {restaurant.secondContent?.map((content, idx) => (
          <p key={idx}>{content}</p>
        ))}
      </div>
    </main>
  )
}
