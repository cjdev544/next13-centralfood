import Products from '@/components/Products'
import {
  getPopularProducts,
  getProducts,
  getRestaurants,
} from '@/services/products'
import style from './HomePlates.module.css'

export default async function HomePlates() {
  const popularData = await getPopularProducts()
  const products = await getProducts()
  const restaurants = await getRestaurants()

  return (
    <section className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <p className={style.discount}>
            Realiza tu primera compra con un <span>10% de DESCUENTO</span>
          </p>
          {popularData.productsData.length > 0 && (
            <>
              <h2 className={style.title}>{popularData?.title}</h2>
              <Products
                products={products}
                productsToMap={popularData.productsData}
                restaurants={restaurants}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
