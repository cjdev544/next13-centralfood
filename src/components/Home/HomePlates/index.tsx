// const ProductModal = dynamic(import('../modals/ProductModal'))
// import Product from '../Product'
import Product from '@/components/Product'
import { getPopularProducts } from '@/services/products'
import style from './HomePlates.module.css'

export default async function HomePlates() {
  const popularData = await getPopularProducts()

  // const [openModal, setOpenModal] = useState(false)

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
              <div className={style.products}>
                {popularData.productsData.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    // setOpenModal={setOpenModal}
                    // setProduct={setProduct}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* {openModal && (
        <ProductModal
          setOpenModal={setOpenModal}
          products={products}
          product={product}
          restaurants={restaurants}
        />
      )} */}
    </section>
  )
}
